var outlines = false;

function addOutlines() {
    if (!outlines) {
        $('*').css('outline', '1px solid black');
        outlines = true;
    } else {
        $('*').css('outline', '0');
        outlines = false;
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

function startTime() {
    /*var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;*/
    var d = new Date();
    var timeString = (d.getHours()<10?"0"+d.getHours():d.getHours()) + ":" + (d.getMinutes()<10?"0"+d.getMinutes():d.getMinutes()) + ":" + (d.getSeconds()<10?"0"+d.getSeconds():d.getSeconds()) + " ";
    $('#time').html(timeString);
    $('#date').html(d.toLocaleDateString("es-AR"));
    console.log(timeString);
    var t = setTimeout(startTime, 500);
}