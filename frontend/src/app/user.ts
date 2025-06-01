export interface IUser {
  id: string;
  rut: string;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  direccion: string;
  comuna: string;
  telefono: string;
  email: string;
  fechaRegistro: string;
  activo: boolean;
  tipo: string;
  credenciales: any;
  permisos: string;
}
