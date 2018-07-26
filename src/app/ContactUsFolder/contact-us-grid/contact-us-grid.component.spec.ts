import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsGridComponent } from './contact-us-grid.component';

describe('ContactUsGridComponent', () => {
  let component: ContactUsGridComponent;
  let fixture: ComponentFixture<ContactUsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
