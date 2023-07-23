const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  printValues();
});

const printValues = () => {
  const namesValue = document.getElementById('name').value.trim();
  const emailValue = document.getElementById('email').value.trim();
  const passwordValue = document.getElementById('password').value.trim();

  if (validateInputs()) {
    alert(
      `Name: ${namesValue} ${'\n'}Email: ${emailValue} ${'\n'}Password: ${passwordValue}`
    );
    form.submit();
  }
};

const setErrormessage = (fieldName, errorMessage) => {
  document.querySelector(fieldName).innerText = errorMessage;
};

const clearErrorMessage = (errorName) => {
  document.querySelector(errorName).innerText = '';
};

const validateNameField = () => {
  const namesValue = document.getElementById('name').value.trim();

  if (namesValue === '') {
    setErrormessage('.nameError', 'Name is Required');
    result = false;
  } else {
    clearErrorMessage('.nameError');
    result = true;
  }
  return result;
};

const validateEmail = () => {
  const emailValue = document.getElementById('email').value.trim();

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue === '') {
    setErrormessage('.emailError', 'Email is Required');
    result = false;
  } else if (!re.test(String(emailValue).toLowerCase())) {
    setErrormessage('.emailError', 'Please provide a proper email');
    result = false;
  } else {
    clearErrorMessage('.emailError');
    result = true;
  }
  return result;
};

const validatePassword = () => {
  const passwordValue = document.getElementById('password').value.trim();

  if (passwordValue === '') {
    setErrormessage('.passwordError', 'Password is Required');
    result = false;
  } else if (passwordValue.length < 5) {
    setErrormessage('.passwordError', 'Password Must be at least 5 characters');
    result = false;
  } else {
    clearErrorMessage('.passwordError');
    result = true;
  }
  return result;
};

const validateCheckbox = () => {
  if (!this.form.checkbox.checked) {
    setErrormessage('.checkError', 'Need to agree to Terms & Privacy');
    result = false;
  } else {
    clearErrorMessage('.checkError');
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
