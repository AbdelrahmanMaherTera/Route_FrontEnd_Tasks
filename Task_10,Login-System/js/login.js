var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var loginBtn = document.getElementById("loginBtn");
var programState = document.getElementById("programState");
// var myForm = document.querySelector("form");

var usersInfoList = JSON.parse(localStorage.getItem("usersInfoList"));

loginBtn.addEventListener("click" , function(e) {
    checkUser();
})

function checkUser() {
    for(i=0 ; i<usersInfoList.length ; i++) {
        if(emailInput.value == "" || passwordInput.value == "") {
            var check = 1;
        }
        else if(emailInput.value == usersInfoList[i].email && passwordInput.value == usersInfoList[i].password) {
            check = 2;
            localStorage.setItem("sessionUserName" , usersInfoList[i].userName);
        }
    }
    if(check == 2) {
        window.open("./home.html" , "_self");
    }
    else if(check == 1) {
        programState.innerHTML = "All inputs is required";
        programState.classList.add("text-danger");
    }
    else if(check != 2) {
        programState.innerHTML = "Incorrect email or password";
        programState.classList.add("text-danger");
    }
}