import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // <-- Agrega esto
import { BeneficiaryService } from './beneficiary.service';
import { ComponentsModule } from 'src/app/shared/components/components.module';

describe('BeneficiaryService', () => {
  let service: BeneficiaryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ /* tu componente */ ],
      imports: [ ComponentsModule, HttpClientTestingModule ] // <-- Y esto
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(BeneficiaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
