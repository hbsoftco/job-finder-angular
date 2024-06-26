import { Component } from '@angular/core';
import { TopBgComponent } from '../../components/top-bg/top-bg.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CategoryBtnComponent } from '../../components/category-btn/category-btn.component';
import { Category } from '../../shared/interfaces/Category';
import { HomeService } from '../../services/home.service';
import { NgFor, NgIf } from '@angular/common';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { JobBoxComponent } from '../../components/job-box/job-box.component';
import { Job } from '../../shared/interfaces/Job';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopBgComponent,
    SearchInputComponent,
    ButtonComponent,
    CategoryBtnComponent,
    SectionTitleComponent,
    JobBoxComponent,
    NgIf,
    NgFor,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  categories: Category[] = [];
  jobs: Job[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadJobs();
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

  loadJobs(): void {
    this.homeService.getAllJobs().subscribe({
      next: (data: Job[]) => {
        this.jobs = data;
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      },
    });
  }
}
