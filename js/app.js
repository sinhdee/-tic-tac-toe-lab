/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll(".sqr")

const messageEls = document.querySelector("#message")


/*---------------------------- Variables (state) ----------------------------*/

let board = ['','','','','','','','','',];

let turn = 'X';

let tie  = false;

let winner = false;




/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init() {
    board = ['','','','','','','','','',];

     turn = 'X';

      tie = false; 

     winner = false; 
   render();
}

 init();


function render() {
updateBoard();
updateMessage();
}

function updateBoard() {
    board.forEach((cell,idx) => {
    squareEls[idx].textContent = cell
    });}

function updateMessage() {
     if (winner) {messageEls.textContent = `Congrats Player ${winner}! You win!`;
     } else if (tie = updateBoard !== 'X' || 'O') {messageEls.textContent =
      `Game is Tied!`;
    } else {messageEls.textContent = `Player ${turn}'s turn`;
}
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


/*----------------------------- Event Listeners -----------------------------*/

function handleClick(event) {
const squareIndex = (event.target.id);
    if (winner || board[squareIndex] !== '') { return; }
placePiece(squareIndex);
checkForWinner();
checkForTie();
switchPlayerTurn();
render();
}

squareEls.forEach((squareEl) => {
    squareEl.addEventListener("click",handleClick);
    });
   
function placePiece (index) {
board[index] = turn;
}

function checkForWinner () {
 winningCombos.forEach(winningCombo => {
 if (board[winningCombo[0]] !== "" && 
    board[winningCombo[0]] === board[winningCombo[1]] && board[winningCombo[1]] === board[winningCombo[2]] ){
        winner = turn 
 }
 }
)}

function checkForTie () {
    if (winner === true) {
        return 
    } board.forEach(boardEl => {
        if (boardEl === "") {
        } else (tie = true)
    })  
}

function switchPlayerTurn() 
{
     if (winner === false && turn === 'X'){
         turn = 'O'}
        else if (winner === false && turn === 'O' ) {
        turn = 'X'
    }        
}

