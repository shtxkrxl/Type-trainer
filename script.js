"use strict"

let textField = document.querySelector(".text-field");
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing"
textField.innerHTML = '<span class="unwritten">' + text + '</span>';

let inputText = document.querySelector(".input-text");

function templateText() {
    if (text.startsWith(inputText.textContent)) {
        textField.innerHTML = inputText.textContent
        + '<span class="unwritten">' 
        +  text.slice(inputText.textContent.length)
        + '</span>';
    } else if (!text.startsWith(inputText.textContent) && inputText.textContent[inputText.textContent.length - 1] != " "){
        textField.innerHTML = correctText()
        + '<span class="wrong">'
        + text.slice(correctText().length)
        + '</span>';
    }
}

function correctText() {
    let correctText = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] == inputText.textContent[i]) {
            correctText += text[i];
        } else {
            break;
        }
    }
    return correctText;
}

inputText.addEventListener("input", templateText);