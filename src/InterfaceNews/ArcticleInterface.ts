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
export interface ParsedArticle {
  title: string;
  subtitle: string;
  date: string;  // puede ser string o Date, según necesidades
  body: BodyElement[];
}
export interface BodyElement  {
  type: 'text' | 'image';
  content?: string;
  url?: string;
}

// types.ts
export type BloqueNota = 
  | { tipo: 'texto'; contenido: string }
  | { tipo: 'imagen'; url: string; caption?: string };

export interface NotaFormateada {
  titulo: string;
  subtitulo: string;
  imagenPrincipal: string; // URL de la imagen principal
  fecha: string; // Fecha en formato legible
  contenido: BloqueNota[]; // Array de bloques que pueden ser texto o imagen
  contentRestriction: 'libre' | 'restringido';
}
