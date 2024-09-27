"use strict"

let dateObj = new Date;
console.log(dateObj.getHours() + ":" + dateObj.getMinutes());

function updateDate() {
    let dateObj = new Date;
    console.log(dateObj.getHours() + ":" + dateObj.getMinutes());
    document.getElementById("hr-time").innerHTML = dateObj.getHours() + ":" + dateObj.getMinutes();
    setTimeout(() => {updateDate()}, 1000);
}

function updateLongDate() {
    let dateObj = new Date;
    console.log(dateObj.getDay() + "/" + dateObj.getMonth() + dateObj.getFullYear());
    document.getElementById("actual-date").innerHTML = dateObj.getDay() + "/" + dateObj.getMonth() + "/" + dateObj.getFullYear();
    setTimeout(() => {updateLongDate()}, 360000);
}

updateDate();
updateLongDate();


let mouseXCoords;
let mouseYCoords;

document.addEventListener("mousemove", (a) => {
    mouseXCoords = a.clientX + "px";
    mouseYCoords = a.clientY + "px";
});

//disables right click menu so custom right click content can be added 
let rightClickMenu = document.getElementById("right-click-menu");
let rightClickMenuOpened = false;

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    rightClickMenu.style.display = "block";
    rightClickMenu.style.top = mouseYCoords;
    rightClickMenu.style.left = mouseXCoords;
});

document.addEventListener("click", (e) => {
    rightClickMenu.style.display = "none";
});


let currentNewFolderCount = 5;
let currentTextDocCount = 0;

document.getElementById("new-folder").addEventListener("click", (e) => {

    currentNewFolderCount += 1;
    let newFolderString = `New Folder (${currentNewFolderCount-1})`;

    let newContainer = document.createElement("div");
    newContainer.id = newFolderString;
    document.getElementById("desktop").appendChild(newContainer);

    let newFolder = document.createElement("img");
    newFolder.src = "../ASSETS/Folder-Icon.png";
    document.getElementById(newFolderString).appendChild(newFolder);

    let newFolderName = document.createElement("p");
    newFolderName.innerHTML = newFolderString;
    newFolderName.classList.add("desktop-item-p");
    document.getElementById(newFolderString).appendChild(newFolderName);

});

document.getElementById("new-text-document").addEventListener("click", (e) => {
    currentTextDocCount += 1;
    let newDocString = `New Text Document (${currentTextDocCount-1})`;

    let newContainer = document.createElement("div");
    newContainer.id = newDocString;
    document.getElementById("desktop").appendChild(newContainer);

    let newDoc = document.createElement("img");
    newDoc.src = "../ASSETS/Text-doc.png";
    document.getElementById(newDocString).appendChild(newDoc);

    let newDocName = document.createElement("p");
    newDocName.innerHTML = newDocString;
    newDocName.classList.add("desktop-item-p");
    document.getElementById(newDocString).appendChild(newDocName);
});


//Function which will be used to request fullscreen when needed 
function fullscreen() {
    console.log(document.body.requestFullscreen());
}




