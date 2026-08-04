const gradingForm = document.getElementById('gradingForm');
const gradingResult = document.getElementById('gradingResult');
const studentNameInput = document.getElementById('studentName');
const studentPrnInput = document.getElementById('studentPrn');

function calculateGrade(event) {
  if (event) {
    event.preventDefault();
  }

  const marks = Array.from(document.querySelectorAll('.subject-mark')).map((input) => Number(input.value) || 0);
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const maxMarks = marks.length * 100;
  const percentage = maxMarks > 0 ? (total / maxMarks) * 100 : 0;

  let grade = 'F';
  if (percentage >= 90) {
    grade = 'A+';
  } else if (percentage >= 80) {
    grade = 'A';
  } else if (percentage >= 70) {
    grade = 'B';
  } else if (percentage >= 60) {
    grade = 'C';
  } else if (percentage >= 50) {
    grade = 'D';
  }

  gradingResult.innerHTML = `
    <p><strong>Name:</strong> ${studentNameInput.value || 'Student'}</p>
    <p><strong>PRN:</strong> ${studentPrnInput.value || 'N/A'}</p>
    <p><strong>Total:</strong> ${total} / ${maxMarks}</p>
    <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
    <p><strong>Grade:</strong> ${grade}</p>
  `;
}

gradingForm.addEventListener('submit', calculateGrade);
calculateGrade();
