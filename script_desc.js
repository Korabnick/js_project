document.addEventListener('DOMContentLoaded', function() {  // Начало добавления слушателя события "DOMContentLoaded". Это событие происходит, когда документ полностью загружен, включая структуру DOM и стили, но без ожидания загрузки внешних ресурсов, таких как изображения.
    const weightInput = document.getElementById('weight'); // Переменная получает ссылку на элемент с идентификатором 'weight' в DOM. Этот элемент представляет поле ввода для веса.
    const heightInput = document.getElementById('height'); // Тоже что и предыдущая, но для роста.
    const calculateButton = document.getElementById('calculate'); // Переменная получает ссылку на элемент с идентификатором 'calculate' в DOM. Этот элемент представляет кнопку "Рассчитать BMI".
    const resultDiv = document.getElementById('result'); // получает ссылку на элемент с идентификатором 'result' в DOM. Этот элемент будет использоваться для отображения результата вычисления BMI.

    calculateButton.addEventListener('click', function() { // Добавление слушателя события "click" на кнопку "Рассчитать BMI". Когда пользователь кликает на кнопку, будет вызвана анонимная функция, которая содержит код для расчета и отображения BMI.
        const weight = parseFloat(weightInput.value); // получает значение введенное пользователем в поле ввода для веса. Значение преобразуется в число, используя parseFloat(), чтобы обеспечить числовой тип данных.
        const height = parseFloat(heightInput.value) / 100; // Преобразуем рост в метры

        if (!isNaN(weight) && !isNaN(height) && height > 0) { // Условие проверяет, что введенные значения веса и роста являются числами (!isNaN() проверяет, что значение не является NaN) и что рост больше нуля.
            const bmi = calculateBMI(weight, height); // Вызов функции с передачей веса и роста в аргументах. Результат расчета BMI сохраняется в переменной bmi.
            const category = getBMICategory(bmi); // Вызов функции с передачей значения BMI в аргументе. Результат определения категории BMI сохраняется в переменной category.
            resultDiv.innerHTML = `Ваш BMI: ${bmi.toFixed(2)} (${category})`; // Установка содержимого элемента resultDiv с помощью свойства innerHTML. Это отображает результат расчета BMI и его категорию внутри элемента.
        } else {
            resultDiv.innerHTML = 'Пожалуйста, введите корректные значения веса и роста.';
        }
    });

    function calculateBMI(weight, height) { // Объявление функции с двумя параметрами: weight (вес) и height (рост).
        return weight / (height * height); // Вычисление и возврат индекса массы тела (BMI), используя переданные значения веса и роста.
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