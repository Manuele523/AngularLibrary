import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBookSectionComponent } from './carousel-book-section.component';

describe('CarouselBookSectionComponent', () => {
  let component: CarouselBookSectionComponent;
  let fixture: ComponentFixture<CarouselBookSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselBookSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselBookSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
