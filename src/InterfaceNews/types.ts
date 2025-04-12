// types.ts
export type BloqueNota =
  | { tipo: 'texto'; contenido: string }
  | { tipo: 'imagen'; url: string; caption?: string }
  | { tipo: 'leetambien'; contenido: string };

export type NotaFormateada = {
  titulo: string;
  subtitulo: string;
  imagenPrincipal: string; // URL
  fecha: string;           // En formato legible (ej. "dd/mm/aaaa hh:mm")
  contenido: BloqueNota[];
  contentRestriction: "libre" | "restringido";
};
