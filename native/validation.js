const loginForm = document.getElementById("login-form")
const emailInput = document.getElementById("email")
const emailError = document.getElementById("email-error")
const passwordError = document.getElementById("password-error")

// данные которые форма будет считать как верный аккаунт
const EMAIL = "example@gmail.com"
const PASSWORD = "12345678"

const emailRegex = /^\S+@\S+\.\S+$/
const MIN_PASSWORD_LENGTH = 8

const rememberCheckbox = document.getElementById("remember")

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

// если стоит галочка запомнить меня то сохраняем почту в localstorage
function saveEmail(email) {
  if (rememberCheckbox.checked) {
    localStorage.setItem("email", email)
  } else {
    localStorage.removeItem("email")
  }
}

function login(email, password) {
  if (email === EMAIL && password === PASSWORD) {
    saveEmail(email)

    alert("Ура вы вошли в аккаунт")
  } else {
    alert("Вы ввели неверную почту или пароль :(")
  }
}

// загрузка почты в инпут почты если она есть в localstorage
function loadEmail() {
  const emailFromStorage = localStorage.getItem("email")

  if (emailFromStorage) {
    emailInput.value = emailFromStorage
    rememberCheckbox.checked = true
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

loadEmail()