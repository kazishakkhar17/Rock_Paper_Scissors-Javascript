let userScore = 0;
let computerScore = 0;
let msg=document.getElementById("msg");
const choices = document.querySelectorAll(".choice");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#Computer-score");


 // Reset background colors for each choice
//  rock.style.backgroundColor = "";
//  paper.style.backgroundColor = "";
//  scissors.style.backgroundColor = "";

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    if (options[randIdx]==="rock") {
        rock.style.backgroundColor="hotpink"

        
    }
    else if (options[randIdx]==="paper") {
        paper.style.backgroundColor="hotpink"

        
    }
    else if (options[randIdx]==="scissors") {
        scissors.style.backgroundColor="hotpink"

        
    }
     // Remove the highlight after 1 second
     setTimeout(() => {
        rock.style.backgroundColor = "";
        paper.style.backgroundColor = "";
        scissors.style.backgroundColor = "";
    }, 2000);
    return options[randIdx];
   
};

const drawGame = () => {
    console.log("Game was drawn");
    msg.innerText = "You Chose same!";
    msg.style.backgroundColor = "gray";
};

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You Win");
        //msg.innerText = "You win!";
        msg.style.backgroundColor = "green";

        userScore++;
        userScorePara.innerText=userScore;
    } else {
        console.log("Computer Wins");
        //msg.innerText = "Computer Wins!";
        msg.style.backgroundColor = "red";
        computerScore++;
        computerScorePara.innerText=computerScore;
    }
};

const playGame = (userChoice) => {
    console.log("User choice:", userChoice);
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        // Draw
        drawGame();
    } else {
        let userWin;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors";
            msg.innerText = userWin ? "Rock crushes Scissors!" : "Paper covers Rock!";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
            msg.innerText = userWin ? "Paper covers Rock!" : "Scissors cuts Paper!";
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper";
            msg.innerText = userWin ? "Scissors cuts Paper!" : "Rock crushes Scissors!";
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
