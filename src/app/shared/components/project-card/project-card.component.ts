import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project!: Project;

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
