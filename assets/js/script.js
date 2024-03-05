// Construccion patron modulo
//PUNTO 1
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
    //console.log("Valor de iife: ", iife);
    //iife.insertarElemento(4,2);

//PUNTO 2
    // Clase padre 
    class Multimedia {
        constructor(url) {
        this._url = url;

        }

//PUNTO 2 * CLOSURES
    
        //Getter
        get url() {
            return this._url;
        }

        // Setter
        set url(newUrl) {
            this._url = newUrl;
        }

      // cambio en la url del video
      setInicio() {
        return "cambio en la URL del video";
      }
}
// PUNTO 3
  // Clase hija 
  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      this.id = id;
    }

        // Getter
        get id() {
            return this._id;
        }

        // Setter
        set id(id) {
            this._id = id;
        }
 // PUNTO 5
    // reproducir multimedia
    playMultimedia() {
        iife.publica(this.url, this.id)
    }
 //PUNTO 6
    // modificar el tiempo de inicio url
    setInicio(tiempo) {
      this.id.setAttribute("src", `${this.url}?start=${tiempo}`);
    }
  }

// PUNTO 4
    //instancia de la clase
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
