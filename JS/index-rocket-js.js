"strict mode"
/* ROCKET CODE - to be implemented
let moveX;
let moveY;
let accel = 0.4;
let mousePosX;
let mousePosY;
let rect = 0;

document.addEventListener("mousemove", function(event) {
    console.log("mouse", event.clientX, event.clientY);
    console.log(event);
    
    mousePosX = event.clientX;
    mousePosY = event.clientY;

    console.log(moveX);
    console.log(moveY);

    document.getElementById("position-display").innerHTML = `(${event.clientX}x, ${event.clientY}y)`;

})



function moveRocket() {
    rect = document.getElementById("rocket").getBoundingClientRect();
    console.log(rect)
    moveX = mousePosX - rect.x * accel;
    moveY = mousePosY - rect.y * accel;
    console.log(moveX, moveY, "MOVEROCKET")
    document.getElementById("rocket").style.translate = `${moveX}px ${moveY}px`;
    setTimeout(() => {moveRocket()}, 1);
}

moveRocket()*/
