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

function checkPostalCode(countryCode, postalCode){
    const constraint = new RegExp(
        countriesPostalCodes[countryCode][1], ""
    );
    return constraint.test(postalCode);
}

function showPostalCodeError(){
    const countrySelect = document.querySelector("#countrySelect");
    const postalCodeInput = document.querySelector("#postalCodeInput");
    const countryPostalCodeError = document.querySelector("#countryPostalCodeError");

    const countryCodeSelected = countrySelect.value;
    if (checkPostalCode(countryCodeSelected, postalCodeInput.value)){
        countryPostalCodeError.textContent = "";
    }
    else {
        countryPostalCodeError.textContent = 
            countriesPostalCodes[countryCodeSelected][2];
    }
}

export {
    showEmailError, showPostalCodeError
}