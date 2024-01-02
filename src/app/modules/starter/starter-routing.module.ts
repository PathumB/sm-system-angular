import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter.component';
import {StarterHomeContextComponent} from "./components/starter-home-context/starter-home-context.component";
import {StarterStudentContextComponent} from "./components/starter-student-context/starter-student-context.component";
import { NewStudentsDataComponent } from "./components/starter-student-context/items/new-students-data/new-students-data.component";
import { UpdateStudentsDataComponent } from "./components/starter-student-context/items/update-students-data/update-students-data.component";
import { AllStudentsDataComponent } from "./components/starter-student-context/items/all-students-data/all-students-data.component";
import { FindStudentsDataComponent } from "./components/starter-student-context/items/find-students-data/find-students-data.component";

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
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
