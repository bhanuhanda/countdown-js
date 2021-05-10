const countDown = () => {
    const timerDate = new Date("July 16, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const duration = timerDate - now;

    // Time logic
    const second = 1000; // 1 sec = 1000 millis 
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;

    // Time left calculator
    const daysNumber = Math.floor(duration / day);
    document.querySelector(".days").innerText = daysNumber;
    const hoursNumber = Math.floor((duration % day) / hour);
    document.querySelector(".hours").innerText = hoursNumber;
    const minutesNumber = Math.floor((duration % hour) / minute);
    document.querySelector(".minutes").innerText = minutesNumber;
    const secondsNumber = Math.floor((duration % minute) / second);
    document.querySelector(".seconds").innerText = secondsNumber;
}

setInterval(countDown, 1000);