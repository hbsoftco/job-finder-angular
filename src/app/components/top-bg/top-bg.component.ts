import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bg',
  standalone: true,
  imports: [],
  template: `
    <header
      class="h-52 bg-gradient-to-l from-primary to-lightPrimary rounded-b-3xl"
    >
      <ng-content></ng-content>
    </header>
  `,
})
export class TopBgComponent {}
