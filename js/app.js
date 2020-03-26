import * as UI from "./interfaz.js";

UI.formularioBuscar.addEventListener("submit", (e) => {
  e.preventDefault();

  const artist = document.querySelector("#artista").value,
    cancion = document.querySelector("#cancion").value;

  if (artist === "" || cancion === "") {
    UI.divMensajes.innerHTML = "Error... Todos los campos son obligatorios";
    UI.divMensajes.classList.add("error");
    setTimeout(() => {
      UI.divMensajes.innerHTML = "";
      UI.divMensajes.classList.remove("error");
    }, 3000);
  } else {
  }
});
