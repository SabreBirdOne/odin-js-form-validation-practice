function showEmailError(){
    const emailInput = document.querySelector("#emailInput");
    const emailError = document.querySelector("#emailError");
    
    if (emailInput.validity.valid){
        emailError.textContent = "";
        emailError.classList.remove("error");
    }
    else {
        emailError.classList.add("error");
        if (emailInput.validity.valueMissing){
            emailError.textContent = "Missing email address";
        }
        else if (emailInput.validity.typeMismatch){
            emailError.textContent = "Entered value is not an email address"
        }
    }
}

export {
    showEmailError
}