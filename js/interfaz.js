export const formularioBuscar = document.querySelector("#formulario-buscar"),
  divBuscar = document.querySelector("#buscar"),
  divMensajes = document.querySelector("#mensajes"),
  divResultado = document.querySelector("#resultado");

export function mostrar(text) {
  divMensajes.innerHTML = text;
  divMensajes.classList.add("error");
  setTimeout(() => {
    divMensajes.innerHTML = "";
    divMensajes.classList.remove("error");
    formularioBuscar.reset();
  }, 3000);
}
