"strict mode"

document.getElementById("main-paragraph-h2").classList.add("hidden-main");
document.getElementById("main-paragraph-p").classList.add("hidden-main");
document.getElementById("main-paragraph-ul").classList.remove("side-show");
document.getElementById("main-paragraph-ul").classList.add("hidden-side");


let clientHeightLet = document.documentElement.clientHeight;



let screenSize = document.body.getBoundingClientRect();
console.log(screenSize, screenSize.width, screenSize.height, screenSize.top, screenSize.bottom);
document.addEventListener("scroll", () => {
    screenSize = document.body.getBoundingClientRect();
    clientHeightLet = document.documentElement.clientHeight;
    if (clientHeightLet > document.getElementById("main-paragraph-h2").getBoundingClientRect().y + document.getElementById("main-paragraph-h2").getBoundingClientRect().height / 5) {
        console.log("e");
        document.getElementById("main-paragraph-h2").classList.add("main-show");

    } 
    
    if (clientHeightLet > document.getElementById("main-paragraph-p").getBoundingClientRect().y + document.getElementById("main-paragraph-p").getBoundingClientRect().height / 5) {
        document.getElementById("main-paragraph-p").classList.add("main-show");
    }

    if (clientHeightLet > document.getElementById("main-paragraph-ul").getBoundingClientRect().y + document.getElementById("main-paragraph-ul").getBoundingClientRect().height / 5) {
        document.getElementById("main-paragraph-ul").classList.add("side-show");
    }
    //console.log(screenSize, screenSize.width, screenSize.height, screenSize.top, screenSize.bottom)
});

