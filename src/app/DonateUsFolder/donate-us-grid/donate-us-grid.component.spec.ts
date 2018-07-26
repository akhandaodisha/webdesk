import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateUsGridComponent } from './donate-us-grid.component';

describe('DonateUsGridComponent', () => {
  let component: DonateUsGridComponent;
  let fixture: ComponentFixture<DonateUsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateUsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateUsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
