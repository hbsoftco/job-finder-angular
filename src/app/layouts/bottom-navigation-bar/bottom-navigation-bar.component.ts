import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bottom-navigation-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bottom-navigation-bar.component.html',
  styleUrl: './bottom-navigation-bar.component.scss',
})
export class BottomNavigationBarComponent {}
