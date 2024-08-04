// Get element with id
let chrono = document.getElementById("chrono");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");
// Declare time variable
let heures = 0;
let minutes = 0;
let secondes = 0;

let timeout;

let isStop = true;
// Start button function
const start = () => {
    if (isStop) {
        isStop = false;
        startChrono();
    }
};
// Stop button function
const stop = () => {
    if (!isStop) {
        isStop = true;
        clearTimeout(timeout);
    }
};
// Declare time logic with a function
const startChrono = () => {
    if (isStop) return;

    secondes = parseInt(secondes);
    minutes = parseInt(minutes);
    heures = parseInt(heures);

    secondes++;

    if (secondes == 60) {
        minutes++;
        secondes = 0;
    }

    if (minutes == 60) {
        heures++;
        minutes = 0;
    }

    // Display >0<9
    if (secondes < 10) {
        secondes = "0" + secondes;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (heures < 10) {
        heures = "0" + heures;
    }
    chrono.textContent = `${heures}:${minutes}:${secondes}`;
    // Check every second
    timeout = setTimeout(startChrono, 1000);
};
// Reset button function
const reset = () => {
    chrono.textContent = "00:00:00";
    isStop = true;
    heures = 0;
    minutes = 0;
    secondes = 0;
    clearTimeout(timeout);
};
// Make clikable button
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
