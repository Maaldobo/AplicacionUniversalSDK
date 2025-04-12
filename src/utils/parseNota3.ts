// parseNota.ts
import { NotaFormateada, BloqueNota } from '../InterfaceNews/types';

export const parseNota = (rawJson: any): NotaFormateada => {
// Extraer campos principales
const titulo = rawJson.headlines?.basic || '';
const subtitulo = rawJson.subheadlines?.basic || '';

// Se utiliza display_date o created_date para la fecha y se formatea a una cadena legible.
const fechaRaw = rawJson.display_date || rawJson.created_date;
const fechaObj = new Date(fechaRaw);
//const fecha = fechaObj.toLocaleString('es-MX');

const fecha = fechaObj.toLocaleString('es-MX', {
    timeZone: 'America/Mexico_City',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

// Construir la URL de la imagen principal con el formato requerido:
// Ejemplo: "https://www.eluniversal.com.mx/resizer/v2/<imagen>.jpg?auth=...&smart=true&width=482&height=276"
const imagenPrincipal = `https://www.eluniversal.com.mx${rawJson.promo_items.basic.additional_properties.resizeUrl}&smart=true&width=482&height=276`;

// Procesar el array de elementos de contenido sin remover las etiquetas HTML.
const contentElements = rawJson.content_elements || [];
const contenido: BloqueNota[] = contentElements.reduce((acc: BloqueNota[], element: any) => {
  if (element.type === 'text') {
    // Conservamos el contenido HTML original
    if (/Lee también/i.test(element.content)) {
      acc.push({ tipo: 'leetambien', contenido: element.content });
    } else {
      acc.push({ tipo: 'texto', contenido: element.content });
    }
  } else if (element.type === 'image') {
    // Construir la URL de la imagen para los bloques de imagen
    const imageUrl = element.url
      ? element.url
      : element.additional_properties?.resizeUrl
        ? `https://www.eluniversal.com.mx${element.additional_properties.resizeUrl}`
        : '';
    const caption = element.caption || '';
    if (imageUrl) {
      acc.push({ tipo: 'imagen', url: imageUrl, caption });
    }
  }
  return acc;
}, []);

// Determinar la restricción de contenido
const contentRestriction =
  rawJson.content_restrictions?.content_code === "libre" ? "libre" : "restringido";

  console.log('imagen principal', { imagenPrincipal });
return {
  titulo,
  subtitulo,
  imagenPrincipal,
  fecha,
  contenido,
  contentRestriction,
};
};
