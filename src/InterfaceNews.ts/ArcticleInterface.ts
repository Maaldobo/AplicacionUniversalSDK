export interface ContenidoItem {
  type: 'parrafo' | 'imagen';
  order: number;
  content: string; // Para 'parrafo' se almacena el HTML; en 'imagen' puede quedar vacío.
  url?: string;    // Se usa únicamente para los elementos de tipo "imagen"
}

// Interfaz para el artículo formateado
export interface ArticuloFormateado {
  titulo: string;
  subtitulo: string;
  autor: string;
  contenido: ContenidoItem[];
}
