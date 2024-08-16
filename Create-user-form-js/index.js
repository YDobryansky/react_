const formElem = document.querySelector('.login-form')
const inputElems = document.querySelectorAll('.form-input')
const submitButton = document.querySelector('.submit-button')

// Відстежуємо зміни в полях форми для керування атрибутом disabled у кнопки
inputElems.forEach(field => {
  field.addEventListener('input', () => {
    // Кнопка повинна бути enabled, якщо форма валідна
    submitButton.disabled = !formElem.reportValidity()
  })
})

// Обробник події відправки форми
formElem.addEventListener('submit', (event) => {
  event.preventDefault()

  // Зчитування даних з форми
  const formData = new FormData(formElem)
  const userData = Object.fromEntries(formData)

  // Відправка даних на сервер
  fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData), // Перетворення об'єкта даних у рядок перед відправкою
  })
    .then(response => response.json()) // Проста обробка відповіді від сервера
    .then(result => {
      alert(JSON.stringify(result)) // Виведення відповіді від сервера у вигляді об'єкта
      formElem.reset()              // Очищення полів форми після успішного збереження
      submitButton.disabled = true  // Вимкнення кнопки реєстрації після очищення форми
    })
    .catch(error => {
      console.error('Failed to save user data', error)
    })
})
