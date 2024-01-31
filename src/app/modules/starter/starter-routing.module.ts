import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter.component';
import { StarterHomeContextComponent } from "./components/starter-home-context/starter-home-context.component";
import { StarterStudentContextComponent } from "./components/starter-student-context/starter-student-context.component";
import { NewStudentsDataComponent } from "./components/starter-student-context/items/new-students-data/new-students-data.component";
import { UpdateStudentsDataComponent } from "./components/starter-student-context/items/update-students-data/update-students-data.component";
import { AllStudentsDataComponent } from "./components/starter-student-context/items/all-students-data/all-students-data.component";
import { FindStudentsDataComponent } from "./components/starter-student-context/items/find-students-data/find-students-data.component";
import { StarterGradeContextComponent } from "./components/starter-grade-context/starter-grade-context.component";
import { AllGradesDataComponent } from "./components/starter-grade-context/items/all-grades-data/all-grades-data.component";
import { NewGradesDataComponent } from "./components/starter-grade-context/items/new-grades-data/new-grades-data.component";
import {StarterSubjectContextComponent} from "./components/starter-subject-context/starter-subject-context.component";
import {StarterTeacherContextComponent} from "./components/starter-teacher-context/starter-teacher-context.component";
import { AllTeachersDataComponent } from "./components/starter-teacher-context/items/all-teachers-data/all-teachers-data.component";
import { NewTeachersDataComponent } from "./components/starter-teacher-context/items/new-teachers-data/new-teachers-data.component";
import { UpdateTeachersDataComponent } from "./components/starter-teacher-context/items/update-teachers-data/update-teachers-data.component";
import {
  StarterAttendanceContextComponent
} from "./components/starter-attendance-context/starter-attendance-context.component";
import {StarterNoticeContextComponent} from "./components/starter-notice-context/starter-notice-context.component";
import {AllNoticesDataComponent} from "./components/starter-notice-context/all-notices-data/all-notices-data.component";
import {AddNoticesDataComponent} from "./components/starter-notice-context/add-notices-data/add-notices-data.component";

const routes: Routes = [
  { path: '', component: StarterComponent, children: [
      { path: '', redirectTo:'/starter/home', pathMatch:'full' },
      { path: 'home', component: StarterHomeContextComponent },
      { path: 'manage-students', component: StarterStudentContextComponent, children:[
          { path: '', redirectTo:'list', pathMatch:'full' },
          { path: 'new', component: NewStudentsDataComponent },
          { path: 'update', component: UpdateStudentsDataComponent },
          { path: 'list', component: AllStudentsDataComponent },
          { path: 'find', component: FindStudentsDataComponent },
      ]},
      { path: 'manage-grades', component: StarterGradeContextComponent, children: [
          { path: '', redirectTo:'list', pathMatch:'full' },
          { path: 'list', component: AllGradesDataComponent },
          { path: 'new', component: NewGradesDataComponent },
      ]},
      { path: 'manage-subjects', component: StarterSubjectContextComponent },
      { path: 'manage-teachers', component: StarterTeacherContextComponent, children:[
          { path: '', redirectTo:'list', pathMatch:'full' },
          { path: 'list', component: AllTeachersDataComponent },
          { path: 'new', component: NewTeachersDataComponent },
          { path: 'update', component: UpdateTeachersDataComponent },
      ]},
      { path: 'mark-attendance', component: StarterAttendanceContextComponent },
      { path: 'manage-notices', component: StarterNoticeContextComponent, children:[
          { path: '', redirectTo:'list', pathMatch:'full' },
          { path: 'list', component: AllNoticesDataComponent },
          { path: 'new', component: AddNoticesDataComponent },
        ]},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
