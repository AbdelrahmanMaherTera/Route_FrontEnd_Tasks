var bookmarkNameInput = document.getElementById("bookmarkName");
var bookmarkUrlInput = document.getElementById("bookmarkUrl");
var allBookmarksTable = document.getElementById("allBookmarksTable");
var popUpAlert = document.getElementById("popUpAlert");
var bookmarkNameRegex = /^[a-zA-z][a-zA-Z0-9]{2,}$/;
var bookmarkUrlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/;

var bookmarksList = [];

if(localStorage.getItem("bookmarksList") != null) {
    bookmarksList = JSON.parse(localStorage.getItem("bookmarksList"));
    displayBookmarks();
}

function addBookmark() {
    if(isValidBookmarkField(bookmarkNameRegex , bookmarkNameInput) & isValidBookmarkField(bookmarkUrlRegex , bookmarkUrlInput)) {
        var bookmark = {
            bookmarkName: bookmarkNameInput.value,
            bookmarkUrl: bookmarkUrlInput.value
        };
        bookmarksList.push(bookmark);
        displayBookmarks();
        localStorage.setItem("bookmarksList" , JSON.stringify(bookmarksList));
        resetAllInputs();
    }
    else {
            var myModal = new bootstrap.Modal(document.getElementById('myModal'));
            myModal.show();
    }
}

function resetAllInputs() {
    bookmarkNameInput.value = null;
    bookmarkUrlInput.value = null;
    bookmarkNameInput.classList.remove("is-valid" , "is-invalid");
    bookmarkUrlInput.classList.remove("is-valid" , "is-invalid");
}

function displayBookmarks() {
    var allBookmarksString = ``;
    for(i=0 ; i<bookmarksList.length ; i++) {
        allBookmarksString += `
        <div class="col py-2 d-flex justify-content-center align-items-center">
            <p>${i+1}</p>
        </div>
        <div class="col py-2 d-flex justify-content-center align-items-center">
            <p>${bookmarksList[i].bookmarkName}</p>
        </div>
        <div class="col py-2 d-flex justify-content-center align-items-center">
            <button onclick="visitUrl(${i})" class="visit-btn btn text-white d-flex flex-column flex-sm-row align-items-center gap-2 d-block">
                <i class="fa-solid fa-eye"></i>
                Visit
            </button>
        </div>
        <div class="col py-2 d-flex justify-content-center align-items-center">
            <button onclick="deleteBookmark(${i})" class="delete-btn btn btn-danger d-flex flex-column flex-sm-row align-items-center gap-2">
                <i class="fa-solid fa-trash-can"></i>
                Delete
            </button>
        </div>`
    }
    allBookmarksTable.innerHTML = allBookmarksString;
}

function deleteBookmark(deletedIndex) {
    bookmarksList.splice(deletedIndex , 1);
    displayBookmarks();
    localStorage.setItem("bookmarksList" , JSON.stringify(bookmarksList));
}

function visitUrl(urlIndex) {
    var siteUrl = bookmarksList[urlIndex].bookmarkUrl;
    if(siteUrl.startsWith("http://")) {
        siteUrl = `${siteUrl.replace("http" , "https")}`
        window.open(siteUrl , "_blank");
    }
    else if(!siteUrl.startsWith("https://")) {
        siteUrl = `https://${bookmarksList[urlIndex].bookmarkUrl}`
        window.open(siteUrl , "_blank");
    }
    else {
        window.open(siteUrl , "_blank");
    }
}

function isValidBookmarkField(regex , input) {
    if(regex.test(input.value)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}