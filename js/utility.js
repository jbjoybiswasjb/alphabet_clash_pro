function classAdd(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function classRemove(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random();
    const limitRandomNumber = randomNumber * 25;
    const index = Math.round(limitRandomNumber);
    // console.log(index);

    const randomAlphabet = alphabets[index];
    return randomAlphabet;
}

function setBackgroundColorByClass(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('key_highlight_color');
}