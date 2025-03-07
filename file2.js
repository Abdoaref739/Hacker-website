let Box1 = document.getElementById("information-box1");
let Box2 = document.getElementById("information-box2")
let Box3 = document.getElementById("information-box3");
let Content_Div = document.getElementById("content-div");
let ContentBlurSection = document.getElementById("content-blur-section");
let ContentParagraph = document.querySelector("content-paragraph");
let IconX1 = document.getElementById("icon-x1");
let checkIcon1 = document.getElementById("check-icon1");
let checkIcon2 = document.getElementById("check-icon2");
let checkIcon3 = document.getElementById("check-icon3");
let contentParagraph1 = document.querySelector(".content-paragraph1");
let contentParagraph2 = document.querySelector(".content-paragraph2");
let contentParagraph3 = document.querySelector(".content-paragraph3");
let resultTaskText = document.querySelector(".result-task-text");
let resultTaskText2 = document.querySelector(".result-task-text2");
let resultTaskText3 = document.querySelector(".result-task-text3");
let NextSectionButton = document.getElementById("next-section-button");
let AchievementDiv = document.getElementById("achievement-div");
let AchievementBoxXicon = document.getElementById("achievement-box-xicon");
let AchievementBlurBox = document.getElementById("achievement-blur-box");
let clickCount = 0;



function Confetti(){
    confetti({
        particleCount: 500,
        spread: 100,
                colors:['#00aeff', '#003af7', '#5890fa'],
        });
        }

        AchievementBoxXicon.onclick = function(){
            AchievementDiv.style.display = "none";
            AchievementBlurBox.style.display = "none";
}



function handleClick() {
    clickCount++;
    if (clickCount === 3) {
        AchievementDiv.style.display = "block";
        AchievementBlurBox.style.display = "block";
        Confetti();
}
}
Box1.onclick = function (){
    Content_Div.style.display = "block";
    ContentBlurSection.style.display = "block";
    checkIcon1.style.display = "block";
    contentParagraph1.style.display = "block";
    Box1.style.border = "3px solid green";
    resultTaskText.innerHTML = "Task Completed!";
    resultTaskText.style.color = "green";
    resultTaskText.style.marginTop = "50px";
    if(contentParagraph3.style.display = "block"){
        contentParagraph1.style.display = "none";
    }
    if(contentParagraph2.style.display = "block"){
        contentParagraph2.style.display = "none";
    }
}
Box2.onclick = function (){
    Content_Div.style.display = "block";
    ContentBlurSection.style.display = "block";
    checkIcon2.style.display = "block";
    contentParagraph2.style.display = "block";
    Box2.style.border = "3px solid green";
    resultTaskText2.innerHTML = "Task Completed!";
    resultTaskText2.style.color = "green";
    resultTaskText2.style.marginTop = "50px";
    
    if(contentParagraph1.style.display = "block"){
        contentParagraph1.style.display = "none";
    }
    if(contentParagraph3.style.display = "block"){
        contentParagraph2.style.display = "none";
    }
}
Box3.onclick = function (){
    Content_Div.style.display = "block";
    ContentBlurSection.style.display = "block";
    checkIcon3.style.display = "block";
    Box3.style.border = "3px solid green";
    contentParagraph3.style.display = "block";
    resultTaskText3.innerHTML = "Task Completed!";
    resultTaskText3.style.color = "green";
    resultTaskText3.style.marginTop = "50px";
    if(contentParagraph1.style.display = "block"){
        contentParagraph1.style.display = "none";
    }
     if(contentParagraph2.style.display = "block"){
        contentParagraph2.style.display = "none";
    }

}
IconX1.onclick = function(){
    handleClick();
    ContentBlurSection.style.display = "none";
    Content_Div.style.display = "none";
}
NextSectionButton.onclick = function(){
    window.location.href = "./index.html";

}
