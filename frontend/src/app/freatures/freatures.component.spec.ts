import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreaturesComponent } from './freatures.component';

describe('FreaturesComponent', () => {
  let component: FreaturesComponent;
  let fixture: ComponentFixture<FreaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
