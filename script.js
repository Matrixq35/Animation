// script.js

// Массив фраз для загрузочного экрана
const phrases = [
    "Загрузка...",
    "Инициализация данных...",
    "Подготовка интерфейса...",
    "Готово!"
];

// Находим элемент для отображения текста
const loaderText = document.getElementById('loader-text');

// Функция для показа фраз с задержкой
let currentIndex = 0;

function showNextPhrase() {
    if (currentIndex < phrases.length) {
        // Обновляем текст
        loaderText.textContent = phrases[currentIndex];

        // Перезапускаем анимацию
        loaderText.style.animation = 'none'; // Сбрасываем анимацию
        void loaderText.offsetWidth;        // Трюк для перезапуска анимации
        loaderText.style.animation = null; // Возвращаем анимацию

        // Переходим к следующей фразе
        currentIndex++;

        // Вызываем функцию снова через 3 секунды
        setTimeout(showNextPhrase, 3000);
    } else {
        // Удаляем загрузочный экран после завершения
        document.querySelector('.loader-screen').style.display = 'none';
    }
}

// Запускаем процесс
showNextPhrase();