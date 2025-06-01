import { Component, OnInit, TemplateRef } from '@angular/core';
import { InventoryService } from 'src/app/service/inventory.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  inventory: any[] = [];
  selectedItem: any | null = null;
  modalRef?: BsModalRef;

  constructor(
    private inventoryService: InventoryService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.loadInventory();
  }

  loadInventory(): void {
    this.inventoryService.getInventoryItems().subscribe(items => {
      this.inventory = items;
    });
  }

  openModal(template: TemplateRef<any>, item: any): void {
    this.selectedItem = item;
    this.modalRef = this.modalService.show(template);
  }

  closeModal(): void {
    this.modalRef?.hide();
    this.selectedItem = null;
  }
}
