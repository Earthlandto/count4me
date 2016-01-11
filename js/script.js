// set the date we're counting down to
var target_date = new Date("Feb 7 2016 23:59:59").getTime();

$(document).ready(function() {

    var days, hours, minutes, seconds;

    var update = function() {
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        // change attibutes
        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

    };
    // set the function to update each 1 second.
    setInterval(update, 1000);
    //exec just at the begining to do not wait the first second.
    update();
});
