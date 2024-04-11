import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  header1!: HTMLElement;
  header2!: HTMLElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.header1 = this.elementRef.nativeElement.querySelector('#header1');
    this.header2 = this.elementRef.nativeElement.querySelector('#header2');

    if (this.header1 && this.header2) {
      this.renderer.setStyle(this.header1, 'display', 'block');
      this.renderer.setStyle(this.header2, 'display', 'none');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.header1 && this.header2) {
      if (window.scrollY > 20) {
        this.renderer.setStyle(this.header1, 'display', 'none');
        this.renderer.setStyle(this.header2, 'display', 'block');
      } else {
        this.renderer.setStyle(this.header1, 'display', 'block');
        this.renderer.setStyle(this.header2, 'display', 'none');
      }
    }
  }
}
