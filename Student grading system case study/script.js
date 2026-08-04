const password = document.getElementById('password');
const length = document.getElementById('length');
const upper = document.getElementById('upper');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const message = document.getElementById('message');

password.addEventListener('keyup', function () {
  const value = password.value;

  if (value.length >= 8) {
    length.className = 'valid';
    length.innerHTML = '✅ At least 8 characters';
  } else {
    length.className = 'invalid';
    length.innerHTML = '❌ At least 8 characters';
  }

  if (/[A-Z]/.test(value)) {
    upper.className = 'valid';
    upper.innerHTML = '✅ At least one uppercase letter';
  } else {
    upper.className = 'invalid';
    upper.innerHTML = '❌ At least one uppercase letter';
  }

  if (/[0-9]/.test(value)) {
    number.className = 'valid';
    number.innerHTML = '✅ At least one number';
  } else {
    number.className = 'invalid';
    number.innerHTML = '❌ At least one number';
  }

  if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    symbol.className = 'valid';
    symbol.innerHTML = '✅ At least one special character';
  } else {
    symbol.className = 'invalid';
    symbol.innerHTML = '❌ At least one special character';
  }
});

function validateForm() {
  const pass = password.value;
  const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  if (regex.test(pass)) {
    message.textContent = 'Login Successful!';
    return true;
  } else {
    message.textContent = 'Password does not meet all requirements.';
    return false;
  }
}

document.getElementById('toggle').onclick = function () {
  if (password.type === 'password') {
    password.type = 'text';
    this.innerHTML = '🙈';
  } else {
    password.type = 'password';
    this.innerHTML = '👁';
  }
};
