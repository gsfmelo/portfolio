const ativarMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('header .navegacao-primaria')

ativarMenu.addEventListener('click', () => {
    ativarMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})

