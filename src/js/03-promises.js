import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();

  const { delay, step, amount } = event.currentTarget;
  let delayInput = Number(delay.value);
  let stepInput = Number(step.value);
  let amountInput = Number(amount.value);

  if (delayInput < 0 || stepInput < 0 || amountInput < 0) {
    Notiflix.Notify.warning('All your date more than zero');
  };

  for (i = 0; i < amountInput; i += 1) {
    createPromise(i, delayInput)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayInput += stepInput;
    event.currentTarget.reset();
  };
}



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);

  })
}

