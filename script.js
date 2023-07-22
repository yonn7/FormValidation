const form = document.getElementById('form');
const names = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const names1 = document.getElementById('name').value;
  const email1 = document.getElementById('email').value;
  const password1 = document.getElementById('password').value;

  // validateInputs();
  if (validateInputs()) {
    alert(
      `Name: ${names1} ${'\n'}Email: ${email1} ${'\n'}Password: ${password1}`
    );
    form.submit();
  }
});

const validateInputs = () => {
  const nameValue = names.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let result = false;

  if (nameValue === '') {
    document.querySelector('.nameError').innerText = 'Name is required';
    result = false;
  } else {
    document.querySelector('.nameError').innerText = '';
    result = true;
  }

  if (emailValue === '') {
    document.querySelector('.emailError').innerText = 'Email is required';
    result = false;
  } else if (!re.test(String(emailValue).toLowerCase())) {
    document.querySelector('.emailError').innerText =
      'Please provide a proper email';
    result = false;
  } else {
    document.querySelector('.emailError').innerText = '';
    result = true;
  }

  if (passwordValue === '') {
    document.querySelector('.passwordError').innerText = 'Password is required';
    result = false;
  } else if (passwordValue.length < 5) {
    document.querySelector('.passwordError').innerText =
      'Password must be at least 5 character.';
    result = false;
  } else {
    document.querySelector('.passwordError').innerText = '';
    result = true;
  }

  if (!this.form.checkbox.checked) {
    document.querySelector('.checkError').innerText =
      'Need to agree to Terms & Privacy';
    return false;
  } else {
    document.querySelector('.checkError').innerText = '';
  }

  return result;
};
