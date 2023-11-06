import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarRegisterComponent } from './nav-bar-register.component';

describe('NavBarRegisterComponent', () => {
  let component: NavBarRegisterComponent;
  let fixture: ComponentFixture<NavBarRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarRegisterComponent]
    });
    fixture = TestBed.createComponent(NavBarRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
