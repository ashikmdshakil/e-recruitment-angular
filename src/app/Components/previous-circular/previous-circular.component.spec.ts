import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousCircularComponent } from './previous-circular.component';

describe('PreviousCircularComponent', () => {
  let component: PreviousCircularComponent;
  let fixture: ComponentFixture<PreviousCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousCircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
