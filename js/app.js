import * as UI from "./interfaz.js";
import Api from "./api.js";

UI.formularioBuscar.addEventListener("submit", (e) => {
  e.preventDefault();
  const artist = document.querySelector("#artista").value,
    cancion = document.querySelector("#cancion").value;
  if (artist === "" || cancion === "") {
    UI.mostrar("Error... Todos los campos son obligatorios");
  } else {
    const api = new Api(artist, cancion);
    UI.divResultado.textContent = "Cargando...";
    api.consultarAPI().then((data) => {
      if (data.lyrics) {
        UI.divResultado.textContent = "";
        const letra = data.lyrics;
        UI.divResultado.textContent = letra;
      } else {
        UI.divResultado.textContent = "";
        UI.mostrar("La cancion no existe, prueba con otra busqueda");
      }
    });
  }
});
