// TIMER1 FUNCTION

// capture input from command line and store in variable as array
let alarmArr = process.argv.slice(2);
console.log(alarmArr)

// Create simple function for beep, as we'll need this as a function in order to use setTimeout
// const beep = () => {
//   process.stdout.write('\x07');
//   console.log(`Alarm at  seconds`)
// }

// create loop that will iterate through inputArr and invoke beep at the appropraite delay
// refactor to include beep function as inline anonymous function

const timer = function (alarmArr) {
  for (let alarm of alarmArr) {
    // console.log(typeof(alarm)) // alarm is being returned as a string

    // Write code to filter out negative numbers, not numbers (eg strings)
    // if (alarm >= 0 || !isNaN(alarm)) { // This technique doesn't filter out "negative numbers" that are strings
    if (Math.sign(alarm) === 1) { // This works
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log(`Alarm at ${alarm} seconds`);
      }, alarm * 1000);
    }
  }
};

timer(alarmArr);




