import {AfterViewInit, Component} from '@angular/core';

declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'sm-system';

  ngAfterViewInit() {
    $(document).ready(function() {
      $('[data-toggle="offcanvas"]').on("click", function() {
        $('.sidebar-offcanvas').toggleClass('active');
      });
    });
  }

}
