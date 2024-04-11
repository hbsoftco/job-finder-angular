import { Component } from '@angular/core';
import { TextInputComponent } from '../../../components/text-input/text-input.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { SocialButtonComponent } from '../../../components/social-button/social-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    TextInputComponent,
    ButtonComponent,
    SocialButtonComponent,
    RouterModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {}
