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