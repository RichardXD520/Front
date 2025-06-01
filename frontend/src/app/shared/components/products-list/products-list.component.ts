import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  inventory: any[] = [];
  filteredInventory: any[] = [];
  selectedItem: any | null = null;
  modalRef?: BsModalRef;
  searchForm: FormGroup;

  constructor(
    private inventoryService: InventoryService,
    private modalService: BsModalService,
    private fb: FormBuilder,
  ) {
    this.searchForm = this.fb.group({
      searchControl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadInventory();

    this.searchForm.get('searchControl')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((searchTerm: string) => {
      this.filterProducts(searchTerm);
    });
  }

  loadInventory(): void {
    this.inventoryService.getInventoryItems().subscribe(items => {
      this.inventory = items;
      this.filteredInventory = items; // Inicializa la vista filtrada
    });
  }

  filterProducts(searchTerm: string): void {
    this.filteredInventory = this.inventory.filter(item =>
      !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  openModal(template: TemplateRef<any>, productId: number): void {
    this.inventoryService.getInventoryItemById(productId).subscribe(
      (data: any) => {
        this.selectedItem = {
          id: data.id,
          name: data.name,
          quantity: data.quantity,
          description: data.description,
        };
        this.modalRef = this.modalService.show(template);
      },
      (error: any) => {
        console.error('Error al obtener el producto', error);
        alert('No se puede cargar la información');
      }
    );
  }

  closeModal(): void {
    this.modalRef?.hide();
    this.selectedItem = null;
  }
}
