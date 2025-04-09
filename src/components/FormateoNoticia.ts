// ArticleLogic.ts
// Este módulo exporta la interfaz y la función lógica para transformar el JSON en el objeto ArticuloFormateado

import { ArticuloFormateado, ContenidoItem } from "../InterfaceNews.ts/ArcticleInterface";

// Interfaz para cada elemento de contenido (ya sea párrafo o imagen)

  // Función utilitaria para completar la URL de la imagen
  const completeImageUrl = (url: string): string => {
    // Agregar el dominio base si es necesario
    let completeUrl = url.startsWith('http')
      ? url
      : `https://www.eluniversal.com.mx${url}`;
    // Determinar si se debe usar & o ? para anexar parámetros
    const connector = completeUrl.includes('?') ? '&' : '?';
    // Agregar parámetros si no existen
    if (!completeUrl.includes('smart=true')) {
      completeUrl += `${connector}smart=true&width=1100&height=666`;
    }
    return completeUrl;
  };
  
  // Función que transforma el JSON en un objeto de tipo ArticuloFormateado
  export const parseArticle = (json: any): ArticuloFormateado => {
    // Extraer el título, subtítulo y autor de las propiedades esperadas
    const titulo = json.headlines?.basic || '';
    const subtitulo = json.subheadlines?.basic || '';
    const autor =
      json.credits?.by && json.credits.by.length > 0
        ? json.credits.by[0].name
        : '';
  
    // Array único que contendrá párrafos e imágenes intercalados
    const contenido: ContenidoItem[] = [];
  
    // Recorrer los content_elements y crear los items de contenido
    if (json.content_elements && Array.isArray(json.content_elements)) {
      json.content_elements.forEach((element: any, index: number) => {
        // Si es párrafo (puede venir como 'text' o 'raw_html')
        if (element.type === 'text' || element.type === 'raw_html') {
          contenido.push({
            type: 'parrafo',
            order: index,
            content: element.content
          });
        }
        // Si es imagen
        else if (element.type === 'image') {
          const url = element.additional_properties?.fullSizeResizeUrl || '';
          if (url) {
            contenido.push({
              type: 'imagen',
              order: index,
              content: '', // No se necesita contenido textual
              url: completeImageUrl(url)
            });
          }
        }
      });
    }
  
    // Ejemplo: Se puede obtener la imagen principal desde promo_items (si existe)
    if (json.promo_items && json.promo_items.basic) {
      const promoImg = json.promo_items.basic;
      const url = promoImg.additional_properties?.fullSizeResizeUrl;
      if (url) {
        // Se asigna un order menor para que aparezca al principio (por ejemplo, -1)
        contenido.push({
          type: 'imagen',
          order: -1,
          content: '',
          url: completeImageUrl(url)
        });
      }
    }
  
    // Ordenar el array por la propiedad "order" para mantener la secuencia correcta
    contenido.sort((a, b) => a.order - b.order);
  
    // Asignar al objeto articulo de tipo ArticuloFormateado
    const articulo: ArticuloFormateado = {
      titulo,
      subtitulo,
      autor,
      contenido
    };
  
    return articulo;
  };
  