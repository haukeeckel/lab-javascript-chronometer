const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let min = chronometer.getMinutes();
  let minStr = chronometer.computeTwoDigitNumber(min);

  minDecElement.innerText = minStr[0];
  minUniElement.innerText = minStr[1];
}

function printSeconds() {
  let secStr = chronometer.getSeconds();
  let sec = chronometer.computeTwoDigitNumber(secStr);

  secDecElement.innerText = sec[0];
  secUniElement.innerText = sec[1];
}

// ==> BONUS
function printMilliseconds() {
  let ms = chronometer.getMilliSec();
  let msStr = chronometer.computeTwoDigitNumber(ms);

  milDecElement.innerText = msStr[0];
  milUniElement.innerText = msStr[1];
}

function printSplit() {
  let newSplit = document.createElement('li');
  newSplit.innerText = chronometer.split();
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerText = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerText = 'START';
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (chronometer.isRunning) {
    // Stopped
    chronometer.isRunning = false;
    chronometer.stop();

    // Edit CSS
    setStartBtn();
    setResetBtn();
  } else {
    // Running
    chronometer.isRunning = true;
    chronometer.start(printTime);
    chronometer.milliSecStart(printTime);
    // Edit CSS
    setStopBtn();
    setSplitBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (chronometer.isRunning) {
    // Split
    printSplit();
  } else {
    chronometer.reset();
    clearSplits();
    printTime();
  }
});
