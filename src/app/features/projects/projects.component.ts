import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataService } from '../../core/services/data.service';
import { SeoService } from '../../core/services/seo.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { Project } from '../../shared/interfaces/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, ProjectCardComponent, ButtonComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  searchTerm = '';
  activeCategory = 'all';
  loadingMore = false;
  hasMoreProjects = false;

  categories = ['all', 'web', 'mobile', 'desktop', 'other'];

  constructor(
    private dataService: DataService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
    this.setupSEO();
  }

  private loadProjects(): void {
    this.dataService.getProjects().subscribe((projects: Project[]) => {
      this.allProjects = projects.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      this.filteredProjects = [...this.allProjects];
    });
  }

  private setupSEO(): void {
    this.seoService.updateMetaTags({
      title: 'Projects - John Doe | Web Development Portfolio',
      description:
        'Explore my portfolio of web applications, mobile apps, and creative digital solutions. Built with Angular, React, Node.js, and modern technologies.',
      keywords:
        'web development projects, angular projects, react projects, portfolio, full stack developer projects',
      author: 'John Doe',
    });
  }

  filterProjects(): void {
    let filtered = [...this.allProjects];

    // Apply category filter
    if (this.activeCategory !== 'all') {
      filtered = filtered.filter(
        (project) => project.category === this.activeCategory
      );
    }

    // Apply search filter
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(term))
      );
    }

    this.filteredProjects = filtered;
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
    this.filterProjects();
  }

  getCategoryButtonClass(category: string): string {
    const baseClasses =
      'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200';
    const activeClasses = 'bg-primary-600 text-white';
    const inactiveClasses =
      'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 border border-gray-300 dark:border-gray-600';

    return `${baseClasses} ${
      this.activeCategory === category ? activeClasses : inactiveClasses
    }`;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.activeCategory = 'all';
    this.filterProjects();
  }

  loadMoreProjects(): void {
    this.loadingMore = true;
    // Simulate loading more projects
    setTimeout(() => {
      this.loadingMore = false;
      this.hasMoreProjects = false;
    }, 1500);
  }

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }

  navigateToContact(): void {
    window.location.href = '/contact';
  }

  viewResume(): void {
    window.location.href = '/resume';
  }
}
