// Matrix Rain Effect for Cyber Security Quiz
const matrixCanvas = document.getElementById('matrixCanvas');
const matrixCtx = matrixCanvas.getContext('2d');

// Set canvas size
matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

// Characters for the matrix effect - cybersecurity themed
const characters = '01ﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐﾊﾐ';
const fontSize = 14;
const columns = Math.floor(matrixCanvas.width / fontSize);

// Array to store the y-coordinate of each column
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * matrixCanvas.height;
}

// Purple colors for cybersecurity theme - vibrant and bright
const purpleColors = [
    '#d946ef', // Bright magenta
    '#f472b6', // Vibrant pink-purple
    '#ec4899', // Hot pink
    '#f0abfc', // Light vibrant purple
    '#d8b4fe', // Bright lavender
    '#e879f9', // Electric purple
    '#c084fc'  // Bright purple
];

function drawMatrixRain() {
    // Semi-transparent fade effect - reduced for more visibility
    matrixCtx.fillStyle = 'rgba(10, 10, 20, 0.08)';
    matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

    // Set text properties
    matrixCtx.font = `bold ${fontSize}px 'Courier New', monospace`;
    matrixCtx.textBaseline = 'top';

    // Draw characters
    for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = characters[Math.floor(Math.random() * characters.length)];

        // Random purple color
        const color = purpleColors[Math.floor(Math.random() * purpleColors.length)];
        matrixCtx.fillStyle = color;

        // Draw character
        matrixCtx.fillText(char, i * fontSize, drops[i]);

        // Random reset for continuous flow
        if (drops[i] > matrixCanvas.height || Math.random() > 0.98) {
            drops[i] = 0;
        }

        // Move down
        drops[i] += fontSize;
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
});

// Start animation
function animateMatrix() {
    drawMatrixRain();
    requestAnimationFrame(animateMatrix);
}

// Initialize
animateMatrix();
