const reverseInput = document.getElementById('reverseInput');
const reverseButton = document.getElementById('reverseButton');
const reverseOutput = document.getElementById('reverseOutput');

const matchText = document.getElementById('matchText');
const matchPattern = document.getElementById('matchPattern');
const matchButton = document.getElementById('matchButton');
const matchOutput = document.getElementById('matchOutput');

const vowelInput = document.getElementById('vowelInput');
const vowelButton = document.getElementById('vowelButton');
const vowelOutput = document.getElementById('vowelOutput');

const emailInput = document.getElementById('emailInput');
const emailButton = document.getElementById('emailButton');
const emailOutput = document.getElementById('emailOutput');

function reverseString(text) {
  return text.split('').reverse().join('');
}

function stringMatch(text, pattern) {
  if (!pattern) return null;
  const regex = new RegExp(pattern, 'i');
  return text.match(regex);
}

function extractVowels(text) {
  const matches = text.match(/[aeiou]/gi);
  return matches ? matches.join('') : '';
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

reverseButton.addEventListener('click', () => {
  const text = reverseInput.value.trim();
  reverseOutput.textContent = text
    ? `Reversed string: ${reverseString(text)}`
    : 'Please enter text to reverse.';
});

matchButton.addEventListener('click', () => {
  const text = matchText.value;
  const pattern = matchPattern.value.trim();
  const match = stringMatch(text, pattern);

  if (!pattern) {
    matchOutput.textContent = 'Please enter a search pattern.';
    return;
  }

  matchOutput.textContent = match
    ? `Match found: ${match[0]} (index ${match.index})`
    : 'No match found.';
});

vowelButton.addEventListener('click', () => {
  const text = vowelInput.value;
  const vowels = extractVowels(text);
  vowelOutput.textContent = vowels
    ? `Vowels found: ${vowels}`
    : 'No vowels found in the text.';
});

emailButton.addEventListener('click', () => {
  const email = emailInput.value.trim();
  emailOutput.textContent = email
    ? validateEmail(email)
      ? 'Valid email address.'
      : 'Invalid email address.'
    : 'Please enter an email.';
});
