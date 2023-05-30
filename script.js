const form = document.querySelector('[data-js="form"]');
const email = document.querySelector('[data-js="form-input"]');
const emailError = document.querySelector('[data-js="form-error"]');
const emailErrorMessage = document.querySelector(
  '[data-js="form-error-message"]'
);
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const isEmpty = (input) => input.length === 0;
const isIncorrectFormat = (input) => !emailRegExp.test(input);
const showError = (message) => {
  emailError.classList.add("cta-form__error--visible");
  emailErrorMessage.textContent = message;
};
const submit = (input) => {
  emailError.classList.remove("cta-form__error--visible");
  emailErrorMessage.textContent = "";
  alert(`Submitted email address: ${input}`);
  email.blur();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isEmpty(email.value)) {
    showError("Oops! Please add your email");
  } else if (isIncorrectFormat(email.value)) {
    showError("Oops! Please check your email");
  } else {
    submit(email.value);
    email.value = "";
  }
});
