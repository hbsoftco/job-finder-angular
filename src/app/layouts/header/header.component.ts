import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header1 = this.elementRef.nativeElement.querySelector('#header1');
    const header2 = this.elementRef.nativeElement.querySelector('#header2');
    if (window.scrollY > 0) {
      this.renderer.setStyle(header1, 'display', 'none');
      this.renderer.setStyle(header2, 'display', 'block');
    } else {
      this.renderer.setStyle(header1, 'display', 'block');
      this.renderer.setStyle(header2, 'display', 'none');
    }
  }
}
