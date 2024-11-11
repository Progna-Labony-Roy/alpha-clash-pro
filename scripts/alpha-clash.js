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
    console.log('player pressed', playerPress);

    // stop the game if pressed 'Esc'
    if(playerPress === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const expectedAlphabetElement =  document.getElementById('display-alphabet');
    const expectedAlphabet = expectedAlphabetElement.innerText.toLowerCase();
    // console.log(expectedAlphabet);

    // check matched or not
    if(playerPress === expectedAlphabet){
        // Score
        const presentScore = getElementValueByID('game-score')
        const newScore = presentScore + 1 ;
        updateElementValueByID('game-score',newScore)
        removeBackgroundColorByID(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you are a looser');
        // life
        const presentLife = getElementValueByID('current-life');
        const newLife = presentLife - 1 ;
        updateElementValueByID('current-life', newLife)
        console.log(newLife);
        if(newLife === 0){
            console.log('game over');
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function play(){
    // hide everything except playground
    hideElementByID('home');
    hideElementByID('score');
    displayElementByID('playground');

    // update score and life
    updateElementValueByID('game-score',0)
    updateElementValueByID('current-life', 5)

    continueGame();
}


function gameOver(){
    hideElementByID('playground');
    displayElementByID('score');

    const lastScore = getElementValueByID('game-score');
    document.getElementById('last-score').innerText= lastScore;


    const currentAlphabet = getElementTextValueByID('display-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorByID(currentAlphabet)
}