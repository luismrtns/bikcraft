//ativar links do menu
const links = document.querySelectorAll('.header-menu a');
console.log(links)
function ativarLink(link){
  const url = location.href
  const href= link.href

  if(url.includes(href)){
    link.classList.add('ativo')
  }
}
links.forEach(ativarLink)

//ativar items do orçamento
const parametros= new URLSearchParams(location.search) // retorna uma array com os parametros de busca

function ativarProduto(parametro){
  const elemento = document.getElementById(parametro)
  if(elemento){
  elemento.checked = true
  }
  console.log(elemento)
}
parametros.forEach(ativarProduto)
console.log(parametros)
// const params = new URLSearchParams(location.search);
//
// params.forEach((item) => {
//   const element = document.querySelector(`[type="radio"][value="${item}"]`);
//   if (element) element.checked = true;
// });
//
// const dts = document.querySelectorAll("dt");
//
// dts.forEach((dt) => {
//   dt.addEventListener("click", () => {
//     dt.parentElement.classList.toggle("ativa");
//   });
// });
//
// const links = document.querySelectorAll(".header-menu a");
//
// links.forEach((link) => {
//   if (location.href.includes(link.href)) {
//     link.classList.add("ativo");
//   }
// });
//
// const galeria = document.querySelectorAll(".bicicleta-imagens img");
// const galeriaContainer = document.querySelector(".bicicleta-imagens");
//
// galeria.forEach((img) => {
//   img.addEventListener("click", () => {
//     if (matchMedia("(min-width: 1000px)").matches) {
//       galeriaContainer.prepend(img);
//     }
//   });
// });
//
// // if (window.SimpleAnime) new SimpleAnime();
