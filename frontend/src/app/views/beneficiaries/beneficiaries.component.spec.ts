import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeneficiariesComponent } from './beneficiaries.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

describe('BeneficiariesComponent', () => {
  let component: BeneficiariesComponent;
  let fixture: ComponentFixture<BeneficiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiariesComponent ],
      imports: [ ComponentsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
