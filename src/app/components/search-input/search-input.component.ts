import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [],
  template: ` <div
    class="relative h-10  py-1 overflow-hidden pl-8 border border-gray-100 rounded-lg bg-white"
  >
    <img
      alt="search"
      class="absolute left-1 top-0 bottom-0 m-auto"
      src="/assets/svg/search.svg"
    />
    <input type="text" class="outline-none text-sm" [placeholder]="placeholder" />
  </div>`,
})
export class SearchInputComponent {
  @Input() placeholder!: string;
}
