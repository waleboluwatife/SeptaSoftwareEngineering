document.addEventListener("DOMContentLoaded", function () {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const guessInput = document.getElementById("guess");
    const checkButton = document.getElementById("check");
    const message = document.querySelector(".message");

    checkButton.addEventListener("click", function () {
        const guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = "Please enter a valid number between 1 and 100.";
        } else if (guess === randomNumber) {
            message.textContent = "Congratulations! You guessed the correct number!";
            message.style.color = "green";
            guessInput.disabled = true;
            checkButton.disabled = true;
        } else {
            message.textContent = `Wrong guess. Try again. (Random number: ${randomNumber})`;
            message.style.color = "red";
        }
    });
});