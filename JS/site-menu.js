"strict mode"

let randomDesignLinks = ["design-1.html"];

let randomSiteA = document.getElementById("site-menu-random-a");
let hiddenDisplay = document.getElementById("menu-hidden-display");
let mainStylesheetLink = document.getElementById("main-stylesheet");
let siteMenuMain = document.getElementById("site-menu-main");
let colorScheme = 1;
let colorCheck;


randomSiteA.addEventListener("click", () => {
    randomSiteA.href = randomDesignLinks[Math.floor(Math.random() * randomDesignLinks.length)];
});

document.addEventListener("keydown", (keyClicked) => {
    if (keyClicked.key == "q") {
        let opacityCheck = window.getComputedStyle(siteMenuMain).getPropertyValue("opacity");
        if (opacityCheck == 1) {
            siteMenuMain.style.opacity = 0;
            hiddenDisplay.style.opacity = 1;
        } else {
            siteMenuMain.style.opacity = 1;
            hiddenDisplay.style.opacity = 0;
        }
    } else if (keyClicked.key == "e") {
        let styleCheck = mainStylesheetLink.getAttribute("href");
        console.log(styleCheck);
        if (styleCheck == "../CSS/design-1-stylesheet-shift-1.css") {
            mainStylesheetLink.href = "../CSS/design-1-stylesheet-main.css";
        } else {
            mainStylesheetLink.href = "../CSS/design-1-stylesheet-shift-1.css";
        }
    } else if (keyClicked.key == "w") {
        colorScheme += 1
        //Not sure what to add here.. <--
        //I want to change the hue-rotate() amount for the "hue" animation.
    }
});


//let currentState = false;
/*Adds a blinking effect. OLD MAY NOT WORK. 
function changeState() {
    console.log("thing")
    if (currentState) {
        currentState = false;
        randomSiteA.style.backgroundColor = "black";
    } else {
        currentState = true;
        randomSiteA.style.backgroundColor = "transparent";
    }
    setTimeout(() => {changeState()}, 2000);
}

changeState(); */
