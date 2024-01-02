import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindStudentsDataComponent } from './find-students-data.component';

describe('FindStudentsDataComponent', () => {
  let component: FindStudentsDataComponent;
  let fixture: ComponentFixture<FindStudentsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindStudentsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindStudentsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
