import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
      imports: [ ModalModule.forRoot(), BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
