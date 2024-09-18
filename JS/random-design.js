"strict mode"

let randomDesignLinks = ["design-1.html", "design-2.html"]

document.getElementById("random-site-a").addEventListener("click", () => {
    document.getElementById("random-site-a").href = randomDesignLinks[Math.floor(Math.random() * randomDesignLinks.length)];
})