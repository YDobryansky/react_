//https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users

//document.addEventListener('DOMContentLoaded', () => {
  const formElem = document.querySelector('.login-form');
  const submitButton = document.querySelector('.submit-button');

  const formFields = Array.from(formElem.elements).filter(el => el.tagName === 'INPUT');

  // Відстежуємо зміни в полях форми для керування доступністю кнопки сабміту
  formFields.forEach(field => {
    field.addEventListener('input', () => {
      // Кнопка повинна бути enabled, якщо форма валідна
      submitButton.disabled = !formElem.reportValidity();
    });
  });

  // Відправка форми 
  formElem.addEventListener('submit', (event) => {
    event.preventDefault();

    // Зчитуєм дані з форми  в вигляді обєкту
    const formData = new FormData(formElem);
    const userData = Object.fromEntries(formData);

    // Відправляємо дані на сервер і обробляємо результат
    fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData), // Об'єкт даних перетворюється в рядок перед відправкою
    })
    // перевіряємо інфо що отримуємо після запиту
    .then(response => response.ok ? response.json() : Promise.reject('Error in saving user data'))
    .then(result => {
      alert(JSON.stringify(result)); // Тіло відповіді від сервера виводимо в alert як об'єкт
      formElem.reset();              // Після успішного збереження очищаємо поля форми
      submitButton.disabled = true;  // Відключаємо кнопку реєстрації
    })
    .catch(error => {
      //відловлюємо помилки коду...
      console.error('Failed to save user data', error);
      alert('Failed to save user data');
    });
  });
//});
