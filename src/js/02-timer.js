import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    inputDate: document.querySelector('input#datetime-picker'),
    btnStart: document.querySelector('[data-start]'),
    day: document.querySelector('[data-days]'),
    hour: document.querySelector('[data-hours]'),
    minute: document.querySelector('[data-minutes]'),
    second: document.querySelector('[data-seconds]'),
}

let userData;
refs.btnStart.setAttribute('disabled', true);
const timer = {
    intervalId: null,
    // isActive: falce,
    start() {
        // if (this.isActive) {
        //     return;
        // }
        // const startTime = Date.now();
        // this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = userData - currentTime;
            // console.log(deltaTime);
            timeComponents = convertMs(deltaTime);
            const { days, hours, minutes, seconds } = timeComponents;
            refs.day.textContent = days;
            refs.hour.textContent = hours;
            refs.minute.textContent = minutes;
            refs.second.textContent = seconds;
            refs.inputDate.setAttribute('disabled', '');
            if (deltaTime < 1000) {
                Notiflix.Notify.success('Timer is over');
                refs.inputDate.removeAttribute('disabled');
                clearInterval(this.intervalId);
            }
        }, 1000);

        refs.btnStart.setAttribute('disabled', true);
    },

    // stop() {
    //     clearInterval(this.intervalId);
    //     this.isActive = false;
    // }
};
// timer.start();

function pad(value) {
    return String(value).padStart(2, '0')
}


const calendarEl = flatpickr(refs.inputDate, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        if (selectedDates[0] < Date.now()) {
            Notiflix.Notify.failure('Please choose a date in the future');
            refs.btnStart.setAttribute('disabled', true);
        } else {
            userData = selectedDates[0].getTime();
            refs.btnStart.removeAttribute('disabled');

            refs.btnStart.addEventListener('click', timer.start);
        }
    },
});

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

