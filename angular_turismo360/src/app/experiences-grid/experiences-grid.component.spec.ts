import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesGridComponent } from './experiences-grid.component';

describe('ExperiencesGridComponent', () => {
  let component: ExperiencesGridComponent;
  let fixture: ComponentFixture<ExperiencesGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperiencesGridComponent]
    });
    fixture = TestBed.createComponent(ExperiencesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
