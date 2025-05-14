var userName = document.getElementById("userName");
var password = document.getElementById("password");
var signInButton = document.getElementById("signInButton");
var message = document.getElementById("message");

function clearmessage(){
    message.innerText = " ";
}
signInButton.addEventListener("click",(event) => {
   // This is test commit

    event.preventDefault();
    console.log(userName.value,password.value);
    if(userName.value === "" || password.value === ""){
        message.innerText = "Please provide Username and Password";
    }
    else if(userName.value === "great" &&  password.value === "learning"){
        message.style.color = "green";
        message.innerText = "You have Successfully Logged In";
        console.log("LoggedIn");
        //window.location.replace = ("./html/index.html");

        setTimeout(() => {
            window.location.replace("./html/index.html");
        },1000)
    }
    else{
        message.innerText = "Username Or Password is Invalid";
    }
});