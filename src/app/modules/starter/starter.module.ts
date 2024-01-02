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
    FindStudentsDataComponent
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
  ]
})
export class StarterModule { }
