var dateHalloween = new Date(); 
var dateToday = new Date();
var writeArea = document.getElementById('countdown');
var c_days,c_hours,c_minutes,c_seconds
const _DATE_FORMATING = 1000 * 60 * 60 * 24;

function getDateToday(){
    var today = new Date();
    var offset = today.getTimezoneOffset() / 60;
    today.setUTCHours(today.getUTCHours() - offset);
    dateToday = today;
}

function getDateHalloween() {
    var today = new Date();
    var offset = today.getTimezoneOffset() / 60;
    today.setUTCHours(today.getUTCHours() - offset);
    if (today.getUTCMonth() > 9) {
        y = today.getUTCFullYear() + 1;
        dateHalloween = new Date(Date.UTC(y,9,31, offset));
    } else {
        y = today.getUTCFullYear();
        dateHalloween = new Date(Date.UTC(y,9,31, offset));
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