// Creates the squares
    // defines the container to which the squares will be put in
const squareContainer = document.querySelector(`#container`);

// Function for creating square grid
function createGrid(gridSize) {
    for (i = 0; i < (gridSize * gridSize); i++) {
        const newSquare = document.createElement(`div`);
        newSquare.setAttribute(`class`, `square`);
        // Sizing the new square depending on the size of the grid
        newSquare.style.minWidth = (100 / gridSize) + `%`;
        squareContainer.appendChild(newSquare);
    };
    // Assigns all the squares the capacity to be colored
    let allSquares = document.querySelectorAll(`.square`);
        allSquares.forEach((square) => {
            square.addEventListener(`mouseover`, function(e) {
            e.target.classList.add(`touchedSquare`);
        });     
    });
};

// Default grid
createGrid(16);

// Function to clear grid
function clearGrid() {
    while (squareContainer.hasChildNodes()) {
        squareContainer.removeChild(squareContainer.firstChild);
    };
};

// 'New Grid' button press
const btn = document.querySelector(`button`);
btn.addEventListener(`click`, () => {
    clearGrid();
    function chooseSize () {
        let userInput = prompt(`size?`, `2-100`);
        if (userInput < 0 || userInput > 100 ) {
            alert(`invalid choice!`);
            chooseSize();
        } else {
            let chosenSize = userInput;
            createGrid(chosenSize);
        };
    }; 
    chooseSize();
});

// TODO
// add default value to grid
// add random colors
// add opacity to grid