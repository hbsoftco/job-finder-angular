import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'c-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [ngClass]="buttonClasses">
      <ng-content></ng-content>
      <ng-container>
        <img
          *ngIf="svg"
          alt="search"
          class="w-6 h-6 m-auto"
          [src]="'/assets/svg/' + svg + '.svg'"
        />
        <span *ngIf="text">{{ text }}</span>
      </ng-container>
    </button>
  `,
})
export class ButtonComponent {
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() svg!: string;
  @Input() text!: string;

  get buttonClasses(): string[] {
    return [
      'h-10',
      'rounded-lg',
      this.svg === '' ? 'px-4' : 'px-1 w-10 text-center',
      this.type === 'primary'
        ? 'bg-primary text-white'
        : 'bg-secondary text-black',
      'hover:bg-opacity-90',
    ];
  }
}
