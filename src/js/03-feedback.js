const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', function (event) {
  const data = {
    email: event.target.value,
    message: event.target.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(data));
});
