function countCharacters(){
    const inputTextLength = document.getElementById("inputText").value.length
    document.getElementById("displayCharaterCount").innerHTML = "The count of character is " + inputTextLength;
}

function countCharacterOnClickOfButton(){
    const inputTextLength = document.getElementById("inputText2").value.length
    document.getElementById("displayCharaterCount").innerHTML = "The count of character is " + inputTextLength;
}