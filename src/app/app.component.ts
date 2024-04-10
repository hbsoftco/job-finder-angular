import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<div class="bg-bgWhite"><router-outlet></router-outlet></div>',
  styleUrls: [],
})
export class AppComponent {
  title = 'job-finder-angular';
}