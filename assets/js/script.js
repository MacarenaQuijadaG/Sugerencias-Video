// Construccion patron modulo
//PUNTO 1
let iife = (function () {
  // Función privada para insertar el video en el documento HTML
  // CReo 2 Funciones, publico y otra privada (sumanumero, es un Obj.)
  function privada(url, id) {
    id.setAttribute("src", url);

  }
  // Función pública para insertar el video con parámetros (url, id)
  // Retorno de las funciones públicas
  return {
    publica: (url, id) => privada(url, id)
  }
})();

//PUNTO 2
// Clase padre 
const Multimedia = (() => {
  //CLOSURES
  //se crea variable que se le pasará el closure
  let url;
  class Multimedia {
    //constructor de la clase con un parámetro
    constructor(_url) {
      url = _url;
    }
    get _url() {
      return url;
    }
    setInicio(tiempo) {
      url = `${this._url}?start=${tiempo}`;
      return "Este método es para realizar un cambio en la URL del video";
    }
  }
  return Multimedia;
})();

// PUNTO 3
// Clase hija de Multimedia
class Reproductor extends Multimedia {
  constructor(url, id) {
    //hereda del padre el url
    super(url);
    this.id = id;
  }

  // PUNTO 5
  // reproducir multimedia
  playMultimedia() {
    iife.publica(this._url, this.id)
  }
  //PUNTO 6
  // modificar el tiempo de inicio url
  setInicio(tiempo) {
    this.id.setAttribute("src", `${this._url}?start=${tiempo}`);
  }
}

// PUNTO 4
//instancia de la clase
//musica
const idMusica = document.getElementById("musica");
let musica = new Reproductor("https://www.youtube.com/embed/jfKfPfyJRdk?si=tYnUYAA0QZf_cxtu", idMusica);
musica.playMultimedia();

//pelicula
const idPelicula = document.getElementById("peliculas");
let pelicula = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", idPelicula);
pelicula.playMultimedia();
//llama al método de la función de la clase padre playMultimedia
pelicula.setInicio(20);
// se inicia la película en el segundo 20

//serie
const idSerie = document.getElementById("series");
let serie = new Reproductor("https://www.youtube.com/embed/ymsrEDXe97o?si=vbS-d-F9n__pq9Nc", idSerie);
serie.playMultimedia();
