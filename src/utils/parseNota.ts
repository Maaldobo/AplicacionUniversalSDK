// parseNota.ts
import { NotaFormateada, BloqueNota } from '../InterfaceNews/ArcticleInterface';

/**
 * Función auxiliar para limpiar etiquetas HTML simples.
 * @param html Cadena de texto con HTML.
 * @returns Texto sin etiquetas HTML.
 */
const cleanHTML = (html: string): string => {
  // Eliminamos etiquetas HTML con una expresión regular
  return html.replace(/<\/?[^>]+(>|$)/g, '');
};

/**
 * Parsea y limpia el JSON crudo de la API para devolver un objeto NotaFormateada.
 * @param raw JSON crudo obtenido de la API.
 * @returns Objeto formateado con la información de la nota.
 */
export const parseNota = (raw: any): NotaFormateada => {
  // Extraer campos principales
  const titulo: string = raw.headlines?.basic || '';
  const subtitulo: string = raw.subheadlines?.basic || '';
  const fechaRaw: string = raw.display_date || '';
  const fecha = new Date(fechaRaw).toLocaleString(); // Se puede personalizar el formato

  const imagenPrincipal: string = raw.promo_items?.basic?.url || '';

  // Determinar el contentRestriction
  let contentRestriction: 'libre' | 'restringido' = 'libre';
  if (raw.content_restrictions?.content_code) {
    contentRestriction = raw.content_restrictions.content_code === 'restringido'
      ? 'restringido'
      : 'libre';
  }
  
  // Procesar los content_elements para generar un arreglo de BloqueNota
  const contenido: BloqueNota[] = [];
  if (Array.isArray(raw.content_elements)) {
    raw.content_elements.forEach((element: any) => {
      // Procesamos sólo elementos de tipo 'text' o 'raw_html'
      if (element.type === 'text' || element.type === 'raw_html') {
        const textoLimpio = cleanHTML(element.content);
        if (textoLimpio.trim() !== '') {
          contenido.push({ tipo: 'texto', contenido: textoLimpio });
        }
      }
      // Se incluye un ejemplo para elementos de tipo 'image'
      else if (element.type === 'image') {
        // Se asume que 'element.content' es la URL y que puede haber un caption
        contenido.push({ tipo: 'imagen', url: element.content, caption: element.caption });
      }
    });
  }

  return {
    titulo,
    subtitulo,
    imagenPrincipal,
    fecha,
    contenido,
    contentRestriction,
  };
};

export default parseNota;
