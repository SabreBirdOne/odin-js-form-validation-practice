// import countriesPostalCode table
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

function createForm (){
    // Create form with event handlers attached
    let form = document.createElement('form');
    form.noValidate = true;

    const [emailLabel, emailInput] = createLabelInputPair(
        "Email:", "emailInput", "email"
    );

    const emailError = createErrorSpan("emailError");

    const countryLabel = createLabel("Country:", "countrySelect");
    const countrySelect = document.createElement("select");

    const [postalCodeLabel, postalCodeInput] = createLabelInputPair(
        "Postal Code:", "postalCodeInput", "text"
    );

    const countryPostalCodeError = createErrorSpan("countryPostalCodeError");

    const [passwordLabel, passwordInput] = createLabelInputPair(
        "Password:", "passwordInput", "password"
    );

    const [passwordConfirmLabel, passwordConfirmInput] = createLabelInputPair(
        "Confirm Password:", "passwordConfirmInput", "password"
    );

    const passwordConfirmError = createErrorSpan("passwordConfirmError");

    // Event Handlers
    emailInput.addEventListener("input", ()=>{});
    
    for (const element of [
        emailLabel, emailInput,
        emailError,
        countryLabel, countrySelect,
        postalCodeLabel, postalCodeInput,
        countryPostalCodeError,
        passwordLabel, passwordInput,
        passwordConfirmLabel, passwordConfirmInput,
        passwordConfirmError
    ]){
        form.appendChild(element);
    }

    return form;
}

export {createForm}