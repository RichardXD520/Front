import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryComponent } from './inventory.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryComponent ],
      imports: [ ComponentsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
