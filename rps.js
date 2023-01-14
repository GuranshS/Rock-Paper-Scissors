const choices = ["Rock", "Paper", "Scissor"];
let pScore = 0;
let cScore = 0;

const buttons= document.querySelectorAll("button");
buttons.forEach(button=>button.addEventListener("click", function(){
    const board = document.querySelector(".scoreboard");
    board.innerText = playRound(this.dataset.value);
    console.log(playRound(this.dataset.value));
    }));

function restart(){
    const buttons= document.querySelectorAll("button");
        buttons.forEach(button=>button.addEventListener("click", function(){
            const board = document.querySelector(".scoreboard");
            board.innerText = playRound(this.dataset.value);
            if(!this.dataset.value=="again"){
                this.disabled = false;
            }
        }));
}
function playRound(PlayerChoice){
    let ComputerChoice = choices[Math.floor(Math.random()*3)];
    let result = "Your Choice: " + PlayerChoice + "\nOpponent Choice: "+ComputerChoice + "\nYour Score: "
    + pScore + "\nComputer Score: "+ cScore;
    
    if (PlayerChoice=="again"){
        restart();
        return "You get a second chance";

    }
    else if (pScore>5 || cScore>5){
        const buttons= document.querySelectorAll("button");
        pScore=0;
        cScore=0;
        buttons.forEach(button=>button.addEventListener("click", function(){
        if(!this.dataset.value=="again"){
            this.disabled = true;
        }
        }));
        return "Press try again to restart"
    }
    else { 
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
}