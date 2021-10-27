class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.isRunning = false;
    this.milliSec = 0;
    this.msIntervalId = null;
  }

  milliSecStart(callback) {
    this.msIntervalId = setInterval(() => {
      this.milliSec++;
      if (callback) {
        callback();
      }
    }, 10);
  }

  getMilliSec() {
    let milliSec = this.milliSec % 100;
    return milliSec;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    return value.toLocaleString('en-US', {
      minimumIntegerDigits: 2
    });
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.msIntervalId);
  }

  reset() {
    this.currentTime = 0;
    this.milliSec = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let milliSec = this.computeTwoDigitNumber(this.getMilliSec());

    return `${minutes}:${seconds}:${milliSec}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
