const inicio = document.querySelector('.inicio')
const alta = document.querySelector('.alta')
const base = document.querySelector('.base')

alta.style.display = 'none'
base.style.display = 'none'

const altaButton = document.querySelector('#alta')
const baseButton = document.querySelector('#base')
const homeButton = document.querySelector('#home')

altaButton.addEventListener('click', () => {
  inicio.style.display = 'none'
  alta.style.display = 'block'
})

baseButton.addEventListener('click', () => {
  inicio.style.display = 'none'
  base.style.display = 'block'
})

homeButton.addEventListener('click', () => {
  inicio.style.display = 'block'
  alta.style.display = 'none'
  base.style.display = 'none'
})

const baseDatos = [];