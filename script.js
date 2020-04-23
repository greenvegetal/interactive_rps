const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const scoreArea = document.querySelector('.score-area');
const finish = document.querySelector('.finish');

let playerScore = 0;
let computerScore = 0;

const items = ["Rock", "Paper" , "Scissors"];
let computerChoice = items[Math.floor(Math.random() * items.length)];

let winHTML = `<p>Congrats! You win!
            Player Score : ${playerScore} <br>
            Computer Score : ${computerScore} <p>
`;
let loseHTML = `<p>Uh oh, You lose!
            Player Score : ${playerScore} <br>
            Computer Score : ${computerScore} <p>
`;
let tieHTML = `<p>Err, it's a tie!
            Player Score : ${playerScore} <br>
            Computer Score : ${computerScore} <p>
`;



function playGame(e) {
    if (e.target.textContent === "Rock") {
        if (computerChoice === "Scissors") {
            playerScore += 10;
            scoreArea.innerHTML = winHTML;
        } else if (computerChoice === "Paper") {
            computerScore += 10;
            scoreArea.innerHTML = loseHTML;

        } else {
            scoreArea.innerHTML = tieHTML;
        }
        
    } 


    else if (e.target.textContent === "Paper") {
        if (computerChoice === "Rock") {
            playerScore += 10;
            scoreArea.innerHTML = winHTML;

        } else if (computerChoice === "Scissors") {
            computerScore += 10;
            scoreArea.innerHTML = loseHTML;

        } else {
            scoreArea.innerHTML = tieHTML;
        }
        
    } 


    else if (e.target.textContent === "Scissors") {
        if (computerChoice === "Paper") {
            playerScore += 10;
            scoreArea.innerHTML = winHTML;

        } else if (computerChoice === "Rock") {
            computerScore += 10;
            scoreArea.innerHTML = loseHTML;

        } else {
            scoreArea.innerHTML = tieHTML;
        }
        
    } 

console.log(playerScore, computerScore);

}

rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissors.addEventListener('click', playGame);
