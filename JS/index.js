"use strict"

let randomDesignLinks = ["design-1.html"];
let randomSiteA = document.getElementById("site-menu-random-a");

console.log(randomSiteA)

randomSiteA.addEventListener("click", () => {
    randomSiteA.href = randomDesignLinks[Math.floor(Math.random() * randomDesignLinks.length)];
});
