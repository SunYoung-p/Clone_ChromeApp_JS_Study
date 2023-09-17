
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form_input");

function onSubmitLoginButton(arg)
{
    arg.preventDefault();
    
    console.dir(loginInput);
    const name = loginInput.innerHTML;
    localStorage.setItem("name",name);
    loginInput.innerHTML = "";

}

loginForm.addEventListener("submit", onSubmitLoginButton);


