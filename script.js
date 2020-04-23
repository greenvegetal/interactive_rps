const items = ["rock", "paper" , "scissor"];
let computerChoice = items[Math.floor(Math.random() * items.length)];

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

paper.addEventListener('click', e => {
    console.log(e.target.textContent);
})


