// function play() {
//     const homeSection = document.getElementById('alphabet_clash_home');
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('alphabet_clash_playground');
//     playGround.classList.remove('hidden');
// }

function continuePlay() {
    // Step 1: generate a random alphabet.
    const alphabet = getRandomAlphabet();
    console.log(alphabet);
}

function play() {
    classAdd('alphabet_clash_home');
    classRemove('alphabet_clash_playground');
    continuePlay();
}