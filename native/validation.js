const loginForm = document.getElementById("login-form")
const emailInput = document.getElementById("email")
const emailError = document.getElementById("email-error")
const passwordError = document.getElementById("password-error")

// данные которые форма будет считать как верный аккаунт
const EMAIL = "test@gmail.com"
const PASSWORD = "12345678"

const emailRegex = /^\S+@\S+\.\S+$/
const MIN_PASSWORD_LENGTH = 8

const validateEmail = (email) => {
  if (email === "") {
    return "Введите адрес почты"
  }
  else if (!emailRegex.test(email)) {
    return "Введите корректный адрес почты"
  }

  return ""
}

const validatePassword = (password) => {
  if (password === "") {
    return "Введите пароль"
  }
  else if (password.length < MIN_PASSWORD_LENGTH) {
    return `Пароль должен быть не менее ${MIN_PASSWORD_LENGTH} символов`
  }

  return ""
}

function login(email, password) {
  if (email === EMAIL && password === PASSWORD) {
    alert("Ура вы вошли в аккаунт")
  } else {
    alert("Вы ввели неверную почту или пароль :(")
  }
}

function handleSubmit(event) {
  event.preventDefault()

  // входные данные
  const email = emailInput.value.trim()
  const password = passwordInput.value

  // валидация
  const emailErrorText = validateEmail(email)
  const passwordErrorText = validatePassword(password)

  // меняем текст ошибки
  emailError.textContent = emailErrorText
  passwordError.textContent = passwordErrorText

  // если ошибки есть то не делаем логин
  if (emailErrorText || passwordErrorText) {
    return
  }

  // входим в аккаунт
  login(email, password)
}

loginForm.addEventListener("submit", handleSubmit)