document.addEventListener("DOMContentLoaded", () => {
    const timerElement = document.getElementById("countdown");
    let timeRemaining = 59 * 60 + 43; // 59 minutes and 43 seconds in seconds

    const updateTimer = () => {
        const hours = Math.floor(timeRemaining / 3600);
        const minutes = Math.floor((timeRemaining % 3600) / 60);
        const seconds = timeRemaining % 60;

        const formattedTime = 
            String(hours).padStart(2, '0') + ':' + 
            String(minutes).padStart(2, '0') + ':' + 
            String(seconds).padStart(2, '0');

        timerElement.textContent = formattedTime;

        if (timeRemaining > 0) {
            timeRemaining--;
        }
    };

    setInterval(updateTimer, 1000);
});
