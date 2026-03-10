const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const menu = document.querySelector('.menu')

menuOpen.addEventListener('click', () => {
    menu.classList.add('is-open')
    document.body.style.overflow = 'hidden'
})

menuClose.addEventListener('click', () => {
    menu.classList.remove('is-open')
    document.body.style.overflow = ''
})