// function play() {
//     const homeSection = document.getElementById('alphabet_clash_home');
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('alphabet_clash_playground');
//     playGround.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event) {
    // Find the pressed key.
    const pressedAlphabet = event.key;

    // Find the expected key.
    const expectedElement = document.getElementById('display_text');
    const expectedAlphabet = expectedElement.innerText;
    const expectedAlphabetSmallLatter = expectedAlphabet.toLowerCase()
    // console.log('pressed key', pressedAlphabet, 'expected key', expectedAlphabetSmallLatter);

    if (pressedAlphabet === expectedAlphabetSmallLatter) {

        removeBackgroundColorByClass(expectedAlphabetSmallLatter);
        continuePlay();

        const scoreElement = document.getElementById('score_element');
        const scoreText = scoreElement.innerText;
        const scoreNumber = parseInt(scoreText);

        const updateScore = scoreNumber + 1;
        scoreElement.innerText = updateScore;

    }
    else {
        // console.log('Not matched.');
        const lifeElement = document.getElementById('life_element');
        const lifeText = lifeElement.innerText;
        const lifeNumber = parseInt(lifeText);

        const updateLife =  lifeNumber - 1;
        lifeElement.innerText = updateLife;
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
    classRemove('alphabet_clash_playground');
    continuePlay();
}