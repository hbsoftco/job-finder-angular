import { Component } from '@angular/core';
import { TextInputComponent } from '../../../components/text-input/text-input.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../components/button/button.component';
import { SocialButtonComponent } from '../../../components/social-button/social-button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    TextInputComponent,
    ButtonComponent,
    SocialButtonComponent,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
