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

function removeBackgroundColorByClass(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('key_highlight_color');
}

function getElementValueById (elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    return elementValue;
}

function setElementValueById (elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}