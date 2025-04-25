var player = document.getElementById("player");
var obstacle = document.getElementById("obstacle");
var game = document.getElementById("game");

function jump() {
    if (!player.classList.contains("animate")) {
        player.classList.add("animate");

        setTimeout(function () {
            player.classList.remove("animate");
        }, 500);
    }
}

let isAlive = setInterval(function () {
    const characterTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        alert("💀 Game Over!");
    }
}, 10);


game.addEventListener("click", jump);
