import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  inventoryItems: any[] = [];
  selectedItem: any = null;
  isEdit: boolean = false;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadInventoryItems();
  }

  loadInventoryItems(): void {
    this.inventoryService.getInventoryItems().subscribe({
      next: (data) => {
        this.inventoryItems = data;
      },
      error: (err) => {
        console.error('Error al cargar artículos', err);
      }
    });
  }

  newItem(): void {
    this.selectedItem = {
      name: '',
      quantity: 0,
      description: ''
    };
    this.isEdit = false;
  }

  editItem(item: any): void {
    this.selectedItem = { ...item };
    this.isEdit = true;
  }

  saveItem(): void {
    if (this.isEdit && this.selectedItem.id) {
      this.inventoryService.updateInventoryItem(this.selectedItem.id, this.selectedItem).subscribe({
        next: () => {
          this.loadInventoryItems();
          this.resetForm();
        },
        error: (err) => {
          console.error('Error al actualizar artículo', err);
        }
      });
    } else {
      this.inventoryService.createInventoryItem(this.selectedItem).subscribe({
        next: () => {
          this.loadInventoryItems();
          this.resetForm();
        },
        error: (err) => {
          console.error('Error al crear artículo', err);
        }
      });
    }
  }

  deleteItem(item: any): void {
    if (confirm(`¿Estás seguro de eliminar "${item.name}"?`)) {
      this.inventoryService.deleteInventoryItem(item.id).subscribe({
        next: () => {
          this.loadInventoryItems();
        },
        error: (err) => {
          console.error('Error al eliminar artículo', err);
        }
      });
    }
  }

  cancelEdit(): void {
    this.resetForm();
  }

  private resetForm(): void {
    this.selectedItem = null;
    this.isEdit = false;
  }
}
