import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharedComponent } from './chared.component';

describe('CharedComponent', () => {
  let component: CharedComponent;
  let fixture: ComponentFixture<CharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
