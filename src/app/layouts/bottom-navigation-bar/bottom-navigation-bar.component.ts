import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bottom-navigation-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bottom-navigation-bar.component.html',
  styleUrl: './bottom-navigation-bar.component.scss',
})
export class BottomNavigationBarComponent {}
