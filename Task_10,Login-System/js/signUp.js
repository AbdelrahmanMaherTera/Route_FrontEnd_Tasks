var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var signUpBtn = document.getElementById("signUpBtn");
var programState = document.getElementById("programState");
var userNameRegex = /[a-zA-Z]{2,}/;
var emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
var passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;
var allInputs = document.querySelectorAll("input");

var usersInfoList = [];

if(localStorage.getItem("usersInfoList") != null) {
    usersInfoList = JSON.parse(localStorage.getItem("usersInfoList"));
}

signUpBtn.addEventListener("click" , function() {
    if(isValidInputField(userNameRegex , nameInput , nameError) & isValidInputField(emailRegex , emailInput , emailError) & isValidInputField(passwordRegex , passwordInput , passwordError)) {
        checkUser();
    }
})

function addUser() {
    var userInfo = {
        userName: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    }
    usersInfoList.push(userInfo);
    localStorage.setItem("usersInfoList" , JSON.stringify(usersInfoList));
}

function checkUser() {
    for(i=0 ; i<usersInfoList.length ; i++) {
        if(emailInput.value == usersInfoList[i].email) {
            var check = true;
        }
    }
    if(check) {
        programState.innerHTML = "email already exists";
        programState.classList.add("text-danger");
        programState.classList.remove("text-success");
    }
    else {
        addUser();
        programState.innerHTML = "Success";
        programState.classList.add("text-success");
        programState.classList.remove("text-danger");
    }
}

function isValidInputField(regex , input) {
    if(regex.test(input.value)) {
        input.nextElementSibling.classList.replace("d-block" , "d-none");
        return true;
    }
    else {
        input.nextElementSibling.classList.replace("d-none" , "d-block");
        return false;
    }
}

allInputs[0].addEventListener("blur" , function() {
    isValidInputField(userNameRegex , nameInput);
})

allInputs[1].addEventListener("blur" , function() {
    isValidInputField(emailRegex , emailInput);
})

allInputs[2].addEventListener("blur" , function() {
    isValidInputField(passwordRegex , passwordInput);
})