import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service/service.service';
import { ComponentsModule } from 'src/app/shared/components/components.module';


describe('ServiceService', () => {
  let service: ServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ /* tu componente */ ],
      imports: [ ComponentsModule, /* otros módulos necesarios */ ]
    })
    .compileComponents();

    service = TestBed.inject(ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
