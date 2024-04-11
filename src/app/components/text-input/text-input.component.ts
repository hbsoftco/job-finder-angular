import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'TextInput',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() type: 'text' | 'password' = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() required: boolean = false;

  control: FormControl;
  inputId: string;

  constructor() {
    // Initialize form control with or without validation based on 'required' input
    this.control = new FormControl(
      '',
      this.required ? Validators.required : null
    );

    this.inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  }
}
