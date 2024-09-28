var logoutBtn = document.getElementById("logoutBtn");
var nameField = document.getElementById("nameField");

logoutBtn.addEventListener("click" , function() {
    window.open("./login.html", "_self");
})

var userName = localStorage.getItem("sessionUserName");

nameField.innerHTML = `Welcome ${userName}`;