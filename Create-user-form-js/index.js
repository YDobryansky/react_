//https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users

//document.addEventListener('DOMContentLoaded', () => {
  const formElem = document.querySelector('.login-form');
  const submitButton = document.querySelector('.submit-button');

  const formFields = Array.from(formElem.elements).filter(el => el.tagName === 'INPUT');

  // Відстежуємо зміни в полях форми для керування атрибутом disabled у кнопки
  formFields.forEach(field => {
    field.addEventListener('input', () => {
      // Кнопка повинна бути enabled, якщо форма валідна
      submitButton.disabled = !formElem.reportValidity();
    });
  });

<<<<<<< HEAD
  // Обробник події відправки форми
=======
  // Відправка форми 
>>>>>>> 3281d4f2baeff8bc858f721cd5e941014d0ded75
  formElem.addEventListener('submit', (event) => {
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
<<<<<<< HEAD
=======
    // перевіряємо інфо що отримуємо після запиту
>>>>>>> 3281d4f2baeff8bc858f721cd5e941014d0ded75
    .then(response => response.ok ? response.json() : Promise.reject('Error in saving user data'))
    .then(result => {
      alert(JSON.stringify(result)); // Тіло відповіді від сервера виводимо в alert як об'єкт
      formElem.reset();              // Після успішного збереження очищаємо поля форми
      submitButton.disabled = true;  // Відключаємо кнопку реєстрації
    })
    .catch(error => {
<<<<<<< HEAD
=======
      //відловлюємо помилки коду...
>>>>>>> 3281d4f2baeff8bc858f721cd5e941014d0ded75
      console.error('Failed to save user data', error);
      alert('Failed to save user data');
    });
  });
<<<<<<< HEAD
});
=======
//});
>>>>>>> 3281d4f2baeff8bc858f721cd5e941014d0ded75
