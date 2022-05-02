function shuffleList(list, maxSize=list.length) {
    let shuffledList = [];

    for(let i = 0; i < maxSize; i++) {
        let position = Math.floor(Math.random() * list.length);
        shuffledList.push(list.splice(position, 1)[0]);
    }

    return shuffledList;
}

function generateSolution() {
    let controls = [1, 2, 3, 4, 5, 6];
    let solution = shuffleList(controls, 4);

    return solution;

}

function populateAttemptsTable(tableBody, totalAttempts) {
    let tableContent = "";
    for(let i = 1; i <= totalAttempts; i++) {
        tableContent += `<tr id="row-${i}">
                <td><input type="text" class="round text-center answer empty" disabled></input></td>
                <td><input type="text" class="round text-center answer empty" disabled></input></td>
                <td><input type="text" class="round text-center answer empty" disabled></input></td>
                <td><input type="text" class="round text-center answer empty" disabled></input></td>
                <td class="verification">
                    <input type="text" class="round text-center verification-${i}" disabled></input>
                    <input type="text" class="round text-center verification-${i}" disabled></input> 
                    <input type="text" class="round text-center verification-${i}" disabled></input>
                    <input type="text" class="round text-center verification-${i}" disabled></input>
                </td>
            </tr>`;
    }

    tableBody.innerHTML = tableContent;
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
            if(currentAnswer.length == solution.length) {
                checkAnswer('verification-' + currentAttempt);
            }
            break;
        }

    }

}

function checkAnswer(currentVerificationClass) {

    let correct = 'verification-correct';
    let misplaced = 'verification-misplaced';
    let wrong = 'verification-wrong';

    let verificationPresentationInputs = document.getElementsByClassName(currentVerificationClass);
    let allCorrect = true;

    let verificationResult = [];

    // verificationPresentationInputs[i].classList.add(correct);
    for(let i = 0; i < solution.length; i++) {
        if (solution[i] == currentAnswer[i]) {
            verificationResult.push(correct);
        } else if(solution.includes(currentAnswer[i])) {
            verificationResult.push(misplaced);
            allCorrect = false;
        } else {
            verificationResult.push(wrong);
            allCorrect = false;
        }
    }

    let shuffleHints = document.getElementById('shuffle-hints').checked;
    if(shuffleHints) {
        verificationResult = shuffleList(verificationResult);
    }

    for(let i = 0; i < verificationResult.length; i++) {
        verificationPresentationInputs[i].classList.add(verificationResult[i]);
    }

    if (allCorrect) {
        winner = true;
        revealSolution();
    } else {
        if (currentAttempt == attemptLimit) {
            winner = false;
            revealSolution();
        } else {
            currentAttempt += 1;
            currentAnswer = [];
            currentRow = document.getElementById('row-' + currentAttempt);
        }
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

    let icon = '';
    let message = '';

    if(winner) {
        icon = 'success';
        message = 'YOU DID IT!';
        document.body.style.background = '#66d478';
    } else {
        icon = 'error';
        message = 'Wrong Answer! Game Over...';
        document.body.style.background = '#d47a66';
    }

    Swal.fire({
        'icon': icon,
        'text': message,
        'timer': 2000,
        'showConfirmButton': false,
    });

    let replayButton = document.getElementById('replay-button');
    replayButton.classList.remove('d-none');
}

function replay() {
    window.location.reload();
}

function showExplanation(subject) {

    let message = '';

    if(subject == 'shuffle-hints') {
        message = 'If you enable this option, the hints will no longer match the order of the numbers. This will make the game more challenging.';
    } else if(subject == 'hints-colors') {
        message = `
            <div class="verification"><input type="text" class="round text-center verification-correct" disabled></input> -> The number and its position are correct</div>
            <div class="verification"><input type="text" class="round text-center verification-misplaced" disabled></input> -> The number is correct but it is in the wrong place</div>
            <div class="verification"><input type="text" class="round text-center verification-wrong" disabled></input> -> The number is wrong</div>
        `;
    }

    Swal.fire({
        'icon': 'question',
        'html': message,
    });
}