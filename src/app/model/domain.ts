export interface ResponseApi<T> {
  message: T;
  status: string;
}

export interface Raza {
  nombre: string;
  imagenes?: string[];
  subrazas?: string[];
}

export interface Subraza {
  raza: string;
  nombre: string;
  imagenes?: string[];
}

