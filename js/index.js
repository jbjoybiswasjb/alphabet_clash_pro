// function play() {
//     const homeSection = document.getElementById('alphabet_clash_home');
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('alphabet_clash_playground');
//     playGround.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event) {
    // Find the pressed key.
    const pressedAlphabet = event.key;
    console.log(pressedAlphabet);

    if (pressedAlphabet === 'Escape') {
        gameOver();
    }

    // Find the expected key.
    const expectedElement = document.getElementById('display_text');
    const expectedAlphabet = expectedElement.innerText;
    const expectedAlphabetSmallLatter = expectedAlphabet.toLowerCase()
    // console.log('pressed key', pressedAlphabet, 'expected key', expectedAlphabetSmallLatter);

    if (pressedAlphabet === expectedAlphabetSmallLatter) {

        removeBackgroundColorByClass(expectedAlphabetSmallLatter);
        continuePlay();

        const value = getElementValueById('score_element');
        const currentScore = value + 1;
        setElementValueById('score_element', currentScore);


        // const scoreElement = document.getElementById('score_element');
        // const scoreText = scoreElement.innerText;
        // const scoreNumber = parseInt(scoreText);

        // const updateScore = scoreNumber + 1;
        // scoreElement.innerText = updateScore;

    }
    else {
        // console.log('Not matched.');

        const value = getElementValueById('life_element');
        const updatedLife = value - 1;
        setElementValueById('life_element', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }



        // const lifeElement = document.getElementById('life_element');
        // const lifeText = lifeElement.innerText;
        // const lifeNumber = parseInt(lifeText);

        // const updateLife =  lifeNumber - 1;
        // lifeElement.innerText = updateLife;
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress);


function continuePlay() {
    // Step 1: generate a random alphabet.
    const alphabet = getRandomAlphabet();
    // console.log(alphabet);

    // Step 2: Set random alphabet to the screen show.
    const displayElement = document.getElementById('display_text');
    displayElement.innerText = alphabet.toUpperCase();
    // console.log(displayElement);

    // Step 3: Set background color.
    setBackgroundColorByClass(alphabet);
}

function play() {
    classAdd('alphabet_clash_home');
    classAdd('alphabet_clash_score');
    classRemove('alphabet_clash_playground');
    continuePlay();

    setElementValueById('score_element', 0);
    setElementValueById('life_element', 5);
}

function gameOver() {
    const updatedScore = getElementValueById('score_element');
    setElementValueById('last_score', updatedScore);

    const currentAlphabet = elementText('display_text');
    const currentAlphabetSmaller = currentAlphabet.toLowerCase();
    removeBackgroundColorByClass(currentAlphabetSmaller);

    classAdd('alphabet_clash_playground');
    classRemove('alphabet_clash_score');
}