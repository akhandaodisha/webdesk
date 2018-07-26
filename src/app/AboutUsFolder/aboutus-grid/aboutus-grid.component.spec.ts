import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusGridComponent } from './aboutus-grid.component';

describe('AboutusGridComponent', () => {
  let component: AboutusGridComponent;
  let fixture: ComponentFixture<AboutusGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
