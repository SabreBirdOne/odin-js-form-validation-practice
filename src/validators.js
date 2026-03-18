import countriesPostalCodes from "./countriesPostalCodesTable";

function showEmailError(){
    const emailInput = document.querySelector("#emailInput");
    const emailError = document.querySelector("#emailError");
    
    emailError.classList.add("error");
    if (emailInput.validity.valueMissing){
        emailError.textContent = "Missing email address";
    }
    else if (emailInput.validity.typeMismatch){
        emailError.textContent = "Entered value is not an email address"
    }
}

function checkEmail(){
    const emailInput = document.querySelector("#emailInput");
    const emailError = document.querySelector("#emailError");

    if (emailInput.validity.valid){
        emailError.textContent = "";
        emailError.classList.remove("error");
    }
    else {
        showEmailError();
    }
}

function isPostalCodeValid(){
    const countrySelect = document.querySelector("#countrySelect");
    const postalCodeInput = document.querySelector("#postalCodeInput");
    const constraint = new RegExp(
        countriesPostalCodes[countrySelect.value][1], ""
    );
    return constraint.test(postalCodeInput.value);
}

function checkCountryPostalCode(){
    const countryPostalCodeError = document.querySelector("#countryPostalCodeError");
    if (isPostalCodeValid()){
        countryPostalCodeError.textContent = "";
        countryPostalCodeError.classList.remove("error");
    }
    else {
        showPostalCodeError();
    }
}

function showPostalCodeError(){
    const countrySelect = document.querySelector("#countrySelect");
    const countryPostalCodeError = document.querySelector("#countryPostalCodeError");
    countryPostalCodeError.textContent = countriesPostalCodes[countrySelect.value][2];
    countryPostalCodeError.classList.add("error");
}

function passwordsMatch(){
    const passwordInput = document.querySelector("#passwordInput");
    const passwordConfirmInput = document.querySelector("#passwordConfirmInput");
    return passwordInput.value === passwordConfirmInput.value;
}

function isPasswordsValid(){
    return (passwordInput.value 
        && passwordConfirmInput.value 
        && !passwordInput.validity.tooShort
        && passwordsMatch());
}
function checkPasswords(){
    const passwordConfirmError = document.querySelector("#passwordConfirmError");

    if (isPasswordsValid()){
        passwordConfirmError.textContent = "";
        passwordConfirmError.classList.remove("error");
    } 
    else {
        showPasswordError();
    }
}

function showPasswordError(){
    passwordConfirmError.classList.add("error");
    passwordConfirmError.textContent = "";
    if (!passwordInput.value){
        passwordConfirmError.textContent += "Password is missing. ";
    }
    if (passwordInput.validity.tooShort){
        passwordConfirmError.textContent += "Password is too short, minimum 8 characters. "
    }
    if (!passwordConfirmInput.value){
        passwordConfirmError.textContent += "Password confirmation is missing. ";
    }
    if (!passwordsMatch()){
        passwordConfirmError.textContent += "Passwords do not match.";
    }
}

function isFormValid(){
    const emailInput = document.querySelector("#emailInput");
    return (emailInput.validity.valid 
        && isPostalCodeValid()
        && isPasswordsValid()
    )
}

export {
    checkEmail, checkCountryPostalCode, checkPasswords, isFormValid, 
    showEmailError, showPostalCodeError, showPasswordError
}