import { Component, Input } from '@angular/core';
import { Job } from '../../shared/interfaces/Job';
import { GrayTagComponent } from '../gray-tag/gray-tag.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-box',
  standalone: true,
  imports: [GrayTagComponent, CommonModule],
  templateUrl: './job-box.component.html',
  styleUrl: './job-box.component.scss',
})
export class JobBoxComponent {
  @Input() job!: Job;
}
