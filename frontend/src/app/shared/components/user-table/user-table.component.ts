import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/user';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {


  @Input() listDataApproveTransfer : any[]
  @Input() isLoadingList : boolean
  //@Input() paginador : IPagination
  @Output() onHandleShowDetailProduct: EventEmitter<any> = new EventEmitter();
  @Output() sendTableFilterColumn: EventEmitter <any> = new EventEmitter();
  @Output() sendTableFilterPage: EventEmitter <any> = new EventEmitter();
  @Output() onHandleShowHistoryModal: EventEmitter<any> = new EventEmitter();
  //agregado para probar el voucher
  @Output() onHandleOpenModalVoucher: EventEmitter<any> = new EventEmitter();
 @Input ('datos') public users!: IUser[];
  constructor() {

    // al cambiar a false se mostraron datos
    this.isLoadingList = false
    this.listDataApproveTransfer = []
  }

  ngOnInit(): void {
    console.log(this.isLoadingList, this.listDataApproveTransfer); // Verifica si los valores están correctamente asignados
  }


  onSortColumn(sortable: any): void {
    console.log('Columna ordenada:', sortable);
    this.sendTableFilterColumn.emit(sortable);
  }

  showDetailProduct(item: any): void {
    console.log('Detalle del producto:', item);
    this.onHandleShowDetailProduct.emit(item);
  }

  changePage(page: number): void {
    console.log('Cambiar a la página:', page);
    this.sendTableFilterPage.emit(page);
  }

  showHistory(item: any): void {
    console.log('Historial del producto:', item);
    this.onHandleShowHistoryModal.emit(item);
  }


}



