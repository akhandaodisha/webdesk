import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAimComponent } from './our-aim.component';

describe('OurAimComponent', () => {
  let component: OurAimComponent;
  let fixture: ComponentFixture<OurAimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurAimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
