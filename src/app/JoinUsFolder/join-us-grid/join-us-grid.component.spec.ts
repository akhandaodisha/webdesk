import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUsGridComponent } from './join-us-grid.component';

describe('JoinUsGridComponent', () => {
  let component: JoinUsGridComponent;
  let fixture: ComponentFixture<JoinUsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinUsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinUsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
