
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Momentom app</title>
    
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <form id="login-form">
        <input type="text" required maxlength="12" placeholder="Whate is your name?">
        <input type="submit" value="Click">
    </form>

    <a href="http://www.naver.com">Click hear !</a>

    <script src="app.js"></script>
</body>
</html>
*/
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onSubmitLoginButton(arg)
{
    arg.preventDefault();
    console.log(loginInput.value);

}

loginForm.addEventListener("submit", onSubmitLoginButton);



const a = document.querySelector("a");

  
function onClickATag()
{
    alert("Hello!");
}
a.addEventListener("click", onClickATag);