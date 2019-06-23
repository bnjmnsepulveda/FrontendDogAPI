export interface ResponseApi<T> {
  message: T;
  status: string;
}

export interface Raza {
  nombre: string;
  imagenes?: string[];
  subrazas?: string[];
}

