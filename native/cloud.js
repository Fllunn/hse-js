const footer = document.querySelector('footer');

// создаем див для облаков
const clouds = document.createElement('div')

footer.append(clouds)

// ширина окна
const windowInnerWidth = window.innerWidth

// случайное целое число в [min, max]
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// получаем путь до случайной картинки облака
function randomSrcCloud() {
  const num = getRandomIntInclusive(1, 4)
  return `public/icons/cloud/cloud${num}.png`
}

function createCloud() {
  const cloud = document.createElement('img')
  
  cloud.src = randomSrcCloud()
  cloud.draggable = false
  cloud.classList.add('cloud-icon')

  // случайная ширина облака
  cloud.style.width = `${getRandomIntInclusive(64, 128)}px`
  // случайная скорость облака
  cloud.style.animationDuration = `${getRandomIntInclusive(10, 30)}s`
  // случайная задержка
  cloud.style.animationDelay = `${getRandomIntInclusive(-30, -2)}s`
  // случайная расположение облака по вертикали
  cloud.style.top = `${getRandomIntInclusive(30, 70)}%`

  return cloud
}

let countCloud = 10

// меняем количество облаков в зависимости от ширины окна
if (windowInnerWidth >= 768 && windowInnerWidth < 1024) {
  countCloud = 15
} else if (windowInnerWidth >= 1024 && windowInnerWidth < 1440) {
  countCloud = 20
} else if (windowInnerWidth >= 1440) {
  countCloud = 30
}

for (let i = 0; i < countCloud; i++) {
  const cloud = createCloud()
  clouds.append(cloud)
}