// script.js
const gridContainer = document.querySelector('.grid-container');
const discordNameInput = document.getElementById('discordName');
let squaresClickable = false; // Initially, squares are not clickable
const takenSquares = new Set(); // Set to track taken squares
const adaPerSquare = 50; // Assume 50 ADA per square

// Generate 100 numbered squares
for (let i = 1; i <= 100; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-item');
    square.textContent = i;
    square.addEventListener('click', () => handleSquareClick(square, i));
    gridContainer.appendChild(square);
}

function handleSquareClick(square, squareNumber) {
    const discordName = discordNameInput.value.trim();
    if (discordName) {
        if (takenSquares.has(squareNumber)) {
            alert('Sorry, this square is already taken. Please choose another one.');
        } else {
            // Mark the square as taken
            takenSquares.add(squareNumber);
            square.textContent = discordName;
            console.log(`Selected square ${squareNumber} by ${discordName}`);
        }
    } else {
        alert('Please enter your Discord name.');
    }
}

// Enable squares when a name is entered
discordNameInput.addEventListener('input', () => {
    squaresClickable = discordNameInput.value.trim() !== '';
    const squares = document.querySelectorAll('.grid-item');
    squares.forEach((square) => {
        square.style.pointerEvents = squaresClickable ? 'auto' : 'none';
    });
});

// Event listener for the "Calculate" button
const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', calculateTotalCost);

// Function to calculate the total cost
function calculateTotalCost() {
    const totalSquares = takenSquares.size; // Count the number of taken squares
    const totalCost = totalSquares * adaPerSquare;
    console.log(`Total cost: ${totalCost} ADA for ${totalSquares} squares.`);
    // Display the total cost to the user (you can customize this further)
    alert(`Total cost: ${totalCost} ADA for ${totalSquares} squares.`);
}
