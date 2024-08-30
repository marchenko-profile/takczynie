// Пароли
const firstPassword = "3178323";
const secondPassword = "Delta12345";

// Получение элементов
const loginForm = document.getElementById('login-form');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const loginContainer = document.getElementById('login-container');
const timerContainer = document.getElementById('timer-container');
const timerElement = document.getElementById('timer');
const timerMessage = document.getElementById('timer-message');
const secondPasswordContainer = document.getElementById('second-password-container');
const secondPasswordForm = document.getElementById('second-password-form');
const secondPasswordInput = document.getElementById('second-password');
const secondErrorMessage = document.getElementById('second-error-message');
const formContainer = document.getElementById('form-container');
const inviteForm = document.getElementById('invite-form');

// Модальное окно
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const closeModal = document.getElementById('close-modal');

// Обработчик первой формы входа
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPassword = passwordInput.value.trim();

    if (inputPassword === firstPassword) {
        loginContainer.style.display = 'none';
        timerContainer.style.display = 'block';

        let timeLeft = 60; // Таймер на 60 секунд
        const timerInterval = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(timerInterval);
                timerContainer.style.display = 'none';
                secondPasswordContainer.style.display = 'block';
            }
        }, 1000);
    } else {
        errorMessage.style.display = 'block';
    }
});

// Обработчик второй формы входа
secondPasswordForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputSecondPassword = secondPasswordInput.value.trim();

    if (inputSecondPassword === secondPassword) {
        secondPasswordContainer.style.display = 'none';
        formContainer.style.display = 'block';
    } else {
        secondErrorMessage.style.display = 'block';
    }
});

// Обработчик формы приглашения
inviteForm.addEventListener('submit', function(e) {
    e.preventDefault();
    showModal("Dobrze, że nie wybrałaś Nie 😊 ");
    setTimeout(() => {
        location.reload(); // Обновление страницы
    }, 2000); // Задержка перед обновлением страницы
});

// Функция показа модального окна
function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = 'block';
}

// Закрытие модального окна
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
