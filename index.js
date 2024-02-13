const btnOne = document.querySelector('.btnOne');
const btnTwo = document.querySelector('.btnTwo');
const btnThree = document.querySelector('.btnThree');
const myAudioOne = document.querySelector('#myAudioOne');
const myAudioTwo = document.querySelector('#myAudioTwo');
const myAudioThree = document.querySelector('#myAudioThree');

btnOne.addEventListener('click', musicOne);

function musicOne() {
    
    if (myAudioOne.paused){
        myAudioOne.play();
        btnOne.classList.toggle('pause');
    }
    else {
        myAudioOne.pause();
        btnOne.classList.toggle('pause');
    }
}

    const timer = 4;
    let amountTimeOne = timer * 60 - 47;
    let amountTimeTwo = timer * 60 - 6;
    let amountTimeThree = timer * 60 - 27;

function calculateTimeOne() {
    
    const timerOne = document.querySelector('#timerOne');
    let minutes = Math.floor(amountTimeOne/60);
    let seconds = amountTimeOne%60;

        if(seconds < 10) {
            seconds ='0' + seconds;
        }
    timerOne.textContent = `${minutes}:${seconds}`;
    amountTimeOne--;
        if (amountTimeOne<0) {
            stopTimer();
            amountTimeOne = 0;
        }
    function stopTimer() {
        clearInterval(timerId);
    }    
}
let timerId = setInterval(calculateTimeOne, 1000);

///////////////////////////////////////////

btnTwo.addEventListener('click', musicTwo);

function musicTwo() {
    if (myAudioTwo.paused){
        myAudioTwo.play();
        btnTwo.classList.toggle('pause');
    }
    else {
        myAudioTwo.pause();
        btnTwo.classList.toggle('pause');
    }
}

function calculateTimeTwo() {
    
    const timerTwo = document.querySelector('#timerTwo');
    let minutes = Math.floor(amountTimeTwo/60);
    let seconds = amountTimeTwo%60;

        if(seconds < 10) {
            seconds ='0' + seconds;
        }
    timerTwo.textContent = `${minutes}:${seconds}`;
    amountTimeTwo--;
        if (amountTimeTwo<0) {
            stopTimer();
            amountTimeTwo = 0;
        }
    function stopTimer() {
        clearInterval(timerId);
    }    
}


////////////////////////////////////////////////

btnThree.addEventListener('click', musicThree);

function musicThree() {
    if (myAudioThree.paused){
        myAudioThree.play();
        btnThree.classList.toggle('pause');
    }
    else {
        myAudioThree.pause();
        btnThree.classList.toggle('pause');
    }
}

function calculateTimeThree() {
    
    const timerThree = document.querySelector('#timerThree');
    let minutes = Math.floor(amountTimeThree/60);
    let seconds = amountTimeThree%60;

        if(seconds < 10) {
            seconds ='0' + seconds;
        }
    timerThree.textContent = `${minutes}:${seconds}`;
    amountTimeThree--;
        if (amountTimeThree<0) {
            stopTimer();
            amountTimeThree = 0;
        }
    function stopTimer() {
        clearInterval(timerId);
    }    
}