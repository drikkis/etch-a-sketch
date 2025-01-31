const squareContainer = document.querySelector(`#container`);

// Creates 16 squares
for (i = 0; i < 16; i++) {
    const newSquare = document.createElement(`div`);
    newSquare.setAttribute(`class`, `square`);
    squareContainer.appendChild(newSquare);
};

// 
let allSquares = document.querySelectorAll(`.square`);
allSquares.forEach((square) => {
    square.addEventListener(`mouseover`, function(e) {
        e.target.classList.add(`touchedSquare`);
    });
});




// gridSquare.addEventListener(`click`, function(e) {
//     e.target.setAttribute(`class`, `usedSquare`);
// });

