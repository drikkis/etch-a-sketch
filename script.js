// Initializes square amounts
let sqSideAmount = 25;
const sqTotalAmount = sqSideAmount * sqSideAmount;

// Creates the squares
const squareContainer = document.querySelector(`#container`);
for (i = 0; i < sqTotalAmount; i++) {
    const newSquare = document.createElement(`div`);
    newSquare.setAttribute(`class`, `square`);
    squareContainer.appendChild(newSquare);
    // TODO give squares size style attribute
};

// Color squares if they done been touched
let allSquares = document.querySelectorAll(`.square`);
allSquares.forEach((square) => {
    square.addEventListener(`mouseover`, function(e) {
        e.target.classList.add(`touchedSquare`);
    });
});

// 'New Grid' button functionality
function clearGrid() {
};
function createGrid() {
    for (i = 0; i < sqTotalAmount; i++) {
        const newSquare = document.createElement(`div`);
        newSquare.setAttribute(`class`, `square`);
        squareContainer.appendChild(newSquare);
        // TODO give squares size style attribute
    };
}

const btn = document.querySelector(`button`);
btn.addEventListener(`click`, () => {
    sqSideAmount = prompt(`whatchu need?`, `2-100`)
    
});