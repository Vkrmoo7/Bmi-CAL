function calculateBMI() {
  // Get the input values
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  // Validate input
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert('Please enter valid height and weight values.');
    return;
  }

  // Calculate BMI
  const bmi = weight / ((height / 100) ** 2); // height converted from cm to meters
  const bmiRounded = bmi.toFixed(1);

  // Update BMI result and meter
  document.getElementById('bmi-display').textContent = bmiRounded;
  const bmiMeter = document.getElementById('bmi-meter');
  bmiMeter.value = bmi;

  // Determine BMI category and update accordingly
  let bmiCategory = '';
  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = 'Normal weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory = 'Overweight';
  } else {
    bmiCategory = 'Obesity';
  }

  // Update the category display
  document.getElementById('bmi-category').textContent = bmiCategory;

  // Optionally add more visual feedback (e.g., change background color based on BMI category)
}
