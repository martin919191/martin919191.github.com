document.onmousemove = handleMouseMove;

function handleMouseMove(event) {
    var x = - 10 + event.clientX / 1000;
    var y = -10 - event.clientY / 1000  ;
    var xstring = x + "%";
    var ystring = y + "%";
    document.getElementById('bg-1').style.left = xstring;
    document.getElementById('bg-1').style.top = ystring;
}
