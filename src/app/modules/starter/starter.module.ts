import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterHeaderComponent } from './components/starter-header/starter-header.component';
import { StarterHomeContextComponent } from './components/starter-home-context/starter-home-context.component';
import { StarterSidebarComponent } from './components/starter-sidebar/starter-sidebar.component';
import { StarterStudentContextComponent } from './components/starter-student-context/starter-student-context.component';
import { AllStudentsDataComponent } from './components/starter-student-context/items/all-students-data/all-students-data.component';
import { NewStudentsDataComponent } from './components/starter-student-context/items/new-students-data/new-students-data.component';
import { UpdateStudentsDataComponent } from './components/starter-student-context/items/update-students-data/update-students-data.component';
import { FindStudentsDataComponent } from './components/starter-student-context/items/find-students-data/find-students-data.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import { StarterGradeContextComponent } from './components/starter-grade-context/starter-grade-context.component';
import { AllGradesDataComponent } from './components/starter-grade-context/items/all-grades-data/all-grades-data.component';
import { NewGradesDataComponent } from './components/starter-grade-context/items/new-grades-data/new-grades-data.component';
import { StarterAttendanceContextComponent } from './components/starter-attendance-context/starter-attendance-context.component';
import { StarterSubjectContextComponent } from './components/starter-subject-context/starter-subject-context.component';
import { StarterTeacherContextComponent } from './components/starter-teacher-context/starter-teacher-context.component';
import { AllTeachersDataComponent } from './components/starter-teacher-context/items/all-teachers-data/all-teachers-data.component';
import { UpdateTeachersDataComponent } from './components/starter-teacher-context/items/update-teachers-data/update-teachers-data.component';
import { NewTeachersDataComponent } from './components/starter-teacher-context/items/new-teachers-data/new-teachers-data.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [
    StarterComponent,
    StarterHeaderComponent,
    StarterHomeContextComponent,
    StarterSidebarComponent,
    StarterStudentContextComponent,
    AllStudentsDataComponent,
    NewStudentsDataComponent,
    UpdateStudentsDataComponent,
    FindStudentsDataComponent,
    StarterGradeContextComponent,
    AllGradesDataComponent,
    NewGradesDataComponent,
    StarterAttendanceContextComponent,
    StarterSubjectContextComponent,
    StarterTeacherContextComponent,
    AllTeachersDataComponent,
    UpdateTeachersDataComponent,
    NewTeachersDataComponent
  ],
  imports: [
    CommonModule,
    StarterRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
  ]
})
export class StarterModule { }
