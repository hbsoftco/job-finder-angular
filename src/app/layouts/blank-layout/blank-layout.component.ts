import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNavigationBarComponent } from '../bottom-navigation-bar/bottom-navigation-bar.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [RouterOutlet, BottomNavigationBarComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss',
})
export class BlankLayoutComponent {}
