import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-btn',
  standalone: true,
  imports: [CommonModule],
  template: `<button
    class="rounded-lg bg-white p-4 group text-center shadow-md hover:bg-secondary transition-all duration-200"
  >
    <div
      class="h-[67px] w-[67px] mb-2 text-center flex justify-center items-center rounded-full transition-all duration-200 bg-lightSecondary group-hover:bg-white"
    >
      <img
        *ngIf="svg"
        alt="search"
        class="w-[30px] h-[30px] m-auto"
        [src]="'/assets/images/' + svg + '.svg'"
      />
    </div>
    <h5 class="text-center text-darkText font-semibold text-sm mb-1 group-hover:text-white transition-all duration-200">{{ title }}</h5>
    <p class="text-center text-lightGray text-xs group-hover:text-white transition-all duration-200">{{ jobCount }} Jobs</p>
  </button> `,
})
export class CategoryBtnComponent {
  @Input() jobCount!: number;
  @Input() svg!: string;
  @Input() title!: string;
}