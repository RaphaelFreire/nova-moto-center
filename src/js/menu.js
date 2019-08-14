const $megaMenuList = document.querySelector(".mega-menu-list");
const $megaMenu = document.querySelector(".menu");

console.log($megaMenuList);
console.log($megaMenu);

$megaMenu.addEventListener("click", () =>{
  $megaMenu.classList.toggle("-fechado");
  $megaMenuList.classList.toggle("active");
})