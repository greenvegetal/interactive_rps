/* const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors'); */
const buttons = document.querySelectorAll('.items');
const scoreArea = document.querySelector('.score-area');
const finish = document.querySelector('.finish');
const restart = document.querySelector('.restart');

let playerScore = 0;
let computerScore = 0;



// computerselection by rng
let computerChoice = function () {
    const items = ["Rock", "Paper" , "Scissors"];
    let Choice = items[Math.floor(Math.random() * items.length)];
    return Choice;
}
console.log(computerChoice());



// These are the functions which updates the dom about the winner 
// and of the points of the players

const winHTML = function(){

    let HTML = `<p>Congrats! You win!
            Player Score : ${playerScore} <br>
            Computer Score : ${computerScore} </p>`;

    if(playerScore > 0) {
        scoreArea.innerHTML = HTML;
    }
};
const loseHTML = function(){

    let HTML = `<p>Uh oh, You lose!
    Player Score : ${playerScore} <br>
    Computer Score : ${computerScore} </p>`;

    if(computerScore > 0) {
        scoreArea.innerHTML = HTML;
    }
};

const tieHTML = function(){

    let HTML = `<p>Err, it's a tie!
    Player Score : ${playerScore} <br>
    Computer Score : ${computerScore} </p>`;

    if(playerScore) {
        scoreArea.innerHTML = HTML;
    }
};

// Displaying the finish button to decide winner

function displayFinishBtn() {
    if (playerScore > 0  || computerScore > 0) {
        finish.style.display = "block";
    }
}

//Playing the game, this is the function that is being attached as an event 
// to the variables rock, paper and scissors

function playGame(e) {

    computerChoice();

    if (e.target.textContent === "Rock") {
        if (computerChoice() === "Scissors") {
            playerScore += 10;
            winHTML();
        } else if (computerChoice() === "Paper") {
            computerScore += 10;
            loseHTML();
        } else {
            tieHTML();
        }
        
    } 


    else if (e.target.textContent === "Paper") {
        if (computerChoice() === "Rock") {
            playerScore += 10;
            winHTML();

        } else if (computerChoice() === "Scissors") {
            computerScore += 10;
            loseHTML();

        } else {
            tieHTML();
        }
        
    } 


    else if (e.target.textContent === "Scissors") {
        if (computerChoice() === "Paper") {
            playerScore += 10;
            winHTML();

        } else if (computerChoice() === "Rock") {
            computerScore += 10;
            loseHTML();

        } else {
            tieHTML();
        }
        
    } 

displayFinishBtn();

}

// attaching event to the finish button to decide the winner

function whoWon() {
    
    let differenceOne = playerScore - computerScore;
    let differenceTwo = computerScore - playerScore;

    if (playerScore > computerScore) {
        scoreArea.innerHTML = `
        <p class="result"> Congrats! You beat the computer by ${differenceOne} points! </p>
        `;
    } else if (computerScore > playerScore){
        scoreArea.innerHTML = `
        <p class="result"> Ouch! You are beaten by the computer by ${differenceTwo} points! </p>
        `;
    } else {
        scoreArea.innerHTML = `
        <p class="result"> Aww its a tie! Be friends I guess? </p>
        `;
    }

    if (differenceOne > 0 || differenceTwo > 0) {
        restart.style.display = "block";
    }
}

// restarting the game 

function restartGame() {
    if (whoWon) {
        playerScore = 0;
        computerScore = 0;

        scoreArea.innerHTML = "";
    }
}


/* rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissors.addEventListener('click', playGame); */

buttons.forEach(button => {
    button.addEventListener('click', playGame);
})

finish.addEventListener('click', whoWon);
restart.addEventListener('click', restartGame);