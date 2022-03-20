// creating variables to link to the corresponding element.
const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-submit');
const errorMsg = document.getElementById('error-1');

// creating an event listener for the submit function.
loginBtn.addEventListener("click", (e) =>  {

    e.preventDefault;

    // retreiving the username and password entered in the field.
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // validating the username and password.
    if (username === "akki" && password === "kandi"){

        // alerting a successful log-in, if the correct username and password are entered.
        alert("You have successfully logged in.");
        location.reload;
    }
    
    else {

        // displaying the error message.
        errorMsg.style.opacity = 1;
    }
});