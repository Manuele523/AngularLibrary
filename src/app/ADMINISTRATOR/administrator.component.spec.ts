import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADMINISTRATORComponent } from './administrator.component';

describe('ADMINISTRATORComponent', () => {
  let component: ADMINISTRATORComponent;
  let fixture: ComponentFixture<ADMINISTRATORComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADMINISTRATORComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADMINISTRATORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
