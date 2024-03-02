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
    
    const randomNumber = Math.random();
    const limitRandomNumber = Math.random() * 25;
    const removeFloatingPointOfRandomNumber = Math.round(limitRandomNumber);

    const randomAlphabet = alphabets[removeFloatingPointOfRandomNumber];
    return randomAlphabet;
}