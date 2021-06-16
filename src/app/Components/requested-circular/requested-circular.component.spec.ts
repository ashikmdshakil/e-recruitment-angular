import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedCircularComponent } from './requested-circular.component';

describe('RequestedCircularComponent', () => {
  let component: RequestedCircularComponent;
  let fixture: ComponentFixture<RequestedCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedCircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
