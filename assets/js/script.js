// Construccion patron modulo
let iife = (function() {
    // Función privada para insertar el video en el documento HTML
    // CReo 2 Funciones, publico y otra privada (sumanumero, es un Obj.)
    function insertarElemento(url, id) {
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", url);
        document.getElementById(id).appendChild(iframe);
    }
    // Función pública para insertar el video con parámetros (url, id)
    // Retorno de las funciones públicas
    return {
        insertarElemento: (url, id) => insertarElemento(url, id)
          }
}) ();
//Llamado al método público de la función iife
// iife retorna un Objeto
console.log("Valor de iife: ", iife)
iife.insertarElemento(4,2);

  
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
          return "cambio en la URL del video";
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
 
  
  // Instancia clase hija para música
  const reproductorMusica = new Reproductor(
    "",
    "musica"
  );

  reproductorMusica.playMultimedia();
  
  // Instancia clase hija para película
  const reproductorPelicula = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY","peliculas");
  reproductorPelicula.playMultimedia();

  
  
  // Instancia clase hija para serie
  const reproductorSerie = new Reproductor("","series");
  reproductorSerie.playMultimedia();
  
  //  tiempo de inicio para instancia
  reproductorMusica.setInicio(30);
