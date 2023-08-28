import Countdown from "./countdown.js";

const inauguracao = new Countdown('30 August 2023 23:59:59 GMT-0300');

setInterval(() => {
    const days = document.querySelector('.days .timer-value');
    days.textContent = inauguracao.Total.days < 10 ? '0' + inauguracao.Total.days : inauguracao.Total.days;
    
    const hours = document.querySelector('.hours .timer-value');
    hours.textContent = inauguracao.Total.hours < 10 ? '0' + inauguracao.Total.hours : inauguracao.Total.hours;
    
    const minutes = document.querySelector('.minutes .timer-value');
    minutes.textContent = hours.textContent = inauguracao.Total.minutes < 10 ? '0' + inauguracao.Total.minutes : inauguracao.Total.minutes;
    
    const seconds = document.querySelector('.seconds .timer-value');
    seconds.textContent = inauguracao.Total.seconds < 10 ? '0' + inauguracao.Total.seconds : inauguracao.Total.seconds;
}, 1000);
