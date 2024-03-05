// Construccion patron modulo
let iife = (function() {
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
}) ();
//Llamado al método público de la función iife
// iife retorna un Objeto
console.log("Valor de iife: ", iife);
//iife.insertarElemento(4,2);





// Clase padre 
class Multimedia {
    constructor(url) {
      this.url = url;

    }

      // cambio en la url del video
      setInicio() {
        return "cambio en la URL del video";
      }
}
  // Clase hija 
  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      this.id = id;
    }

    // reproducir multimedia
    playMultimedia() {
        iife.publica(this.url, this.id)
    }

    // modificar el tiempo de inicio url
    setInicio(tiempo) {
      this.id.setAttribute("src", `${this.url}?start=${tiempo}`);
    }
  }

const idMusica = document.getElementById("musica");
let musica = new Reproductor("",idMusica);
musica.playMultimedia();

const idPelicula = document.getElementById("peliculas");
let pelicula = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY",idPelicula);
pelicula.playMultimedia();
pelicula.setInicio(20);

const idSerie = document.getElementById("series");
let serie = new Reproductor("",idSerie);
serie.playMultimedia();
