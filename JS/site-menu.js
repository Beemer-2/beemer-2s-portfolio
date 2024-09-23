"strict mode"

let randomDesignLinks = ["design-1.html"];

let randomSiteA = document.getElementById("site-menu-random-a");
let hiddenDisplay = document.getElementById("menu-hidden-display");
let mainStylesheetLink = document.getElementById("main-stylesheet");
let siteMenuMain = document.getElementById("site-menu-main");
let colorScheme = 1;
let colorCheck;
let styleCheck = 1;
let multiColor = false;

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
        if (styleCheck % 4 == 1) {
            mainStylesheetLink.href = "../CSS/design-1-stylesheet-main.css";
        } else if (styleCheck % 4 == 2) {
            mainStylesheetLink.href = "../CSS/design-1-stylesheet-shift-1.css";
        } else if (styleCheck % 4 == 3) {
            mainStylesheetLink.href = "../CSS/design-1-stylesheet-shift-2.css";
        } else {
            mainStylesheetLink.href = "../CSS/design-1-stylesheet-shift-3.css";
        }

    } else if (keyClicked.key == "w") {
        colorScheme += 1;
        let middleVar = getComputedStyle(document.body).getPropertyValue("--color-shift-amount-middle");
        let endVar = getComputedStyle(document.body).getPropertyValue("--color-shift-amount-end");

        if (colorScheme % 8 == 1) {
            document.body.style.setProperty("--color-shift-amount-start", "0deg");
            document.body.style.setProperty("--color-shift-amount-middle", "180deg");
            document.body.style.setProperty("--color-shift-amount-end", "360deg");
        }
        
        else if (colorScheme % 8 == 2) {
            document.body.style.setProperty("--color-shift-amount-start", "130deg");
            document.body.style.setProperty("--color-shift-amount-middle", "190deg");
            document.body.style.setProperty("--color-shift-amount-end", "130deg");
        }
 
        else if (colorScheme % 8 == 3) {
            document.body.style.setProperty("--color-shift-amount-start", "100deg");
            document.body.style.setProperty("--color-shift-amount-middle", "130deg");
            document.body.style.setProperty("--color-shift-amount-end", "100deg");
        }

        else if (colorScheme % 8 == 4) {
            document.body.style.setProperty("--color-shift-amount-start", "0deg");
            document.body.style.setProperty("--color-shift-amount-middle", "35deg");
            document.body.style.setProperty("--color-shift-amount-end", "0deg");
        }

        else if (colorScheme % 8 == 5) {
            document.body.style.setProperty("--color-shift-amount-start", "230deg");
            document.body.style.setProperty("--color-shift-amount-middle", "265deg");
            document.body.style.setProperty("--color-shift-amount-end", "230deg");
        }

        else if (colorScheme % 8 == 6) {
            document.body.style.setProperty("--color-shift-amount-start", "30deg");
            document.body.style.setProperty("--color-shift-amount-middle", "80deg");
            document.body.style.setProperty("--color-shift-amount-end", "30deg");
        }

        else if (colorScheme % 8 == 7) {
            document.body.style.setProperty("--color-shift-amount-start", "0deg");
            document.body.style.setProperty("--color-shift-amount-middle", "210deg");
            document.body.style.setProperty("--color-shift-amount-end", "0deg");
        }

        else if (colorScheme % 8 == 0) {
            document.body.style.setProperty("--color-shift-amount-start", "220deg");
            document.body.style.setProperty("--color-shift-amount-middle", "360deg");
            document.body.style.setProperty("--color-shift-amount-end", "220deg");
        }

    } else if (keyClicked.key == "p") {
        if (multiColor == true) {
            multiColor = false;
            document.getElementById("main-h1").style.backgroundImage = "linear-gradient(110deg, #16d559, #1aa090)";
            document.getElementById("purpose-display").style.borderImage = "linear-gradient(110deg, #16d559, #1aa090)";
            
        } else {
            multiColor = true;
            document.getElementById("main-h1").style.backgroundImage = "linear-gradient(110deg, #16d559, #a01a1a, #dce401, #0729ea)";
            document.getElementById("purpose-display").style.borderImage = "linear-gradient(110deg, #16d559, #a01a1a, #dce401, #0729ea)";
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
