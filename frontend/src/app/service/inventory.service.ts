// src/app/services/inventory.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private inventoryItems = [
    { id: 1, name: 'Paracetamol', quantity: 100, description: 'Caja de 10 tabletas' },
    { id: 2, name: 'Ibuprofeno', quantity: 50, description: 'Frasco de 200 ml' },
    { id: 3, name: 'Tapsin Día', quantity: 70, description: 'sobres de 200 gr' },
    { id: 4, name: 'Tapsin Noche', quantity: 50, description: 'sobres de 200 gr' },
    { id: 2, name: 'Ibuprofeno', quantity: 50, description: 'Frasco de 200 ml' }
  ];

  constructor() {}

  // Obtener todos los inventarios
  getInventoryItems(): Observable<any[]> {
    return of(this.inventoryItems);
  }

  // Obtener inventario por ID
  getInventoryItemById(id: number): Observable<any> {
    const item = this.inventoryItems.find(i => i.id === id);
    return of(item);
  }

  // Crear un nuevo inventario
  createInventoryItem(item: any): Observable<any> {
    item.id = this.inventoryItems.length > 0
      ? Math.max(...this.inventoryItems.map(i => i.id)) + 1
      : 1;
    this.inventoryItems.push(item);
    return of(item);
  }

  // Actualizar inventario existente
  updateInventoryItem(id: number, item: any): Observable<any> {
    const index = this.inventoryItems.findIndex(i => i.id === id);
    if (index !== -1) {
      this.inventoryItems[index] = { ...this.inventoryItems[index], ...item };
      return of(this.inventoryItems[index]);
    }
    return of(null);
  }

  // Eliminar inventario
  deleteInventoryItem(id: number): Observable<any> {
    const index = this.inventoryItems.findIndex(i => i.id === id);
    if (index !== -1) {
      this.inventoryItems.splice(index, 1);
    }
    return of({ message: 'Artículo eliminado' });
  }
}
