// function play() {
//     const homeSection = document.getElementById('alphabet_clash_home');
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('alphabet_clash_playground');
//     playGround.classList.remove('hidden');
// }

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