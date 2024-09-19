"strict mode"

let randomDesignLinks = ["design-1.html", "design-2.html"];

let randomSiteA = document.getElementById("random-site-a");

randomSiteA.addEventListener("click", () => {
    randomSiteA.href = randomDesignLinks[Math.floor(Math.random() * randomDesignLinks.length)];
});

document.addEventListener("keydown", (q) => {
    if (q.key == "q") {
        let opacityCheck = window.getComputedStyle(randomSiteA).getPropertyValue("opacity");
        if (opacityCheck == 1) {
            randomSiteA.style.opacity = 0;
        } else {
            randomSiteA.style.opacity = 1;
        }
    }
});
