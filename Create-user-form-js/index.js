const formElem = document.querySelector('.login-form');
const inputElems = document.querySelectorAll('.form-input');
const submitButton = document.querySelector('.submit-button');

// Відстежуємо зміни в полях форми для керування атрибутом disabled у кнопки
formFields.forEach(field => {
  field.addEventListener('input', () => {
    // Кнопка повинна бути enabled, якщо форма валідна
    submitButton.disabled = !formElem.reportValidity();
  });
});

// Обробник події відправки форми
formElem.addEventListener('submit', event => {
  event.preventDefault();

  // Зчитування даних
  const formData = new FormData(formElem);
  const userData = Object.fromEntries(formData);

  // Відправляємо дані на сервер і обробляємо результат одним промісом
  fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData), // Об'єкт даних перетворюється в рядок перед відправкою
  })
    .then(response > response.json())
    .then(result => {
      alert(JSON.stringify(result)); // Тіло відповіді від сервера виводимо в alert як об'єкт
      formElem.reset(); // Після успішного збереження очищаємо поля форми
      submitButton.disabled = true; // Відключаємо кнопку реєстрації
    })
    .catch(error => {
      console.error('Failed to save user data', error);
    });
});
