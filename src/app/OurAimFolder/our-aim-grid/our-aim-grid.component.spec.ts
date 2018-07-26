import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAimGridComponent } from './our-aim-grid.component';

describe('OurAimGridComponent', () => {
  let component: OurAimGridComponent;
  let fixture: ComponentFixture<OurAimGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurAimGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAimGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
