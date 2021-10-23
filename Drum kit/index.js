var numberOfDrumsButton = document.querySelectorAll(".drum").length;

for(i = 0; i < numberOfDrumsButton; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", audioPlay);

function audioPlay() {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}
}
