import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [RouterLink, NgIf],
  template: `<div class="flex justify-between items-center mb-4">
    <h3 class="text-darkText font-bold text-lg">{{ title }}</h3>
    <a
      [routerLink]="[routerLink]"
      class="text-lightGray text-sm"
      *ngIf="routerLink"
      >{{ routerLinkText }}</a
    >
  </div>`,
})
export class SectionTitleComponent {
  @Input() title!: string;
  @Input() routerLink!: string;
  @Input() routerLinkText!: string;
}
