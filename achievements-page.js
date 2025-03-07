let MyAchievements = document.getElementById("my-achievements");
let AllAchievements = document.getElementById("all-achievements");
let Achievement1 = document.getElementById("achievement1-div");
let Achievement2 = document.getElementById("achievement2-div");
let Achievement3 = document.getElementById("achievement3-div");
let MyAchievement1 = document.getElementById("my-achievement1-div");

AllAchievements.onclick = function(){
    Achievement1.style.display = "block";
    Achievement2.style.display = "block";
    Achievement3.style.display = "block";
}

MyAchievements.onclick = function(){
    MyAchievement1.style.display = "block";
    Achievement1.style.display = "none"; 
    Achievement2.style.display = "none";
    Achievement3.style.display = "none";
}