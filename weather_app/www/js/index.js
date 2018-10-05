var outlines = false;
var day = false;

function addOutlines() {
    if (!outlines) {
        $('*').css('outline', '1px solid black');
        outlines = true;
    } else {
        $('*').css('outline', '0');
        outlines = false;
    }
}

function transitionDayNight(){
    if(day){
        $('#day-background').css('opacity','0');
        $('#night-background').css('opacity','1');
        $('#moon').css('opacity','1');
        $('#sun').css('opacity','0');
        day = false;
    }else{
        $('#day-background').css('opacity','1');
        $('#night-background').css('opacity','0');
        $('#moon').css('opacity','0');
        $('#sun').css('opacity','1');
        day = true;
    }
}

function addAnimation() {
    if (!outlines) {
        $('#sunny-day-background-1').css('animation', 'right-left 120s infinite linear');
        outlines = true;
    } else {
        $('#sunny-day-background-1').css('animation', 'none');
        outlines = false;
    }
}

(function (){
    //var myWorker = new Worker("js/clock.js");
    document.onload = startTime();
})();

var previousTime = "#time1";
var previousDate = "#date1";
var nextTime = "#time2";
var nextDate = "#date2";

function startTime() {
    /*var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;*/
    var auxTime = previousTime;
    var auxDate = previousDate;
    previousDate = nextDate;
    previousTime = nextTime;
    nextDate = auxDate;
    nextTime = auxTime;
    var d = new Date();
    var timeString = (d.getHours()<10?"0"+d.getHours():d.getHours()) + ":" + (d.getMinutes()<10?"0"+d.getMinutes():d.getMinutes()) + ":" + (d.getSeconds()<10?"0"+d.getSeconds():d.getSeconds()) + " ";
    $(nextTime).html(timeString);
    $(nextDate).html(d.toLocaleDateString("es-AR"));
    $('#time-shadow').html(timeString);
    $('#date-shadow').html(d.toLocaleDateString("es-AR"));
    console.log(timeString);
    var t = setTimeout(startTime, 1000);
    $(nextTime).css('transition','opacity .15s');
    $(nextDate).css('transition','opacity .15s');
    $(nextTime).css('opacity',1);
    $(nextDate).css('opacity',1);
    $(previousTime).css('transition','opacity .50s');
    $(previousDate).css('transition','opacity .50s');
    $(previousTime).css('opacity',0);
    $(previousDate).css('opacity',0);
    
}

function changeFont(){
    //alert($('#font-dropdown').val());
    var font = $('#font-dropdown').val();
    $("*").css('font-family',font);
}