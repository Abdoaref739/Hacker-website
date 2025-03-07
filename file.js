let HeroStartButton = document.getElementById("hero-start-button");
let animation_style = document.getElementById("animation-style");
let achievementsSectionButton = document.getElementById("achievements-section-button");
HeroStartButton.onclick = function(){
    window.scrollTo(0, 600);
}

window.onload = function(){
    window.scrollTo(0, 0);
}
let Start_Learning_Button = document.getElementById("start-learning-button");
Start_Learning_Button.onclick = function(){
    window.location.href = "./learn-hack-concepts.html";
}
let Start_Learning_Button2 = document.getElementById("start-learning-button2");
Start_Learning_Button2.onclick = function(){
    window.location.href = "./hacking-games.html";
}

document.body.onload = function(){
animation_style.style.display = "block";
}

achievementsSectionButton.onclick = function(){
    window.location.href = "./achievements-page.html";
}