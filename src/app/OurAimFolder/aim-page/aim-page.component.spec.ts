import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AimPageComponent } from './aim-page.component';

describe('AimPageComponent', () => {
  let component: AimPageComponent;
  let fixture: ComponentFixture<AimPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AimPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AimPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
