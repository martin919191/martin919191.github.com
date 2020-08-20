commands = {
    "whoami" : "My name is Martín Isusi Seff. I'm a software developer with 7+ years of experience in different platforms and technologies. \n\nI currently work at Accenture as a Application Development Specialist in Google Cloud platform.",
    "help" : "Welcome to my interactive CV!\nThe following commands have been implemented to give you the information you want.\n\nwhoami - Well, this is preety self-explanatory... It will give you my information.\nhelp   - Prints the available commands and explains how to use the tool.\n"
}

var showCaret = false
/*var blinkCursor = function(){
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
}*/

//setTimeout(blinkCursor, 500)

$('#terminal-text').on('keydown', function(event) {
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

