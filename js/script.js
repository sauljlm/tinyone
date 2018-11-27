// funcion para el menu
let btn = false;
const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');
function showMenu(){
    if (btn === false) {
        menu.style.display = "block";
        btn = true;
    }else if (btn === true) {
        menu.style.display = "none";
        btn = false;
    }
}
hamburguer.addEventListener('click', showMenu);
// fin funcion para el menu