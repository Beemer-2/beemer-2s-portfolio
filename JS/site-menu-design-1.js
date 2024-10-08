"use strict"

let hiddenDisplay = document.getElementById("menu-hidden-display");
let mainStylesheetLink = document.getElementById("main-stylesheet");
let siteMenuMain = document.getElementById("site-menu-main");
let colorScheme = 1;
let colorCheck;
let styleCheck = 1;
let multiColor = false;
let lightMode = false;
let modeDelayDisabled = true;
let colorDelayDisabled = true;
let shiftStyleDelayDisabled = true;
let multiColorDelayDisabled = true;

//Enables the first animation by moving it off the screen so it can transition onto the screen.
siteMenuMain.style.transform = "translateY(-240px)";




function styleChanger() {
    function runStyleChanger() {
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
        shiftStyleDelayDisabled = false;
        setTimeout(() => {shiftStyleDelayDisabled = true}, 100);
    }
    if (shiftStyleDelayDisabled) { runStyleChanger(); }
    shiftStyleDelayDisabled = false;    
}


function colorChanger() {
    function runColorChanger() {
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

        colorDelayDisabled = false;
        setTimeout(() => {colorDelayDisabled = true}, 100);
    }

    if (colorDelayDisabled) { runColorChanger(); }
    colorDelayDisabled = false;
}


function modeChanger() {
    function runModeChanger() {
        if (lightMode && modeDelayDisabled) {
            lightMode = false;
            document.documentElement.style.backgroundColor = "black";
            document.documentElement.style.color = "white";
            document.getElementById("purpose-display").style.backgroundColor = "black";
            document.getElementById("site-menu-main").style.backgroundColor = "black";
            document.querySelectorAll("#site-menu-main > *").forEach(item => {item.style.color = "white";});
            document.getElementById("site-menu-random-a").style.color = "white";
            document.getElementById("menu-hidden-display").style.color = "white";
            document.querySelector("header").style.backgroundColor = "black";
            document.getElementById("scroll-amount").style.backgroundColor = "white";
            document.querySelectorAll('li > a').forEach((item) => {item.style.color = "white";});
        } else if (!lightMode && modeDelayDisabled) {
            lightMode = true;
            document.documentElement.style.transition = "1s";
            document.getElementById("site-menu-main").style.transition = "1s";
            document.documentElement.style.backgroundColor = "white";
            document.documentElement.style.color = "black";
            document.getElementById("purpose-display").style.backgroundColor = "white";
            document.getElementById("site-menu-main").style.backgroundColor = "white";
            document.querySelectorAll("#site-menu-main > *").forEach(item => {item.style.color = "black";});
            document.getElementById("site-menu-random-a").style.color = "black";
            document.getElementById("menu-hidden-display").style.color = "black";
            document.querySelector("header").style.backgroundColor = "white";
            document.getElementById("scroll-amount").style.backgroundColor = "black";
            document.querySelectorAll('li > a').forEach((item) => {item.style.color = "black";});
        }
        /* Epileptic accessability (prevents the modes from changing quickly if 'r' is held down. (2 second delay)) */
        modeDelayDisabled = false;
        setTimeout(() => {modeDelayDisabled = true}, 2000);
    }
    if (modeDelayDisabled) { runModeChanger(); }
    modeDelayDisabled = false;
}


function multiColorChanger() {
    function runMulticolorChanger() {
        if (multiColor == true) {
            multiColor = false;
            document.getElementById("main-h1").style.backgroundImage = "linear-gradient(110deg, #16d559, #1aa090)";
            document.getElementById("purpose-display").style.borderImage = "linear-gradient(110deg, #16d559, #1aa090)";
            
        } else {
            multiColor = true;
            document.getElementById("main-h1").style.backgroundImage = "linear-gradient(110deg, #16d559, #a01a1a, #dce401, #0729ea)";
            document.getElementById("purpose-display").style.borderImage = "linear-gradient(110deg, #16d559, #a01a1a, #dce401, #0729ea)";
        }
        multiColorDelayDisabled = false;
        setTimeout(() => {multiColorDelayDisabled = true}, 100);
    }
    if (multiColorDelayDisabled) { runMulticolorChanger(); }
    multiColorDelayDisabled = false;
}


//Keyboard menu controls
document.addEventListener("keydown", (keyClicked) => {
    if (keyClicked.key == "q") {
        let opacityCheck = window.getComputedStyle(siteMenuMain).getPropertyValue("opacity");
        if (opacityCheck == 1) {
            siteMenuMain.style.opacity = 0;
            hiddenDisplay.style.opacity = 1;
            siteMenuMain.style.transform = "translateY(-240px)";
        } else {
            siteMenuMain.style.transform = "translateY(0px)";
            siteMenuMain.style.opacity = 1;
            hiddenDisplay.style.opacity = 0;
            
        }

    } else if (keyClicked.key == "e") {
        styleChanger();


    } else if (keyClicked.key == "w") {
        colorChanger();


    } else if (keyClicked.key == "p") {
        multiColorChanger();


    } else if (keyClicked.key == "r") {
        modeChanger();

    }
    
});


document.getElementById("menu-hidden-display").addEventListener("click", (clicked) => {
    siteMenuMain.style.opacity = 1;
    hiddenDisplay.style.opacity = 0;
    siteMenuMain.style.transform = "translateY(0px)";
});

document.getElementById("site-menu-random-p").addEventListener("click", (clicked) => {
    siteMenuMain.style.opacity = 0;
    hiddenDisplay.style.opacity = 1;
    siteMenuMain.style.transform = "translateY(-240px)";
});

document.getElementById("site-menu-color-change").addEventListener("click", (clicked) => {
    colorChanger();
});

document.getElementById("site-menu-style-shift").addEventListener("click", (clicked) => {
    styleChanger();
});

document.getElementById("site-menu-mode-shift").addEventListener("click", (clicked) => {
    modeChanger();
});

document.getElementById("site-menu-multicolor").addEventListener("click", (clicked) => {
    multiColorChanger();
});

