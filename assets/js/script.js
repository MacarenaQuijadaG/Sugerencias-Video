// IIFE
const ReproductorModule = (function () {
    //funcion insertar
    function insertarElemento(url, id) {
      const iframe = document.createElement("iframe");
      iframe.setAttribute("src", url);
      document.getElementById(id).appendChild(iframe);
    }
  
    // Clase padre 
    class Multimedia {
      constructor(url) {
        let _url = url;
  
        //  obtener el atributo 
        this.getUrl = function () {
          return _url;
        };
  
        // cambio en la url del video
        this.setInicio = function () {
          return "Este método es para realizar un cambio en la URL del video";
        };
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
        const url = this.getUrl();
        insertarElemento(url, this.id);
      }
  
      // modificar el tiempo de inicio url
      setInicio(tiempo) {
        const url = `${this.getUrl()}?start=${tiempo}`;
        insertarElemento(url, this.id);
      }
    }
  
    // Devolver solo lo necesario (público)
    return {
      Reproductor: Reproductor,
    };
  })();
  
  // Instancia clase hija para música
  const reproductorMusica = new Reproductor(
    "",
    "musica"
  );

  reproductorMusica.playMultimedia();
  
  // Instancia clase hija para película
  const reproductorPelicula = new Reproductor(
    "https://www.youtube.com/embed/5PSNL1qE6VY",
    "peliculas"
  );
  reproductorPelicula.playMultimedia();

  
  
  // Instancia clase hija para serie
  const reproductorSerie = new Reproductor(
    "",
    "series"
  );
  reproductorSerie.playMultimedia();
  
  //  tiempo de inicio para instancia
  reproductorMusica.setInicio(30);