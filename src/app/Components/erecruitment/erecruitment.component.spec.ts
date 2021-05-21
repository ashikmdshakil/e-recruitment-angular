import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErecruitmentComponent } from './erecruitment.component';

describe('ErecruitmentComponent', () => {
  let component: ErecruitmentComponent;
  let fixture: ComponentFixture<ErecruitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErecruitmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
