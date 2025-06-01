import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor() { }

  // Ejemplo de método
  getMessage(): string {
    return '¡Hola desde ServiceService!';
  }
}