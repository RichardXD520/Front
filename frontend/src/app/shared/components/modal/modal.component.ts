import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() item:any;
 @Output() close = new EventEmitter <void>();

  closeModal(): void {
    this.close.emit();
  }

  constructor() {}

  ngOnInit(): void {
  }

}
import { ReactiveFormsModule } from '@angular/forms';
// ...existing code...
beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [ ProductsListComponent ],
    imports: [ ModalModule.forRoot(), BrowserAnimationsModule, ReactiveFormsModule ]
  })
  .compileComponents();
  // ...existing code...
});
