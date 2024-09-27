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

document.getElementById("new-folder").addEventListener("click", (e) => {
    let newFolder = document.createElement("img");
    newFolder.src = "../ASSETS/placeholder-image.png";
    document.getElementById("desktop").appendChild(newFolder);
});

document.getElementById("new-text-document").addEventListener("click", (e) => {
    let newTextDoc = document.createElement("img");
    newTextDoc.src = "../ASSETS/placeholder-text-document.png";
    document.getElementById("desktop").appendChild(newTextDoc);
});


//Function which will be used to request fullscreen when needed 
function fullscreen() {
    console.log(document.body.requestFullscreen());
}
