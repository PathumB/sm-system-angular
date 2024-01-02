import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentsDataComponent } from './update-students-data.component';

describe('UpdateStudentsDataComponent', () => {
  let component: UpdateStudentsDataComponent;
  let fixture: ComponentFixture<UpdateStudentsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudentsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStudentsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
