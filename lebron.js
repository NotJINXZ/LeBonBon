var audio = document.getElementById("audio");
var container = document.querySelector(".container");
var text = document.querySelector(".text");
var instruction = document.querySelector(".instruction");

document.addEventListener("keydown", function(event) {
    if (instruction.style.display !== "none" && (event.key === "Enter" || event.key === " ")) {
        showContent();
    }
});

document.addEventListener("click", function() {
    if (instruction.style.display !== "none") {
        showContent();
    }
});

function showContent() {
    instruction.style.display = "none";
    container.style.display = "block";

    audio.play();

    text.addEventListener("animationend", function() {
        container.style.display = "none";
    });
}
