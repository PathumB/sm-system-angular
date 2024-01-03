import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGradesDataComponent } from './all-grades-data.component';

describe('AllGradesDataComponent', () => {
  let component: AllGradesDataComponent;
  let fixture: ComponentFixture<AllGradesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGradesDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllGradesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
