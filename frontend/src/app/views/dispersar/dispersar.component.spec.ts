import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispersarComponent } from './dispersar.component';

describe('DispersarComponent', () => {
  let component: DispersarComponent;
  let fixture: ComponentFixture<DispersarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispersarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispersarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
