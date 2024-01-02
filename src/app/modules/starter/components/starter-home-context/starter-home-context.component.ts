import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-starter-home-context',
  templateUrl: './starter-home-context.component.html',
  styleUrls: ['./starter-home-context.component.scss']
})
export class StarterHomeContextComponent {
  title = 'Dashboard | sm-system';
  date = new Date();
}
