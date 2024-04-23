// location
location.assign("https://rollingcodeschool.com");

location.replace("https://rollingcodeschool.com");

location.reload(); //recarga la página

location.href = "https://google.com";

const recargar = () => {
  location.reload();
};

const memoryTest = () => {
  if (navigator.deviceMemory < 4) {
    console.warn("Memoria insuficiente");
  }
};

const dondeEstoy = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;

        console.log(`Latitud: ${latitud}, Longitud:${longitud}`);
      },
      (error) => {
        console.error("Error de ubicación", error);
      }
    );
  } else {
    console.error("Geolocalización no es soportada en el navegador");
  }
};

//history
let cantidadPaginas = 0;
if (cantidadPaginas < history.length) {
  history.go(1);
  cantidadPaginas++;
}

//Funciones de tiempo

let intervalo = null;

const relojBom = () => {
  intervalo = setInterval(() => {
    let hora = new Date().getHours();
    let minutos = new Date().getMinutes();
    let segundos = new Date().getSeconds();

    let tiempo = `${hora}:${minutos}:${segundos}`;

    document.body.innerText = "";
    document.write(`<h3>${tiempo}</h3>`);
  }, 1000);
};

const detenerReloj = () => {
  clearInterval(intervalo);
};

const redirigir = () => {
  document.write("<h3>Redireccionando a la página principal...</h3>");
  setTimeout(() => {
    location.assign("https://google.com");
  }, 3000);
};
