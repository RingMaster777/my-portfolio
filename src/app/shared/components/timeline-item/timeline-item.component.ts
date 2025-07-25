import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TimelineItem } from '../../interfaces/timeline.interface';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-item.component.html',
})
export class TimelineItemComponent {
  @Input() item!: TimelineItem;

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
    }).format(date);
  }
}
