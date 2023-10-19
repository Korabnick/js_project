document.addEventListener('DOMContentLoaded', function() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateButton = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');

    calculateButton.addEventListener('click', function() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // Преобразуем рост в метры

        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            const bmi = calculateBMI(weight, height);
            const category = getBMICategory(bmi);
            resultDiv.innerHTML = `Ваш BMI: ${bmi.toFixed(2)} (${category})`;
        } else {
            resultDiv.innerHTML = 'Пожалуйста, введите корректные значения веса и роста.';
        }
    });

    function calculateBMI(weight, height) {
        return weight / (height * height);
    }

    function getBMICategory(bmi) {
        if (bmi < 16.) {
            return 'Выраженный дефицит массы тела';
        } else if (bmi < 18.5) {
            return 'Недостаточная (дефицит) масса тела';
        } else if (bmi < 25) {
            return 'Норма';
        } else if (bmi < 30){
            return 'Избыточная масса тела (предожирение)';
        } else if (bmi < 35){
            return 'Ожирение первой степени';
        } else if (bmi < 40){
            return 'Ожирение второй степени';
        } else if (bmi > 40){
            return 'Ожирение третьей степени (морбидное)';
        }
    }
});
