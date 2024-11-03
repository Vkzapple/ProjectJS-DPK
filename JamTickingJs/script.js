function updateClock() {
    let clockElement = document.getElementById('clock');
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }   


    let timeString = hours + ":" + minutes + ":" + seconds;
    clockElement.textContent = timeString;


    if (seconds % 2 === 0) {
        clockElement.style.borderColor = "red";
    } else {
        clockElement.style.borderColor = "blue";
    }
}

setInterval(updateClock, 1000);
updateClock();