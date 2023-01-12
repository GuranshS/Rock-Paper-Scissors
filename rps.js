const choices = ["rock", "paper", "scissor"];
let pScore = 0;
let cScore = 0;

const buttons= document.querySelectorAll("button");
buttons.forEach(button=>button.addEventListener("click", function(){
console.log(playRound(this.dataset.value));
    }));

function playRound(PlayerChoice){
    let ComputerChoice = choices[Math.floor(Math.random()*3)];
    let result = "Your Choice:" + PlayerChoice + "\nOpponent Choice: "+ComputerChoice + "\nYour Score: "
    + pScore + "\nComputer Score: "+ cScore;

    if (PlayerChoice==ComputerChoice){
        return "Draw\n"+ result;
    }
    else if ((PlayerChoice=="rock" && ComputerChoice=="scissor")||(PlayerChoice
        =="scissor" && ComputerChoice=="paper")||(PlayerChoice=="paper" && 
        ComputerChoice=="rock")){
        pScore++;
        return "You win\n" + result;
    }
    else{
        cScore++;
        return "You lose\n" + result;
    }
}