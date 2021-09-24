function dToday(){
    var d = new Date();
    var second = d.getUTCSeconds();
    var minute = d.getUTCMinutes();
    var offset = d.getTimezoneOffset() / 60;
    var hour = d.getUTCHours() - offset;
    var day = d.getUTCDate();
    var month = d.getUTCMonth();
    var year = d.getUTCFullYear();

    var now = day + '/' + month +'/' + year + ' ' + hour + ':' + minute + ':' + second;

    console.log(now);

    hall = new Date(year, 9, 31);
    console.count(hall);
}

dToday();

// Check if Halloween has already been this year
function whenIsHalloween() {
}

// Uncomment when draw function is ready
//setInterval(draw, 500);