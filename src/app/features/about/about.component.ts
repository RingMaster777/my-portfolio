import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { SeoService } from '../../core/services/seo.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SkillBarComponent } from '../../shared/components/skill-bar/skill-bar.component';
import { Skill, SkillCategory } from '../../shared/interfaces/skill.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SkillBarComponent, ButtonComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  skillCategories: SkillCategory[] = [];

  values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description:
        'Always exploring new technologies and approaches to solve problems more effectively.',
    },
    {
      icon: 'fas fa-users',
      title: 'Collaboration',
      description:
        'Great products are built by great teams. I believe in open communication and shared success.',
    },
    {
      icon: 'fas fa-heart',
      title: 'User-Centric',
      description:
        'Every line of code should serve the end user. I prioritize usability and accessibility.',
    },
    {
      icon: 'fas fa-cog',
      title: 'Quality',
      description:
        'Writing clean, maintainable code with comprehensive testing and documentation.',
    },
    {
      icon: 'fas fa-rocket',
      title: 'Performance',
      description:
        'Optimizing for speed and efficiency without compromising functionality or user experience.',
    },
    {
      icon: 'fas fa-book',
      title: 'Learning',
      description:
        'Technology evolves rapidly. I stay current with trends and continuously expand my skillset.',
    },
  ];

  constructor(
    private dataService: DataService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.loadSkills();
    this.setupSEO();
  }

  private loadSkills(): void {
    this.dataService.getSkills().subscribe((skills: Skill[]) => {
      this.skillCategories = this.groupSkillsByCategory(skills);
    });
  }

  private groupSkillsByCategory(skills: Skill[]): SkillCategory[] {
    const categories = ['Frontend', 'Backend', 'Database', 'Tools'];
    const categoryMap: { [key: string]: string } = {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      tools: 'Tools',
    };

    return categories
      .map((categoryName) => ({
        name: categoryName,
        skills: skills.filter(
          (skill) => categoryMap[skill.category] === categoryName
        ),
      }))
      .filter((category) => category.skills.length > 0);
  }

  private setupSEO(): void {
    this.seoService.updateMetaTags({
      title: 'About Me - John Doe | Full Stack Developer',
      description:
        'Learn more about John Doe, a passionate full-stack developer with 5+ years of experience in Angular, React, Node.js, and modern web technologies. Based in San Francisco.',
      keywords:
        'about john doe, full stack developer, angular expert, react developer, web development skills, san francisco developer',
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
}
