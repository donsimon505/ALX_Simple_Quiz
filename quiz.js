function checkAnswer(){
    const correctAnswer = '4';
    const userAnswer = document.querySelector('[name = "quiz"]').value;
    const feedback = document.getElementById('feedback');

    if(userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done.";
    }
    else{
        feedback.textContent = "That's incorrect. Try again!";
    }
}

const submitAnswer = getElementById('submit-answer');

submitAnswer.addEventListener('submit', checkAnswer);