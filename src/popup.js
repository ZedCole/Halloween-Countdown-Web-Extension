var dateHalloween = new Date(); 
var dateToday = new Date();
var writeArea = document.getElementById('countdown');
var isItOctober = false;
var isTodayHalloween = false;
var c_days,c_hours,c_minutes,c_seconds
const _DATE_FORMATING = 1000 * 60 * 60 * 24;

function getDateToday(){
    var today = new Date();
    var offset = today.getTimezoneOffset() / 60;
    today.setUTCHours(today.getUTCHours() - offset);
    dateToday = today;
}

function getDateHalloween() {
    var today = new Date(2021,9,30);
    var offset = today.getTimezoneOffset() / 60;
    today.setUTCHours(today.getUTCHours() - offset);
    if (today.getUTCMonth() > 9) { // Past October
        y = today.getUTCFullYear() + 1;
        dateHalloween = new Date(Date.UTC(y,9,31, offset));
    } else { // Is or Before October
        y = today.getUTCFullYear();
        dateHalloween = new Date(Date.UTC(y,9,31, offset));
        if (today.getUTCMonth() == 9) { // Is it October
            isItOctober = true;
            if (today.getUTCDate() == 31) { // Is it Halloween
                isTodayHalloween = true;
            }
        }
    }
}

function timeDifference(endDate, startDate) {
    difference = endDate - startDate;
    c_days = Math.floor(difference / _DATE_FORMATING);
    c_hours = Math.floor((difference % _DATE_FORMATING) / (1000 * 60 * 60));
    c_minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    c_seconds = Math.floor((difference % (1000 * 60)) / 1000);
}

function drawCountdown() {
    getDateToday();
    getDateHalloween();
    timeDifference(dateHalloween, dateToday);
    writeArea.innerHTML = c_days + " days " + c_hours + " hours " + c_minutes + " minutes " + c_seconds + " seconds Until Halloween!";
}

// Uncomment when draw function is ready
drawCountdown();
setInterval(drawCountdown, 500);