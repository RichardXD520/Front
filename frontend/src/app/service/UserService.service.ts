// src/app/services/user.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'  // Esto lo hace accesible globalmente
})
export class UserService {
  private users = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', telefono: '123456789' },
    { id: 2, name: 'Ana Gómez', email: 'ana@example.com', telefono: '987654321' }
  ];

  constructor() {}

  // Obtener todos los usuarios (simulado)
  getAllUsers(): Observable<any> {
    return of(this.users);  // Simula la respuesta del backend
  }

  // Obtener un usuario por ID (simulado)
  getUserById(id: number): Observable<any> {
    const user = this.users.find(u => u.id === id);
    return of(user);  // Devuelve el usuario simulado
  }

  // Crear un nuevo usuario (simulado)
  createUser(user: any): Observable<any> {
    user.id = this.users.length + 1;  // Asigna un nuevo ID
    this.users.push(user);  // Simula la creación del usuario
    return of(user);
  }

  // Actualizar un usuario (simulado)
  updateUser(id: number, user: any): Observable<any> {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...user };
    }
    return of(this.users[index]);  // Simula la actualización del usuario
  }

  // Eliminar un usuario (simulado)
  deleteUser(id: number): Observable<any> {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
    return of({ message: 'Usuario eliminado' });  // Simula la eliminación
  }
}
