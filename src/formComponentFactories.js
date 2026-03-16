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
    span.id = "countryPostalCodeError";
    return span;
}

export {
    createLabel, createInput, createLabelInputPair, createErrorSpan
}