const form = document.getElementById('form');
const MIN_PASSWORD_LENGTH = 5;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const namesValue = document.getElementById('name').value.trim();
  const emailValue = document.getElementById('email').value.trim();
  const passwordValue = document.getElementById('password').value.trim();

  if (validateInputs()) {
    printValues(namesValue, emailValue, passwordValue);
    form.submit();
  }
});

const printValues = (namesValue, emailValue, passwordValue) => {
  alert(
    `Name: ${namesValue} ${'\n'}Email: ${emailValue} ${'\n'}Password: ${passwordValue}`
  );
};

const setErrormessage = (fieldName, errorMessage) => {
  document.getElementById(fieldName).innerText = errorMessage;
};

const clearErrorMessage = (errorName) => {
  document.getElementById(errorName).innerText = '';
};

const validateNameField = () => {
  let result = true;

  const namesValue = document.getElementById('name').value.trim();

  if (namesValue === '') {
    setErrormessage('nameError', 'Name is Required');
    result = false;
  } else {
    clearErrorMessage('nameError');
    result = true;
  }
  return result;
};

const validateEmail = () => {
  let result = true;

  const emailValue = document.getElementById('email').value.trim();

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue === '') {
    setErrormessage('emailError', 'Email is Required');
    result = false;
  } else if (!re.test(String(emailValue).toLowerCase())) {
    setErrormessage('emailError', 'Please provide a proper email');
    result = false;
  } else {
    clearErrorMessage('emailError');
    result = true;
  }
  return result;
};

const validatePassword = () => {
  let result = true;

  const passwordValue = document.getElementById('password').value.trim();

  if (passwordValue === '') {
    setErrormessage('passwordError', 'Password is Required');
    result = false;
  } else if (passwordValue.length < MIN_PASSWORD_LENGTH) {
    setErrormessage('passwordError', 'Password Must be at least 5 characters');
    result = false;
  } else {
    clearErrorMessage('passwordError');
    result = true;
  }
  return result;
};

const validateCheckbox = () => {
  let result = true;

  if (!this.form.checkbox.checked) {
    setErrormessage('checkError', 'Need to agree to Terms & Privacy');
    result = false;
  } else {
    clearErrorMessage('checkError');
    result = true;
  }
  return result;
};

const validateInputs = () => {
  let result = false;

  const isNameValid = validateNameField();
  const isEmailValid = validatePassword();
  const isPasswordValid = validateEmail();
  const isCheckedbox = validateCheckbox();

  return isNameValid && isEmailValid && isPasswordValid && isCheckedbox;
};
