var showCaret = false
var blinkCursor = function(){
    var currentText = $('#command-text').text().replace("█","").trim()
    //currentText = currentText.substring(0, currentText.length - 1);
    //console.log(currentText)
    if (showCaret){
        //console.log(currentText.endsWith("%"))
        if(currentText.endsWith("guest-user@mycomputer ~ %")){
            currentText = currentText + " █";
        }else{
            currentText = currentText + "█";
        }
    }
    $('#command-text').text(currentText)
    showCaret = !showCaret
    setTimeout(blinkCursor, 500)
}

setTimeout(blinkCursor, 500)

$('#terminal-text').on('keydown', function(event) {
    console.log(event.keyCode);
    if(event.keyCode==32 || (event.keyCode>=65 && event.keyCode<=90)){
        var currentText = $('#command-text').text().replace("█","").trim()
        if(currentText.endsWith("guest-user@mycomputer ~ %")){
            $('#command-text').text(currentText + " " + String.fromCharCode(event.keyCode).toLowerCase())
        }else{
            $('#command-text').text(currentText + String.fromCharCode(event.keyCode).toLowerCase())
        }
    }
    if(event.keyCode==8){
        var currentText = $('#command-text').text().replace("█","").trim()
        if(!currentText.endsWith("guest-user@mycomputer ~ %"))
            $('#terminal-text').text(currentText.substring(0, currentText.length - 1))
    }
    if(event.keyCode==13){
        var currentText = $('#command-text').text().replace("█","").trim().split("\n")
        lastCommand = currentText[currentText.length - 1].replace("guest-user@mycomputer ~ %", "").trim()
        var newText = $('#command-text').text().replace("█","").trim() + "\n" + "guest-user@mycomputer ~ %"
        $('#command-text').text(newText)
        console.log(lastCommand)
    }
    $("#terminal-text").mCustomScrollbar("scrollTo","bottom",{scrollInertia:0});
 });

$("#terminal-text").mCustomScrollbar({
    theme:"minimal"
});