const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginUsernameErrorMsg = document.getElementById("login-username-error-msg");
const loginPasswordErrorMsg = document.getElementById("login-password-error-msg");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username !== "user" && password === "pass") {
        loginUsernameErrorMsg.classList.add("show");
    }
    else if (username === "user" && password !== "pass") {
        loginPasswordErrorMsg.classList.add('show');
    }

    else if (username === "user" && password === "pass") {
        loginUsernameErrorMsg.classList.remove('show');
        loginPasswordErrorMsg.classList.remove('show');
        location.reload();
        alert("You have successfully logged in.");
    } else if (username !== "user" && password !== "pass"){
        loginUsernameErrorMsg.classList.add("show");
        loginPasswordErrorMsg.classList.add('show');
    }
});