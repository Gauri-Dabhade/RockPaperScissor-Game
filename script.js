let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const gencompChoice = () => {
const options = ["rock", "paper", "scissor"];
 const ranIdx = Math.floor(Math.random()*3);
 return options[ranIdx];
};
const drawGame = ()=>{
    console.log("game is draw");
    msg.innerText="Game is Draw,Play Again";
    msg.style.backgroundColor="green";
};

const playGame = (userChoice) => {
console.log("user choice = ",userChoice);
const compChoice = gencompChoice();
console.log("comp choice = ",compChoice);

const showWinner = (userWin,userChoice,compChoice) =>{
if(userWin){
    userScore++;
    userScorepara.innerText=userScore;
    console.log("You Win");
    msg.innerText= `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="blue";
}
else{
    compScore++;
    compScorepara.innerText=compScore;
    console.log("You Lose");
    msg.innerText=`You Lose!  ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
}
};

if(userChoice===compChoice){
drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        //paper,scissor
        userWin=compChoice==="paper" ? false : true;
    }
    else if(userChoice===paper){
        userWin=compChoice==="scissors" ? false :true;
    }
    else{
        userWin=compChoice=== "rock" ? false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    });
});
    
