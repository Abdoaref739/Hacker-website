let terminal_field = document.getElementById("terminal-field");
let startGameButton = document.getElementById("start-game-button");
let gameHeaderText  = document.querySelector(".game-header-text");
let QuestionDisplayDiv = document.getElementById("question-display-div");
let PhishingChoiceButton = document.getElementById("phishing-choice-button");
let NotPhishingChoiceButton = document.getElementById("not-phishing-choice-button");
let QuestionDisplayParagraph = document.getElementById("question-siaplay-paragraph");
let timeDiv = document.querySelector(".time-div");
let scoreDiv = document.querySelector(".score-div");
let ScoreNumber = document.getElementById("score-number");
let QuestionObject = {
question1: "You receive an email from your bank stating, Dear Customer, we have detected unusual activity on your account. To secure your account, please verify your information by clicking the link below. The email looks official, with the bank’s logo and branding, but the sender’s email address is something like support@secure-bank123.com instead of the bank’s official domain. The link redirects you to a website that looks similar to your bank’s login page but has a slightly different URL.",
question2: "You get an email from a popular online service you use, saying, Your account has been compromised. Click here to reset your password immediately. The email includes a sense of urgency, warning that your account will be permanently deleted if you don’t act quickly. The sender’s email address looks suspicious, such as noreply@service-support.net, and the link leads to a page that asks for your current password and other personal details.", 
question3: "You receive an email from a delivery company saying, We were unable to deliver your package. Click here to reschedule your delivery: [suspicious link]. The email includes the company’s logo and appears legitimate, but you weren’t expecting any package. The link redirects you to a website that asks for personal information, such as your address and payment details.", 
question4: "You receive an email claiming, Congratulations! You’ve won a $1,000 gift card! Click here to claim your prize. The email looks flashy and includes images of prizes, but the sender’s email address is something like winners@contest-rewards.com. The link leads to a website that asks for your personal information, such as your name, address, and credit card details. ",
question5: "You receive an email from a recruiter offering you a high-paying job with minimal requirements. The email says, We are impressed with your profile and would like to offer you a position. Click here to complete your application. The sender’s email address is something like hr@fastcareers.net, and the link leads to a website that asks for your Social Security number, bank details, and other sensitive information. "
}
startGameButton.onclick = function(){
gameHeaderText.style.display = "none";
startGameButton.style.display = "none";
QuestionDisplayDiv.style.display = "block";
PhishingChoiceButton.style.display = "block";
NotPhishingChoiceButton.style.display = "block";
QuestionDisplayParagraph.innerHTML = QuestionObject.question1;
timeDiv.style.display = "block";
scoreDiv.style.display = "block";

}
PhishingChoiceButton.onclick = function(){
if(QuestionDisplayParagraph.innerHTML === QuestionObject.question1){
    ScoreNumber.innerHTML++;
    QuestionDisplayParagraph.innerHTML = QuestionObject.question2;
}else if(QuestionDisplayParagraph.innerHTML === QuestionObject.question2){
    ScoreNumber.innerHTML++;
    QuestionDisplayParagraph.innerHTML = QuestionObject.question3;
}
else if(QuestionDisplayParagraph.innerHTML === QuestionObject.question3){
    ScoreNumber.innerHTML++;
    QuestionDisplayParagraph.innerHTML = QuestionObject.question4;
}
else if(QuestionDisplayParagraph.innerHTML === QuestionObject.question4){
    ScoreNumber.innerHTML++;
    QuestionDisplayParagraph.innerHTML = QuestionObject.question5;
}
else if(QuestionDisplayParagraph.innerHTML === QuestionObject.question5){
    ScoreNumber.innerHTML = 5;
    
}


function show_results(){
window.location.href = "./phishing-game-success.html";
}
if(ScoreNumber.innerHTML == 5){
    setTimeout(show_results, 1000);
}




NotPhishingChoiceButton.onclick = function(){
if(QuestionDisplayParagraph.innerHTML === QuestionObject.question1){
    ScoreNumber.innerHTML--;
    QuestionDisplayParagraph.innerHTML = QuestionObject.question2;
}else if(QuestionDisplayParagraph.innerHTML === QuestionObject.question2){
    ScoreNumber.innerHTML--;
    QuestionDisplayParagraph.innerHTML = QuestionObject.question3;
}
else if(QuestionDisplayParagraph.innerHTML === QuestionObject.question3){
    ScoreNumber.innerHTML--;
    QuestionDisplayParagraph.innerHTML = QuestionObject.question4;
}
else if(QuestionDisplayParagraph.innerHTML === QuestionObject.question4){
    ScoreNumber.innerHTML--;
    QuestionDisplayParagraph.innerHTML = QuestionObject.question5;
}
else if(QuestionDisplayParagraph.innerHTML === QuestionObject.question5){
    ScoreNumber.innerHTML = 5;
    
}

}
}