default_terminal_text = "guest-user@mycomputer ~ % "

commands = {
    "whoami" : "My name is Martín Isusi Seff. I'm a software developer with 7+ years of experience in different platforms and technologies. \n\nI currently work at Accenture as a Application Development Specialist in Google Cloud platform.",
    "help" : "The following commands have been implemented to give you the information you want.\n\nwhoami - Well, this is preety self-explanatory... It will give you my information.\nhelp   - Prints the available commands and explains how to use the tool.\n"
}

var showCaret = false
/*var blinkCursor = function(){
    var currentText = $('#command-text').text().replace("█","")
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
}*/

//setTimeout(blinkCursor, 500)

/*$('#terminal-text').on('keydown', function(event) {
    //console.log(event.keyCode);
    if(event.keyCode==32 || (event.keyCode>=65 && event.keyCode<=90)){
        var currentText = $('#command-text').text().replace("█","")//.trim()
        if(currentText.endsWith("guest-user@mycomputer ~ %")){
            $('#command-text').text(currentText + " " + String.fromCharCode(event.keyCode).toLowerCase() + "█")
        }else{
            $('#command-text').text(currentText + String.fromCharCode(event.keyCode).toLowerCase() + "█")
        }
    }
    if(event.keyCode==8){
        var currentText = $('#command-text').text().replace("█","").trim()
        //console.log(currentText)
        if(!currentText.endsWith("guest-user@mycomputer ~ %"))
            $('#command-text').text(currentText.substring(0, currentText.length - 1) + "█")
    }
    if(event.keyCode==13){
        var currentText = $('#command-text').text().replace("█","").trim().split("\n")
        lastCommand = currentText[currentText.length - 1].replace("guest-user@mycomputer ~ %", "").trim()
        if (lastCommand=='clear'){
            $('#command-text').text("guest-user@mycomputer ~ % █")
            return
        }else if(lastCommand == ""){
            var newText = $('#command-text').text().replace("█","").trim() + "\nguest-user@mycomputer ~ % █"
            $('#command-text').text(newText)
        }else{
            var newText = $('#command-text').text().replace("█","").trim() + "\n" + runCommand(lastCommand) + "guest-user@mycomputer ~ % █"
            //var newText = $('#command-text').text().replace("█","").trim() + "\n" + "guest-user@mycomputer ~ % █"
            $('#command-text').text(newText)
        }
        
        console.log("Command to execute= " + lastCommand)

        $("#terminal-text").mCustomScrollbar("scrollTo","bottom",{scrollInertia:0});
    }
    
 });*/

$("#terminal-text").mCustomScrollbar({
    theme:"minimal"
});

function runCommand(command){
    commandOutput = commands[command]
    if (commandOutput == undefined)
        return 'zsh: command not found: [COMMAND]\n'.replace('[COMMAND]', command)
    else
        return commandOutput + "\n"
}

/***********************************************************************************************/
n = 0
$('#terminal-text').on('click', function(event) {
    $('#dummy-text-area').focus()
    $('#dummy-text-area').trigger('click')
    $('#dummy-text-area').text("Clicked" + (n++))
})

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

var mobile = window.mobileCheck()
event = mobile? 'keyup' : 'keydown'
console.log(event)

previousCommand = ""
$('#dummy-text-area').on('change textInput input', function(event) {
    var currentText = $('#command-text').text().replace("█","").split("\n")
    var newText = ""
    for (x=0; x<currentText.length-1; x++){newText += currentText[x] + "\n"}
    var currentCommand = $('#dummy-text-area').val().toLowerCase()
    newText += default_terminal_text + currentCommand + "█"
    if (currentCommand != previousCommand)
        $('#command-text').text(newText)
    previousCommand = currentCommand
    //alert(currentText + currentCommand + "█")
});

$('#dummy-text-area').on('keyup', function(event) {
    if(event.keyCode==13){
        var currentText = $('#command-text').text().replace("█","").trim().split("\n")
        lastCommand = currentText[currentText.length - 1].replace("guest-user@mycomputer ~ %", "").trim()
        if (lastCommand=='clear'){
            $('#command-text').text("guest-user@mycomputer ~ % █")
            $('#dummy-text-area').val("")
            return
        }else if(lastCommand == ""){
            var newText = $('#command-text').text().replace("█","").trim() + "\nguest-user@mycomputer ~ % █"
            $('#command-text').text(newText)
        }else{
            var newText = $('#command-text').text().replace("█","").trim() + "\n" + runCommand(lastCommand) + "guest-user@mycomputer ~ % █"
            //var newText = $('#command-text').text().replace("█","").trim() + "\n" + "guest-user@mycomputer ~ % █"
            $('#command-text').text(newText)
        }
        
        console.log("Command to execute= " + lastCommand)
        $('#dummy-text-area').val("")
        $("#terminal-text").mCustomScrollbar("scrollTo","bottom",{scrollInertia:0});
    }
    
 });

$("#terminal-text").mCustomScrollbar({
    theme:"minimal"
});

function runCommand(command){
    commandOutput = commands[command]
    if (commandOutput == undefined)
        return 'zsh: command not found: [COMMAND]\n'.replace('[COMMAND]', command)
    else
        return commandOutput + "\n"
}


