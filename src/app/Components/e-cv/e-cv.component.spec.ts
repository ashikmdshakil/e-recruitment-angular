import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECvComponent } from './e-cv.component';

describe('ECvComponent', () => {
  let component: ECvComponent;
  let fixture: ComponentFixture<ECvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
