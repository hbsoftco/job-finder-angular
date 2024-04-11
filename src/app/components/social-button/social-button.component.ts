import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'social-button',
  standalone: true,
  imports: [NgClass, NgIf],
  template: `<button
    [ngClass]="buttonClasses"
    class="text-darkText bg-white w-full text-xs h-12 flex justify-center items-center"
  >
    <ng-content></ng-content>
    <ng-container>
      <img [alt]="type" class="w-5 h-5 mr-3" [src]="'/assets/svg/google.svg'" />
      <span *ngIf="text">{{ text }}</span>
    </ng-container>
  </button>`,
})
export class SocialButtonComponent {
  @Input() type: 'google' | 'github' = 'google';
  @Input() text!: string;

  get buttonClasses(): string[] {
    return ['h-10', 'rounded-lg'];
  }
}
