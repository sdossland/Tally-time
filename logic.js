/**
 * Created by sophia on 4/17/17.
 */
document.addEventListener("DOMContentLoaded", function () {
  const allTimes = [...document.querySelectorAll('[data-time]')]; //it's a node list, thus spread it into an array
  const output = document.querySelector('.output');

  //converts all numbers to two digits
  function pad2(number) {
    return (number < 10 ? '0' : '') + number
  }

  const secondsPerVideo = allTimes
    .map(time => time.dataset.time)
    .map(format => {
      const [mins, secs] = format.split(':').map(parseFloat); //parseFloat changes data type of strings into numbers
      return mins * 60 + secs;
    });

  let totalSeconds = secondsPerVideo.reduce((total, val) => {
    return total + val;
  });

  let secondsLeft = totalSeconds;
  const hours = pad2(Math.floor(secondsLeft / 3600));
  secondsLeft = secondsLeft % 3600;
  const minutes = pad2(Math.floor(secondsLeft / 60));
  const seconds = pad2(secondsLeft % 60);

  //outputs total to HTML
  output.innerHTML = hours + ' hrs ' + minutes + ' mins and ' + seconds + ' secs';

});