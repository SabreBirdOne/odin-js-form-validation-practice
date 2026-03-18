import countriesPostalCodes from "./countriesPostalCodesTable.js";
import thumbsUp from "../img/thumbsUp.jpg";

function createLabel(labelText, htmlFor){
    let label = document.createElement("label");
    label.textContent = labelText;
    label.htmlFor = htmlFor;
    return label;
}

function createInput(inputId, inputType){
    let input = document.createElement("input");
    input.id = inputId;
    input.type = inputType;
    return input;
}

function createLabelInputPair(labelText, inputId, inputType){
    return [
        createLabel(labelText, inputId), 
        createInput(inputId, inputType)
    ]
}

function createErrorSpan(spanId){
    let span = document.createElement("span");
    span.id = spanId;
    return span;
}

function createButtonDiv(
    submitValue = "submit", 
    submitButtonText = "Submit",
){
    // Buttons with no event handlers attached
    let div = document.createElement("div");
    div.classList.add("buttonsDiv");

    let submitButton = document.createElement("button");
    submitButton.classList.add("submitButton");
    submitButton.id = "submitButton";
    submitButton.textContent = submitButtonText;
    submitButton.value = submitValue;

    div.appendChild(submitButton);

    return div;
}

function createCountrySelect(selectId){
    let select = document.createElement("select");
    select.id = selectId;

    for (const countryCode of Object.keys(countriesPostalCodes)){
        let option = document.createElement("option");
        option.value = countryCode;
        option.textContent = countriesPostalCodes[countryCode][0];
        select.appendChild(option);
    }
    return select;
}

function createValidFormImg(imgId){
    let validFormImg = document.createElement("img");
    validFormImg.src = thumbsUp;
    validFormImg.id = imgId;
    validFormImg.hidden = true;
    validFormImg.alt = "Image showing form is valid";
    validFormImg.height = 200;
    return validFormImg;
}

export {
    createLabel, createInput, createLabelInputPair, createErrorSpan, 
    createButtonDiv, createCountrySelect, createValidFormImg
}