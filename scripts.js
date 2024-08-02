document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';
    let diet = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        diet = 'Increase your intake of calorie-dense foods like nuts, seeds, and whole grains.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        diet = 'Maintain a balanced diet with a variety of foods from all food groups.';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        diet = 'Focus on portion control and reduce intake of high-calorie foods.';
    } else {
        category = 'Obesity';
        diet = 'Adopt a low-calorie diet with high fiber content. Consult a healthcare provider.';
    }

    document.getElementById('bmi-result').textContent = `Your BMI is ${bmi} (${category}).`;
    document.getElementById('diet-suggestions').textContent = diet;
});


document.querySelector('.hero .btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default button behavior
    document.getElementById('bmi-calculator').scrollIntoView({ behavior: 'smooth' });
});

