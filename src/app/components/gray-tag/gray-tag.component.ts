import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gray-tag',
  standalone: true,
  imports: [RouterModule],
  template: `<a
    [routerLink]="[routerLink]"
    class="h-[26] mr-2 mb-2 rounded-lg inline-block bg-gray-100 px-5 py-2 text-[10px] text-semiDarkText"
    >{{ title }}</a
  >`,
})
export class GrayTagComponent {
  @Input() routerLink!: string;
  @Input() title!: string;
}
