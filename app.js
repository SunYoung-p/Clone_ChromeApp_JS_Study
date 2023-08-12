
const loginBox = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form input:last-child");

function onSubmitLoginButton(arg)
{
    arg.preventDefault();
    console.log(loginBox.value);

}

loginButton.addEventListener("submit", onSubmitLoginButton);