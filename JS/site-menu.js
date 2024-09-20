"strict mode"

let randomDesignLinks = ["design-1.html"];

let randomSiteA = document.getElementById("site-menu-random-a");
let hiddenDisplay = document.getElementById("menu-hidden-display");
let mainStylesheetLink = document.getElementById("main-stylesheet");
let siteMenuMain = document.getElementById("site-menu-main");
let colorScheme = 1;
let colorCheck;
let styleCheck = 1


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

        styleCheck += 1
        if (styleCheck % 3 == 1) {
            mainStylesheetLink.href = "../CSS/design-1-stylesheet-main.css";
        } else if (styleCheck % 3 == 2) {
            mainStylesheetLink.href = "../CSS/design-1-stylesheet-shift-1.css";
        } else {
            mainStylesheetLink.href = "../CSS/design-1-stylesheet-shift-2.css";
        }
    } else if (keyClicked.key == "w") {
        colorScheme += 1;
        let middleVar = getComputedStyle(document.body).getPropertyValue("--color-shift-amount-middle");
        let endVar = getComputedStyle(document.body).getPropertyValue("--color-shift-amount-end");

        if (colorScheme % 4 == 1) {
            document.body.style.setProperty("--color-shift-amount-start", "0deg");
            document.body.style.setProperty("--color-shift-amount-middle", "180deg");
            document.body.style.setProperty("--color-shift-amount-end", "360deg");
        }
        
        else if (colorScheme % 4 == 2) {
            document.body.style.setProperty("--color-shift-amount-start", "130deg");
            document.body.style.setProperty("--color-shift-amount-middle", "190deg");
            document.body.style.setProperty("--color-shift-amount-end", "130deg");
        }

        else if (colorScheme % 4 == 3) {
            document.body.style.setProperty("--color-shift-amount-start", "100deg");
            document.body.style.setProperty("--color-shift-amount-middle", "130deg");
            document.body.style.setProperty("--color-shift-amount-end", "100deg");
        }

        else if (colorScheme % 4 == 0) {
            document.body.style.setProperty("--color-shift-amount-start", "0deg");
            document.body.style.setProperty("--color-shift-amount-middle", "35deg");
            document.body.style.setProperty("--color-shift-amount-end", "0deg");
        }
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
