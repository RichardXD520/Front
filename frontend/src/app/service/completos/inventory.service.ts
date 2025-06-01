import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importar HttpClient
import { Observable } from 'rxjs';  // Para manejar la respuesta como un observable
import { catchError } from 'rxjs/operators';  // Para manejar errores

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'http://inventory-service:8002/inventory'; // URL del API para inventarios

  constructor(private http: HttpClient) {}

  // Obtener todos los inventarios
  getInventoryItems(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Obtener un inventario específico por su ID
  getInventoryItemById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Crear un nuevo inventario
  createInventoryItem(inventoryItem: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, inventoryItem)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Actualizar un inventario
  updateInventoryItem(id: number, inventoryItem: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, inventoryItem)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Eliminar un inventario
  deleteInventoryItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Manejo de errores
  private handleError(error: any): Observable<never> {
    console.error('Ocurrió un error', error);
    throw error;
  }
}
