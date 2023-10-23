// Variáveis do jogo
let secretNumber = generateRandomNumber();
let attempts = 0;

// Elementos HTML
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check");
const message = document.getElementById("message");
const restartButton = document.getElementById("restart");

// Função para verificar adivinhação
function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Digite um número válido entre 1 e 100.";
    } else {
        attempts++;
        if (userGuess === secretNumber) {
            message.textContent = `Parabéns! Você acertou em ${attempts} tentativas.`;
            guessInput.setAttribute("disabled", true);
            checkButton.setAttribute("disabled", true);
            restartButton.style.display = "block";
        } else if (userGuess < secretNumber) {
            message.textContent = "Tente um número maior.";
        } else {
            message.textContent = "Tente um número menor.";
        }
    }
    guessInput.value = "";
    guessInput.focus();
}

// Event listeners
checkButton.addEventListener("click", checkGuess);
guessInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkGuess();
    }
});
restartButton.addEventListener("click", () => {
    // Reiniciar o jogo
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.removeAttribute("disabled");
    checkButton.removeAttribute("disabled");
    restartButton.style.display = "none";
    message.textContent = "Tente adivinhar o número entre 1 e 100.";
});

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
