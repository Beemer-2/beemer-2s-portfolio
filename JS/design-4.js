"use strict"


let files = [];

let dateObj = new Date;
//console.log(dateObj.getHours() + ":" + dateObj.getMinutes());

function updateDate() {
    let dateObj = new Date;
    //console.log(dateObj.getHours() + ":" + dateObj.getMinutes());
    document.getElementById("hr-time").innerHTML = dateObj.getHours() + ":" + dateObj.getMinutes();
    setTimeout(() => {updateDate()}, 1000);
}

function updateLongDate() {
    let dateObj = new Date;
    //console.log(dateObj.getDay() + "/" + dateObj.getMonth() + dateObj.getFullYear());
    document.getElementById("actual-date").innerHTML = dateObj.getDay() + "/" + dateObj.getMonth() + "/" + dateObj.getFullYear();
    setTimeout(() => {updateLongDate()}, 360000);
}

updateDate();
updateLongDate();


let mouseXCoords;
let mouseYCoords;

let mouseXCoordsNum;
let mouseYCoordsNum;

document.addEventListener("mousemove", (a) => {
    mouseXCoords = a.clientX + "px";
    mouseYCoords = a.clientY + "px";
    mouseXCoordsNum = a.clientX;
    mouseYCoordsNum = a.clientY;
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


let currentNewFolderCount = 2;
let currentTextDocCount = 1;

var textFileData = {};

var inputArea = document.getElementById("input-area");

document.getElementById("file2").addEventListener("dblclick", () => {
    document.getElementById("text-editor").style.display = "block"; 
    document.querySelector("#text-editor > #main-page").style.display = "block";
});

function addEventListenerFunc(fileID, typeOfFile) {
    if (typeOfFile == "doc") {
        document.getElementById(fileID).addEventListener("dblclick", () => { 
            document.getElementById("text-editor").style.display = "block"; 
        });
    }
}

let currentFileID = 3;

document.getElementById("new-folder").addEventListener("click", () => {

    currentNewFolderCount += 1;

    let newFolderString = `New Folder (${currentNewFolderCount-1})`;
    let fileID = "file"+currentFileID++;

    let newContainer = document.createElement("div");
    newContainer.id = fileID;
    document.getElementById("desktop").appendChild(newContainer);

    let newFolder = document.createElement("img");
    newFolder.src = "../ASSETS/Folder-icon.png";
    document.getElementById(fileID).appendChild(newFolder);

    let newFolderName = document.createElement("p");
    newFolderName.innerHTML = newFolderString;
    newFolderName.classList.add("desktop-item-p");
    newFolderName.id = fileID;
    newFolderName.contentEditable = "true"
    document.getElementById(fileID).appendChild(newFolderName);

    addEventListenerFunc(fileID, "folder");

});

document.getElementById("new-text-document").addEventListener("click", () => {

    updateFilesArray(`New Text Document (${currentTextDocCount-1})`);

    currentTextDocCount += 1;

    let newDocString = `New Text Document (${currentTextDocCount-1})`;
    let fileID = "file"+currentFileID++;

    /*if (currentTextDocCount == 1) {
        newDocString = `New Text Document`;
    }*/

    let newContainer = document.createElement("div");
    newContainer.id = fileID;
    document.getElementById("desktop").appendChild(newContainer);

    let newDoc = document.createElement("img");
    newDoc.src = "../ASSETS/Text-doc.png";
    document.getElementById(fileID).appendChild(newDoc);

    let newDocName = document.createElement("p");
    newDocName.innerHTML = newDocString;
    newDocName.classList.add("desktop-item-p");
    newDocName.contentEditable = "true";
    document.getElementById(fileID).appendChild(newDocName);

    addEventListenerFunc(fileID, "doc");
});

function updateFilesArray(file) {
    files += file;
    console.log(file);
    console.log(files)
}

function renameFile() {

}

//Function which will be used to request fullscreen when needed 
function fullscreen() {
    //console.log(document.body.requestFullscreen());
}



document.getElementById("exit").addEventListener("click", () => { document.getElementById("text-editor").style.display = "none"; });

let maxTextEditorSize = false;

document.getElementById("fullscreen").addEventListener("click", () => { 
    if (maxTextEditorSize) {
        maxTextEditorSize = false;
        document.getElementById("text-editor").style.width = "80%"; 
        document.getElementById("text-editor").style.height = "80%"; 
    } else {
        maxTextEditorSize = true;
        document.getElementById("text-editor").style.width = "100%"; 
        document.getElementById("text-editor").style.height = "100%"; 
        document.getElementById("text-editor").style.top = "0"; 
        document.getElementById("text-editor").style.left = "0"; 
    }

});

let fullscreenEnabled = false

let droppedX = 0;
let droppedY = 0;

let draggableTextEditor = document.getElementById("text-editor");

let originalPosData;

//hides transparent version of element when dragging
draggableTextEditor.addEventListener("dragstart", (item) => {
    item.dataTransfer.setDragImage(document.getElementById("invis-div"),20,20)
});

draggableTextEditor.addEventListener("drag", (item) => {
    item.preventDefault();

    let rect = item.target.getBoundingClientRect();
    /*let centerDivX = rect.left + rect.width / 2;
    let centerDivY = rect.top + rect.height / 2;
    let distanceFromCenterX = item.clientX - centerDivX;
    let distanceFromCenterY = item.clientY - centerDivY;
    console.log(`Distance from center of div: x = ${distanceFromCenterX}, y = ${distanceFromCenterY}`);*/
    
    
    //console.log(item.clientX, item.clientY)
    if (item.clientX != 0)
    {
        //console.log(mouseXCoords, mouseYCoords,item.clientX,item.clientY )
        
        //draggableTextEditor.style.left = `${item.clientX + (item.clientX - mouseXCoordsNum)}px`; old
        //draggableTextEditor.style.top = `${item.clientY + (item.clientY - mouseYCoordsNum)}px`; old
        draggableTextEditor.style.left = `${(item.clientX - rect.width / 2)}px`;
        draggableTextEditor.style.top = `${(item.clientY - rect.height / 2)}px`;
    }

    
});



//currently working on adding file and folder IDs so you can edit "text files" and save them.
//This design was made as I wanted to know how to make moveable divs; I wanted to practise with flexbox; I wanted to practise with grid and I wanted to make a creative site.


