// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Chess Facts Array
    const chessFacts = [
        "Did you know? The Queen is the most powerful piece in chess!",
        "The Knight is the only piece that can jump over other pieces!",
        "A pawn can be promoted to any piece (except a king) when it reaches the opposite side!",
        "The King can castle with either rook, moving two squares towards the rook!",
        "The game of chess is over 1500 years old!",
        "The longest possible chess game is 5,949 moves!"
    ];

    // Text Content Change - Chess Facts
    const textChanger = document.getElementById('text-changer');
    const changeableText = document.getElementById('changeable-text');
    let factIndex = 0;
    
    textChanger.addEventListener('click', () => {
        factIndex = (factIndex + 1) % chessFacts.length;
        changeableText.textContent = chessFacts[factIndex];
    });

    // Style Changes - Chess Board Appearance
    const styleChanger = document.getElementById('style-changer');
    const styleBox = document.getElementById('style-box');
    let isStyleChanged = false;

    styleChanger.addEventListener('click', () => {
        if (!isStyleChanged) {
            styleBox.style.backgroundColor = '#2c3e50';
            styleBox.style.color = 'white';
            styleBox.style.fontWeight = 'bold';
            styleBox.style.transform = 'scale(1.05)';
            styleBox.style.border = '2px solid #e74c3c';
            styleBox.textContent = '♜ ♞ ♝ ♛ ♚ ♝ ♞ ♜\n♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟\n\n♙ ♙ ♙ ♙ ♙ ♙ ♙ ♙\n♖ ♘ ♗ ♕ ♔ ♗ ♘ ♖';
        } else {
            styleBox.style.backgroundColor = '#ecf0f1';
            styleBox.style.color = '#2c3e50';
            styleBox.style.fontWeight = 'normal';
            styleBox.style.transform = 'scale(1)';
            styleBox.style.border = '2px solid #bdc3c7';
            styleBox.textContent = 'This chess board can change its appearance!';
        }
        isStyleChanged = !isStyleChanged;
    });

    // Element Toggle - Chess Moves
    const elementToggler = document.getElementById('element-toggler');
    const elementContainer = document.getElementById('element-container');
    let newElement = null;

    elementToggler.addEventListener('click', () => {
        if (!newElement) {
            // Create and add new element with chess move example
            newElement = document.createElement('div');
            newElement.innerHTML = `
                <h3>Knight's Move Example</h3>
                <p>The Knight moves in an "L" shape:</p>
                <pre style="font-family: monospace; background: #f0f0f0; padding: 10px; border-radius: 4px;">
    . . . . . . . .
    . . X . X . . .
    . X . . . X . .
    . . . ♞ . . . .
    . X . . . X . .
    . . X . X . . .
    . . . . . . . .
    . . . . . . . .
                </pre>
                <p>X marks possible moves for the Knight (♞)</p>
            `;
            newElement.style.padding = '15px';
            newElement.style.backgroundColor = '#e6f7ff';
            newElement.style.border = '1px solid #91d5ff';
            newElement.style.marginTop = '10px';
            newElement.style.borderRadius = '4px';
            elementContainer.appendChild(newElement);
            elementToggler.textContent = 'Hide Move Example';
        } else {
            // Remove the element
            elementContainer.removeChild(newElement);
            newElement = null;
            elementToggler.textContent = 'Show Move Example';
        }
    });
}); 