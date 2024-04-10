import { Component } from '@angular/core';
import { TopBgComponent } from '../../components/top-bg/top-bg.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterModule } from '@angular/router';
import { CategoryBtnComponent } from '../../components/category-btn/category-btn.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopBgComponent,
    SearchInputComponent,
    ButtonComponent,
    CategoryBtnComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
