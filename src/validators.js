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

function checkPostalCode(countryCode){
    const postalCodeInput = document.querySelector("#postalCodeInput");
    const constraint = new RegExp(
        countriesPostalCodes[countryCode][1], ""
    );
    return constraint.test(postalCodeInput.value);
}

function showPostalCodeError(){
    const countrySelect = document.querySelector("#countrySelect");
    const countryPostalCodeError = document.querySelector("#countryPostalCodeError");

    const countryCodeSelected = countrySelect.value;
    if (checkPostalCode(countryCodeSelected)){
        countryPostalCodeError.textContent = "";
        countryPostalCodeError.classList.remove("error");
    }
    else {
        countryPostalCodeError.textContent = 
            countriesPostalCodes[countryCodeSelected][2];
        countryPostalCodeError.classList.add("error");
    }
}

export {
    showEmailError, showPostalCodeError, checkPostalCode
}