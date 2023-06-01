const randomQuoteUrl = 'http://api.quotable.io/random';
const inputText = document.querySelector('textarea');
const textDiv = document.querySelector('.quoteDisplay');
const timerElement = document.querySelector('.counter')


//* generate random words from the 'words' Array 
function randomWords(num) {
    let text = "";
    let inContent = document.querySelector(".quoteDisplay")
    for (let i = 0; i < num; i++) {
        text += words[Math.floor(Math.random() * words.length)] + " "
    }
    for (let i = 0; i < text.length; i++) {
        let span = document.createElement('span');
        span.append(text[i])
        inContent.append(span)
    }
}
randomWords(15)
function checkInput() {
    let quoteDisplay = Array.from(document.querySelectorAll('.quoteDisplay span'));

    for (let i = 0; i < quoteDisplay.length; i++) {

        inputText.addEventListener('input', function () {

            if (inputText.value[i]) {
                if (inputText.value.length == 1) {
                    startTimer()
                }
                if (inputText.value[i] === quoteDisplay[i].textContent) {
                    quoteDisplay[i].classList.add('correct')
                    quoteDisplay[i].classList.remove('incorrect')

                } else {
                    quoteDisplay[i].classList.remove('correct')
                    quoteDisplay[i].classList.add('incorrect')
                }
            } else {
                quoteDisplay[i].classList.remove('correct')
                quoteDisplay[i].classList.remove('incorrect')
            }

        });

    }
    console.log(quoteDisplay.length)
    // if(inputText.value[quoteDisplay.length].classList == 'correct'){
    //     console.log('help')
    // }

}
checkInput()



let refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', function () {
    // let inputText = document.querySelector('textarea');
    inputText.value = '';
    let textDisplay = document.querySelector('.quoteDisplay');
    textDisplay.innerHTML = '';
    randomWords(15);
    checkInput();
    timerElement.innerHTML = timerElement.innerHTML
})
let startTime
function startTimer() {
    // timerElement.innerText = 0
    startTime = new Date()
    setInterval(() => {
        timerElement.innerText = getTimerTime()
    }, 1000)
}
// startTimer()
function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}






