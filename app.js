const menuButton = document.getElementById('menu')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

menuButton.addEventListener('click',toggleButton)