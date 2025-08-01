// Define the function to check the answer
function checkAnswer() {
    const correctAnswer = "4";

    // Get the selected radio input
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get feedback element
    const feedback = document.getElementById("feedback");

    // Handle case where no answer is selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
