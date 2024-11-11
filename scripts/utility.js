function getElementTextValueByID(elementID){
    const elementText = document.getElementById(elementID);
    const Text = elementText.innerText;
    return Text
}

function hideElementByID(elementID){
    const hiddenElement = document.getElementById(elementID);
    hiddenElement.classList.add('hidden');
}

function displayElementByID(elementID){
    const element =document.getElementById(elementID);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-600')
}

function removeBackgroundColorByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('bg-orange-600')
}


function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get a random index from 1 to 25
    const randomNumber = Math.random() * 25;
    index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet
}


function getElementValueByID(elementID){
    const presentScoreValue = document.getElementById(elementID).innerText;
        const presentScore = parseInt(presentScoreValue);
        return presentScore
}

function updateElementValueByID(elementID, value){
    document.getElementById(elementID).innerText= value
}