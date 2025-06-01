import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaComponent } from './caja.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

describe('CajaComponent', () => {
  let component: CajaComponent;
  let fixture: ComponentFixture<CajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaComponent ],
      imports: [ ComponentsModule ]
      imports: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
