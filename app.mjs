// Importación
import { noAuth } from "./noauth.min.mjs";

// Nuevo objeto de la clase noAuth
const no = new noAuth();
await no.auth();

// Llamado al API
let response = await no.api(
  "https://api.spotify.com/v1/browse/new-releases?country=CO&limit=5&offset=0"
);

// Respuesta del API
console.log(response);

// Verifica que la estructura de datos exista
if (response && response.albums && response.albums.items) {
  // Accede al array de items
  const newReleases = response.albums.items;

  // Itera sobre cada item y accede a sus propiedades
  newReleases.forEach((release, index) => {
    console.log(`Release ${index + 1}:`);
    console.log(release); // Mostrar todo el objeto
    console.log("---");
  });
} else {
  console.log("No new releases found or response structure is different.");
}
