const startButton = document.getElementById('start-timer');
const activeTimers = document.querySelector('.active-timers');
const alertSound = document.getElementById('alert-sound');

startButton.addEventListener('click', () => {
    const hours = parseInt(document.getElementById('hours').value, 10) || 0;
    const minutes = parseInt(document.getElementById('minutes').value, 10) || 0;
    const seconds = parseInt(document.getElementById('seconds').value, 10) || 0;

    const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalTimeInSeconds > 0) {
        // Create a new timer element and add it to the active timers section
        const timerElement = document.createElement('div');
        timerElement.classList.add('timer'); // Apply CSS styles
        activeTimers.appendChild(timerElement);

        // Start the timer and add it to the timers array/object
        const timer = setInterval(() => {
            if (totalTimeInSeconds === 0) {
                // Timer has ended
                clearInterval(timer);
                timerElement.classList.add('timer-ended'); // Apply CSS styles
                alertSound.play();
            } else {
                // Update timer display
                totalTimeInSeconds--;
                timerElement.textContent = formatTime(totalTimeInSeconds);
            }
        }, 1000);
    }
});

function formatTime(seconds) {
   
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
    
        const formattedHours = String(hours).padStart(2, '0'); // Ensure 2-digit format
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
    

timerElement.textContent = formatTime(totalTimeInSeconds);
