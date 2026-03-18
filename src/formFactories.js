import {
    createLabel, createLabelInputPair, createErrorSpan, 
    createButtonDiv, createCountrySelect,
    createValidFormImg
} from "./formComponentFactories.js"
import { 
    checkEmail, checkCountryPostalCode, checkPasswords, isFormValid, 
    showEmailError, showPostalCodeError, showPasswordError
} from "./validators.js";

const PASSWORD_MINLENGTH = 8;

function createForm (){
    // Create form with event handlers attached
    let form = document.createElement('form');
    form.noValidate = true;

    const [emailLabel, emailInput] = createLabelInputPair(
        "Email:", "emailInput", "email"
    );

    const emailError = createErrorSpan("emailError");

    const countryLabel = createLabel("Country:", "countrySelect");
    const countrySelect = createCountrySelect("countrySelect");

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

    passwordInput.setAttribute("minlength", `${PASSWORD_MINLENGTH}`);

    const passwordConfirmError = createErrorSpan("passwordConfirmError");

    let buttonDiv = createButtonDiv();

    const validFormImg = createValidFormImg("thumbsUp");

    for (const element of [
        emailInput,
        postalCodeInput,
        passwordInput,
        passwordConfirmInput
    ]){
        element.required = true;
    }
    
    // Event Handlers
    emailInput.addEventListener("input", checkEmail);
    emailInput.addEventListener("blur", checkEmail);

    countrySelect.addEventListener("change", checkCountryPostalCode);
    countrySelect.addEventListener("blur", checkCountryPostalCode);

    postalCodeInput.addEventListener("input", checkCountryPostalCode);
    postalCodeInput.addEventListener("blur", checkCountryPostalCode);

    passwordInput.addEventListener("input", checkPasswords);
    passwordInput.addEventListener("blur", checkPasswords);

    passwordConfirmInput.addEventListener("input", checkPasswords);
    passwordConfirmInput.addEventListener("blur", checkPasswords);

    form.addEventListener("submit", (event) => {
        if (!isFormValid()){
            checkEmail();
            checkCountryPostalCode(); 
            checkPasswords();
            validFormImg.hidden = true;
            event.preventDefault();
        }
        else {
            validFormImg.hidden = false;
            event.preventDefault();
        }
    });

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
        buttonDiv,
        validFormImg
    ]){
        form.appendChild(element);
    }

    return form;
}

export {createForm}