function checkPalindrome() {
  const inputField = document.getElementById('text');
  const resultDiv = document.getElementById('result');
  const text = inputField.value.trim();

  if (!text) {
    resultDiv.innerText = 'Please enter something to check.';
    resultDiv.className = 'fail';
    return;
  }

  const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedText = cleanText.split('').reverse().join('');

  resultDiv.className = '';

  if (cleanText === reversedText) {
    resultDiv.innerText = `"${text}" is a palindrome.`;
    resultDiv.classList.add('success');
  } else {
    resultDiv.innerText = `"${text}" is not a palindrome.`;
    resultDiv.classList.add('fail');
  }
}
