import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { DataService } from '../../core/services/data.service';
import { SeoService } from '../../core/services/seo.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TimelineItemComponent } from '../../shared/components/timeline-item/timeline-item.component';
import { TimelineItem } from '../../shared/interfaces/timeline.interface';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, TimelineItemComponent, ButtonComponent],
  providers: [DataService, SeoService],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  experienceItems: TimelineItem[] = [];
  educationItems: TimelineItem[] = [];

  certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: 'fab fa-aws',
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      year: '2022',
      icon: 'fab fa-google',
    },
    {
      name: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      year: '2022',
      icon: 'fab fa-microsoft',
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      year: '2023',
      icon: 'fas fa-server',
    },
  ];

  awards = [
    {
      name: 'Employee of the Year',
      organization: 'Tech Solutions Inc.',
      year: '2023',
    },
    {
      name: 'Innovation Award',
      organization: 'StartupXYZ',
      year: '2021',
    },
    {
      name: "Dean's List",
      organization: 'Stanford University',
      year: '2019-2020',
    },
    {
      name: 'Hackathon Winner',
      organization: 'Bay Area Dev Challenge',
      year: '2020',
    },
  ];

  constructor(
    private dataService: DataService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.loadTimelineData();
    this.setupSEO();
  }

  private loadTimelineData(): void {
    this.dataService.getTimelineItems().subscribe((items: TimelineItem[]) => {
      this.experienceItems = items.filter((item) => item.type === 'experience');
      this.educationItems = items.filter((item) => item.type === 'education');
    });
  }

  private setupSEO(): void {
    this.seoService.updateMetaTags({
      title: 'Resume - John Doe | Full Stack Developer Experience',
      description:
        "View John Doe's professional resume, including 5+ years of full stack development experience, education at Stanford University, certifications, and achievements.",
      keywords:
        'john doe resume, full stack developer resume, angular developer experience, react developer cv, software engineer resume',
      author: 'John Doe',
    });
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  }

  navigateToContact(): void {
    window.location.href = '/contact';
  }

  viewProjects(): void {
    window.location.href = '/projects';
  }
}
