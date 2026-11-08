const themeToggle = document.getElementById("theme-toggle")

const app = document.documentElement
const themeIcon = themeToggle.querySelector("img")

// проверяем последнюю выбранную пользователем тему
function chosenTheme() {
  if (localStorage.getItem("theme") === "dark") {
    app.classList.add("dark")

    themeIcon.src = "public/icons/white-balance-sunny.svg"
  }

  else if (localStorage.getItem("theme") === "light") {
    app.classList.add("light")
  }
}

// переключаем тему по клику
const themeChange = () => {
  if (!app.classList.contains("dark")) {
    app.classList.remove("light")
    app.classList.add("dark")
    localStorage.removeItem("theme", "light")
    localStorage.setItem("theme", "dark")

    // смена картинки
    themeIcon.src = "public/icons/white-balance-sunny.svg"
  } else {
    app.classList.remove("dark")
    app.classList.add("light")
    localStorage.removeItem("theme", "dark")
    localStorage.setItem("theme", "light")

    // смена картинки
    themeIcon.src = "public/icons/weather-night.svg"
  }
}

themeToggle.addEventListener("click", themeChange)
chosenTheme()