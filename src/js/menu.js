// MENU RESPONSIVO

const $megaMenuList = document.querySelector(".mega-menu-list");
const $megaMenu = document.querySelector(".menu");
const $imageTamanho = document.querySelector(".imagem-capacete-medida-1");

console.log($megaMenuList);
console.log($megaMenu);

$megaMenu.addEventListener("click", () =>{
  $megaMenu.classList.toggle("-fechado");
  $megaMenuList.classList.toggle("active");
})


// MENU FILTRO LATERAL

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});


// REMOVE CLASSE DO TAMANHO DO CAPACETE PAGINA PRODUTO 
$imageTamanho.addEventListener("click", () =>{
  $imageTamanho.classList.toggle("imagem-capacete-medida-remove");
})