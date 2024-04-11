import { Component } from '@angular/core';
import { TextInputComponent } from '../../../components/text-input/text-input.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { SocialButtonComponent } from '../../../components/social-button/social-button.component';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../shared/interfaces/User.dto';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    TextInputComponent,
    ButtonComponent,
    SocialButtonComponent,
    RouterLink,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  signupForm: FormGroup;
  user!: User;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    console.log(this.signupForm.valid);

    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      this.authService.registerUser(formData).subscribe({
        next: (data: User) => {
          this.user = data;
        },
        error: (error) => {
          console.error('Error register user:', error);
        },
      });
    } else {
      // Mark form controls as touched to display validation errors
      this.signupForm.markAllAsTouched();
    }
  }
}
