// /src/types/index.ts
export interface Project {
  id: number;
  slug: string;
  title: string; // <-- CORREGIDO: 'title' con una 't'
  category: string;
  thumbnail: string;
  description: string;
  role: string;
  stack: string[];
  date: string;
  // La galería es una LISTA (`[]`) de OBJETOS `{}`
  gallery: {
    src: string;
    metadata: Record<string, string>; // Un objeto con claves y valores de texto
  }[];
  projectUrl: string | null;
  nota?: string[]; // <-- Hacemos 'nota' opcional con '?' ya que no todos los proyectos lo tendrán
}