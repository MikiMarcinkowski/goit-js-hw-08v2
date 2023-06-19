
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const onSubmit = event => {
  event.preventDefault();

  console.log({ email: email.value, message: message.value });

  event.currentTarget.reset();
};

form.addEventListener('submit', onSubmit);

const setData = throttle(() => {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
console.log(data)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}, 500);

form.addEventListener('input', setData);

const useLastData = () => {
  const lastPutedData = localStorage.getItem(STORAGE_KEY);
  if (lastPutedData) {
    const current = JSON.parse(lastPutedData);
    email.value = current.email;
    message.value = current.message;
   
  }
};
useLastData();