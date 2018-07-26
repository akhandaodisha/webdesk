import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSocialCountComponent } from './home-social-count.component';

describe('HomeSocialCountComponent', () => {
  let component: HomeSocialCountComponent;
  let fixture: ComponentFixture<HomeSocialCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSocialCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSocialCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
