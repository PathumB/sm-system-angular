import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-starter-attendance-context',
  templateUrl: './starter-attendance-context.component.html',
  styleUrls: ['./starter-attendance-context.component.scss']
})
export class StarterAttendanceContextComponent implements AfterViewInit {

  displayedColumns: string[] = ['admission', 'date', 'name', 'email', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  name: string;
  admission: number;
  email: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {admission: 1, date: '2015-05-23', name: 'test name', email: 'test@gmail.com'},
  {admission: 2, date: '2015-05-23', name: 'test name', email: 'test@gmail.com'},
  {admission: 3, date: '2015-05-23', name: 'test name', email: 'test@gmail.com'},
  {admission: 4, date: '2015-05-23', name: 'test name', email: 'test@gmail.com'},
  {admission: 5, date: '2015-05-23', name: 'test name', email: 'test@gmail.com'},
  {admission: 6, date: '2015-05-23', name: 'test name', email: 'test@gmail.com'},
  {admission: 7, date: '2015-05-23', name: 'test name', email: 'test@gmail.com'},
];
