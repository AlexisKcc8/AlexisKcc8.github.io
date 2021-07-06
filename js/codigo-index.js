const btn_fondo = document.querySelector(".btn_efectoOscuro");
const fondo = document.querySelector(".fondo");

btn_fondo.addEventListener("click",()=>{
	fondo.classList.toggle("fondoOscuro");
});
