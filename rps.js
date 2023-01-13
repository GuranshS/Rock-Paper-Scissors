const choices = ["Rock", "Paper", "Scissor"];
let pScore = 0;
let cScore = 0;

const buttons= document.querySelectorAll("button");
buttons.forEach(button=>button.addEventListener("click", function(){
    const board = document.querySelector(".scoreboard");
    board.innerText = playRound(this.dataset.value);
    console.log(playRound(this.dataset.value));
    }));

function playRound(PlayerChoice){
    let ComputerChoice = choices[Math.floor(Math.random()*3)];
    let result = "Your Choice: " + PlayerChoice + "\nOpponent Choice: "+ComputerChoice + "\nYour Score: "
    + pScore + "\nComputer Score: "+ cScore;

    if (PlayerChoice==ComputerChoice){
        return "Draw\n"+ result;
    }
    else if ((PlayerChoice=="Rock" && ComputerChoice=="Scissor")||(PlayerChoice
        =="Scissor" && ComputerChoice=="Paper")||(PlayerChoice=="Paper" && 
        ComputerChoice=="Rock")){
        pScore++;
        return "You win\n" + result;
    }
    else{
        cScore++;
        return "You lose\n" + result;
    }
}