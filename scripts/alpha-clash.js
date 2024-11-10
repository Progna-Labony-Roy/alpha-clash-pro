function continueGame(){
    const alphabet= getRandomAlphabet();
    // console.log('Your random alphabet is', alphabet)

    const displayAlphabet = document.getElementById('display-alphabet');
    const displayAlphabetValue = displayAlphabet.innerText = alphabet;
    // console.log(displayAlphabetValue);

    setBackgroundColorById(alphabet)
}

function handleKeyboardKeyUpEvent(event){
    const playerPress = event.key;
    // console.log('player pressed', playerPress);

    // get the expected to press
    const expectedAlphabetElement =  document.getElementById('display-alphabet');
    const expectedAlphabet = expectedAlphabetElement.innerText.toLowerCase();
    // console.log(expectedAlphabet);

    // check matched or not
    if(playerPress === expectedAlphabet){
        // Score
        const presentScoreValue = document.getElementById('game-score').innerText;
        const presentScore = parseInt(presentScoreValue);
        const newScore = presentScore + 1 ;
        document.getElementById('game-score').innerText= newScore
        console.log(newScore);

        removeBackgroundColorByID(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you are a looser');
        // life
        const presentLifeValue = document.getElementById('current-life').innerText;
        const presentLife = parseInt(presentLifeValue);
        const newLife = presentLife - 1 ;
        document.getElementById('current-life').innerText= newLife
        console.log(newLife);
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function play(){
    hideElementByID('home')
    displayElementByID('playground')
    continueGame();
}