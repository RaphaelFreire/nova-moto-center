const $megaMenuList = document.querySelector(".mega-menu-list");
const $megaMenu = document.querySelector(".menu");

console.log($megaMenuList);
console.log($megaMenu);

$megaMenu.addEventListener("click", () =>{
  $megaMenu.classList.add("-fechado");

  $megaMenuList.classList.add("active");
})