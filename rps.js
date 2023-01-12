const choices = ["rock", "paper", "scissor"];

        function getPlayerChoice(){
            const buttons= document.querySelectorAll("input");
            buttons.forEach(button=>button.addEventListener("click", function(){
                return button.value;
            }))
        }

        function playRound(PlayerChoice,ComputerChoice){
            if (PlayerChoice==ComputerChoice){
                return "Draw";
            }
            else if (PlayerChoice=="rock" && ComputerChoice=="scissor"){
                return "You win";
            }
            else if(PlayerChoice=="scissor" && ComputerChoice=="paper"){
                return "You win";
            }
            else if(PlayerChoice=="paper" && ComputerChoice=="rock"){
                return "You win";
            }
            else{
                return "You lose";
            }
        }

        function game(){
            for(i=0;i<5;i++){
                let ComputerChoice = choices[Math.floor(Math.random()*3)];
                const PlayerChoice = getPlayerChoice();
                console.log("Your Choice:" + PlayerChoice + "\nOpponent Choice: "+ComputerChoice);
                console.log(playRound(PlayerChoice, ComputerChoice));
            }
        }

    game(); 