const choices = ["Rock", "Paper", "Scissor"];
let pScore = 0;
let cScore = 0;

const buttons= document.querySelectorAll("button");
buttons.forEach(button=>{
    button.addEventListener('click', function(){
        const board = document.querySelector(".scoreboard");
        board.innerText = playRound(button.dataset.value);    })
})


function disableButtons() {
    buttons.forEach(button=>{
        button.disabled = true;
    })
}

function playRound(PlayerChoice){
    let ComputerChoice = choices[Math.floor(Math.random()*3)];
    
    if (pScore==5 || cScore==5){
        disableButtons()
        return "Refresh Page to play again";
    }
    else if ((PlayerChoice=="Rock" && ComputerChoice=="Scissor")||(PlayerChoice
        =="Scissor" && ComputerChoice=="Paper")||(PlayerChoice=="Paper" && 
        ComputerChoice=="Rock")){
        pScore++;
        return "You win\n" + "Your Choice: " + PlayerChoice + "\nOpponent Choice: "+ComputerChoice + "\nYour Score: "
        + pScore + "\nComputer Score: "+ cScore;;
    }
    else if (PlayerChoice==ComputerChoice){
        return "Draw\n"+ "Your Choice: " + PlayerChoice + "\nOpponent Choice: "+ComputerChoice + "\nYour Score: "
        + pScore + "\nComputer Score: "+ cScore;;
    }
    
    else{
        cScore++;
        return "You lose\n" + "Your Choice: " + PlayerChoice + "\nOpponent Choice: "+ComputerChoice + "\nYour Score: "
        + pScore + "\nComputer Score: "+ cScore;;
    }
    
}