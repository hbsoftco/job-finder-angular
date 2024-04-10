import { Component } from '@angular/core';
import { TopBgComponent } from '../../components/top-bg/top-bg.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterModule } from '@angular/router';
import { CategoryBtnComponent } from '../../components/category-btn/category-btn.component';
import { Category } from '../../shared/interfaces/Category';
import { HomeService } from '../../services/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopBgComponent,
    SearchInputComponent,
    ButtonComponent,
    CategoryBtnComponent,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  categories: Category[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.homeService.getAllCategories().subscribe({
      next: (data: Category[]) => {
        this.categories = data;
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      },
    });
  }
}
