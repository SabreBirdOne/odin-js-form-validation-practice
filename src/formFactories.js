// import countriesPostalCode table
import {
    createLabel, 
    createInput, 
    createLabelInputPair, 
    createErrorSpan,
    createButtonDiv
} from "./formComponentFactories.js"

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

    let buttonDiv = createButtonDiv();
    let submitButton = buttonDiv.querySelector("button#submitButton");

    // Event Handlers
    emailInput.addEventListener("input", ()=>{});
    
    // Add elements to form
    for (const element of [
        emailLabel, emailInput,
        emailError,
        countryLabel, countrySelect,
        postalCodeLabel, postalCodeInput,
        countryPostalCodeError,
        passwordLabel, passwordInput,
        passwordConfirmLabel, passwordConfirmInput,
        passwordConfirmError,
        buttonDiv
    ]){
        form.appendChild(element);
    }

    return form;
}

export {createForm}