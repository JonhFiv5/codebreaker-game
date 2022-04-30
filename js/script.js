// const { Swal } = require("./sweetalert2.js");

function generateSolution() {
    let controls = [1, 2, 3, 4, 5, 6];
    let solution = [];

    for(let i = 0; i < 4; i++) {
        let position = Math.floor(Math.random() * controls.length);
        solution.push(controls.splice(position, 1)[0]);
    }

    return solution;

}

function fillAnswer(control) {
    let controlClass = control.id;
    let controlValue = parseInt(control.innerText);
    let results = currentRow.getElementsByClassName('answer');
    
    for(let i = 0; i < results.length; i++) {
        let result = results[i];

        if (result.classList.contains('empty')) {
            result.classList.add(controlClass);
            result.value = controlValue;
            result.classList.remove('empty');

            currentAnswer.push(controlValue);
            break;
        }

    }
}

function checkAnswer(button, verificationClass) {

    if(!button.classList.contains('button-verify-' + currentAttempt)){
        return false;
    }

    if (currentAnswer.length < solution.length) {
        Swal.fire({
            'icon': 'error',
            'text': 'You must fill all the fields!'
        });

        return false;
    }

    button.style.display = 'none';

    let correct = 'verification-correct';
    let misplaced = 'verification-misplaced';
    let wrong = 'verification-wrong';

    let verificationPresentationInputs = document.getElementsByClassName(verificationClass);

    let allCorrect = true;

    for(let i = 0; i < solution.length; i++) {
        if (solution[i] == currentAnswer[i]) {
            verificationPresentationInputs[i].classList.add(correct);
        } else if(solution.includes(currentAnswer[i])) {
            verificationPresentationInputs[i].classList.add(misplaced);
            allCorrect = false;
        } else {
            verificationPresentationInputs[i].classList.add(wrong);
            allCorrect = false;
        }
    }

    if (allCorrect) {
        revealSolution();
    } else {
        currentAttempt += 1;
        currentAnswer = [];
        currentRow = document.getElementById('row-' + currentAttempt);
    }

}

function revealSolution() {
    solutionPresentationInputs = document.getElementsByClassName('solution-field');
    let controlClasses = ['button-1', 'button-2', 'button-3', 'button-4', 'button-5', 'button-6'];

    for(let i = 0; i < solution.length; i++) {
        solutionPresentationInputs[i].classList.add(controlClasses[solution[i]-1]);
        solutionPresentationInputs[i].value = solution[i];
        solutionPresentationInputs[i].style.color = 'white';
    }

    Swal.fire({
        'icon': 'success',
        'text': 'YOU DID IT!',
        'timer': 2000,
        'showConfirmButton': false,
    });

    let replayButton = document.getElementById('replay-button');
    replayButton.classList.remove('d-none');
}

function replay() {
    window.location.reload();
}