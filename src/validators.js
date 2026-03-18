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

function isPostalCodeValid(countryCode){
    const postalCodeInput = document.querySelector("#postalCodeInput");
    const constraint = new RegExp(
        countriesPostalCodes[countryCode][1], ""
    );
    return constraint.test(postalCodeInput.value);
}

function validateCountryPostalCode(){
    const countrySelect = document.querySelector("#countrySelect");
    const countryPostalCodeError = document.querySelector("#countryPostalCodeError");

    const countryCodeSelected = countrySelect.value;
    if (isPostalCodeValid(countryCodeSelected)){
        countryPostalCodeError.textContent = "";
        countryPostalCodeError.classList.remove("error");
    }
    else {
        showPostalCodeError(countryCodeSelected);
    }
}

function showPostalCodeError(countryCode){
    const countryPostalCodeError = document.querySelector("#countryPostalCodeError");
    countryPostalCodeError.textContent = countriesPostalCodes[countryCode][2];
    countryPostalCodeError.classList.add("error");
}

function passwordsMatch(){
    const passwordInput = document.querySelector("#passwordInput");
    const passwordConfirmInput = document.querySelector("#passwordConfirmInput");
    return passwordInput.value === passwordConfirmInput.value;
}

function isPasswordsValid(){
    return passwordInput.value 
        && passwordConfirmInput.value 
        && !passwordInput.validity.tooShort
        && passwordsMatch();
}
function checkPasswords(){
    const passwordInput = document.querySelector("#passwordInput");
    const passwordConfirmInput = document.querySelector("#passwordConfirmInput");
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

export {
    showEmailError, validateCountryPostalCode, checkPasswords, isPostalCodeValid, isPasswordsValid,
}