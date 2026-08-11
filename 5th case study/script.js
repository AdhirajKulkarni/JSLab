const startBtn = document.getElementById('startBtn');
const resultDiv = document.getElementById('result');
const inputArea = document.getElementById('inputArea');

startBtn.addEventListener('click', () => {
  inputArea.innerHTML = `
    <label>How many elements? <input id="countInput" type="number" min="1" style="width:5rem" /></label>
    <button id="countSubmit">Next</button>
    <button id="cancelCount" style="margin-left:.5rem">Cancel</button>
    <div id="countError" style="color:crimson;margin-top:.5rem"></div>
  `;
  resultDiv.innerHTML = '';

  document.getElementById('countSubmit').addEventListener('click', () => {
    const countVal = Number(document.getElementById('countInput').value);
    const countErrorDiv = document.getElementById('countError');
    if (!countVal || countVal <= 0 || !Number.isInteger(countVal)) {
      countErrorDiv.textContent = 'Please enter a valid positive integer.';
      return;
    }
    renderValuesForm(countVal);
  });

  document.getElementById('cancelCount').addEventListener('click', () => {
    inputArea.innerHTML = '';
  });
});

function renderValuesForm(count) {
  let html = '<form id="valuesForm">';
  for (let i = 0; i < count; i++) {
    html += `<div style="margin-top:.5rem"><label>Value ${i + 1}: <input name="val${i}" type="number" required style="width:8rem" /></label></div>`;
  }
  html += `<div style="margin-top:.75rem"><button type="submit">Compute</button><button type="button" id="backBtn" style="margin-left:.5rem">Back</button></div>`;
  html += '<div id="valuesError" style="color:crimson;margin-top:.5rem"></div></form>';
  inputArea.innerHTML = html;

  document.getElementById('backBtn').addEventListener('click', () => {
    inputArea.innerHTML = '';
  });

  document.getElementById('valuesForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const items = [];
    for (let i = 0; i < count; i++) {
      const v = form[`val${i}`].value;
      const num = Number(v);
      if (Number.isNaN(num)) {
        document.getElementById('valuesError').textContent = 'Please enter valid numbers for all values.';
        return;
      }
      items.push({ index: i + 1, value: num });
    }

    const minObject = items.reduce((min, current) => (current.value < min.value ? current : min), items[0]);
    const maxObject = items.reduce((max, current) => (current.value > max.value ? current : max), items[0]);

    resultDiv.innerHTML = `
      <h2>Result</h2>
      <p><strong>Array of objects:</strong> <code>${JSON.stringify(items)}</code></p>
      <p><strong>Minimum value:</strong> ${minObject.value} (item ${minObject.index})</p>
      <p><strong>Maximum value:</strong> ${maxObject.value} (item ${maxObject.index})</p>
    `;
    inputArea.innerHTML = '';
  });
}
