const recargar = () => {
  location.reload();
};

const memoryTest = () => {
  if (navigator.deviceMemory < 16) {
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
