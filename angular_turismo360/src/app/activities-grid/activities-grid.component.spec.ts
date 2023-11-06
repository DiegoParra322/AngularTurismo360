import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesGridComponent } from './activities-grid.component';

describe('ActivitiesGridComponent', () => {
  let component: ActivitiesGridComponent;
  let fixture: ComponentFixture<ActivitiesGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesGridComponent]
    });
    fixture = TestBed.createComponent(ActivitiesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
