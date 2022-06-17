const form = document.querySelector("form");
firstNameField = form.querySelector(".first-name");
lastNameField = form.querySelector(".last-name");
emailField = form.querySelector(".email");
passwordField = form.querySelector(".password");


firstNameInput = firstNameField.querySelector("input");
lastNameInput = lastNameField.querySelector("input");
emailInput = emailField.querySelector("input");
passwordInput = passwordField.querySelector("input");

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
    //if email and password is blank then add shake class in it else call specified function
    (firstNameInput.value == "") ? firstNameField.classList.add("shake", "error") : checkFirstName();
    (lastNameInput.value == "") ? lastNameField.classList.add("shake", "error") : checkLastName();
    (emailInput.value == "") ? emailField.classList.add("shake", "error") : checkEmail();
    (passwordInput.value == "") ? passwordField.classList.add("shake", "error") : checkPass();
    
    setTimeout(()=>{//remove shake class after 500ms
        firstNameField.classList.remove("shake");
        lastNameField.classList.remove("shake");
        emailField.classList.remove("shake");
        passwordField.classList.remove("shake");
    }, 500);

    firstNameInput.onkeyup = ()=>{checkFirstName();} //calling checkFirstName function on FirstName input keyup
    lastNameInput.onkeyup = ()=>{checkLastName();} //calling checkLastName function on LastName input keyup
    emailInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
    passwordInput.onkeyup = ()=>{checkPass();} //calling checkPass function on Pass input keyup

    function checkFirstName(){ //checkFirstName function
        if(firstNameInput.value == ""){ //if firstName is empty then add error and remove valid class
          firstNameField.classList.add("error");
          firstNameField.classList.remove("valid");
        }else{ //if firstName is empty then remove error and add valid class
          firstNameField.classList.remove("error");
          firstNameField.classList.add("valid");
        }
    }

    function checkLastName(){ //checkLastName function
        if(lastNameInput.value == ""){ //if lastName is empty then add error and remove valid class
          lastNameField.classList.add("error");
          lastNameField.classList.remove("valid");
        }else{ //if lastName is empty then remove error and add valid class
          lastNameField.classList.remove("error");
          lastNameField.classList.add("valid");
        }
    }

    function checkEmail(){ //checkEmail function
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
        if(!emailInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
          emailField.classList.add("error");
          emailField.classList.remove("valid");
          let errorTxt = emailField.querySelector(".error-txt");
          //if email value is not empty then show please enter valid email else show Email can't be blank
          (emailField.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
        }else{ //if pattern matched then remove error and add valid class
          emailField.classList.remove("error");
          emailField.classList.add("valid");
        }
      }

      function checkPass(){ //checkPass function
        if(passwordInput.value == ""){ //if pass is empty then add error and remove valid class
          passwordField.classList.add("error");
          passwordField.classList.remove("valid");
        }else{ //if pass is empty then remove error and add valid class
            passwordField.classList.remove("error");
          passwordField.classList.add("valid");
        }
      }
    
      //if emailField and passwordField doesn't contains error class that mean user filled details properly
      if(!firstNameField.classList.contains("error") && !lastNameField.classList.contains("error") && !emailField.classList.contains("error") && !passwordField.classList.contains("error")){
        window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
    }
}
