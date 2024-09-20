var bookmarkNameInput = document.getElementById("bookmarkName");
var bookmarkUrlInput = document.getElementById("bookmarkUrl");
var allBookmarksTable = document.getElementById("allBookmarksTable");

var bookmarksList = [];

if(localStorage.getItem("bookmarksList") != null) {
    bookmarksList = JSON.parse(localStorage.getItem("bookmarksList"));
    displayBookmarks();
}

function addBookmark() {
    var bookmark = {
        bookmarkName: bookmarkNameInput.value,
        bookmarkUrl: bookmarkUrlInput.value
    };
    bookmarksList.push(bookmark);
    displayBookmarks();
    localStorage.setItem("bookmarksList" , JSON.stringify(bookmarksList));
    resetAllInputs();
}

function resetAllInputs() {
    bookmarkNameInput.value = null;
    bookmarkUrlInput.value = null;
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
    window.open(siteUrl , "_blank");
}