function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStop.setAttribute('disabled', '');
let timerId = null;

btnStart.addEventListener('click', () => {
    timerId = setInterval(() => {
        let colorNew = getRandomHexColor();
        document.body.style.background = colorNew;
    }, 1000);
    btnStop.removeAttribute('disabled');
    btnStart.setAttribute('disabled', '');
});

btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', '');
})