import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  currentTitle = '';
  private titleIndex = 0;
  private charIndex = 0;
  private typingSpeed = 100;
  private deletingSpeed = 50;
  private pauseDuration = 2000;
  private typingInterval?: number;

  titles = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Innovator',
  ];

  services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Frontend Development',
      description:
        'Creating beautiful, responsive, and interactive user interfaces with modern frameworks.',
      technologies: [
        'Angular',
        'React',
        'Vue.js',
        'TypeScript',
        'Tailwind CSS',
      ],
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Development',
      description:
        'Building robust, scalable server-side applications and APIs with best practices.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker'],
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Development',
      description:
        'Developing cross-platform mobile applications that work seamlessly across devices.',
      technologies: ['React Native', 'Flutter', 'Ionic', 'PWA', 'App Store'],
    },
  ];

  featuredProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with advanced features',
      image: '/assets/images/project1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool',
      image: '/assets/images/project2.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
    },
    {
      title: 'Weather Mobile App',
      description: 'Beautiful cross-platform weather application',
      image: '/assets/images/project3.jpg',
      technologies: ['React Native', 'API Integration'],
    },
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.startTypingAnimation();
    this.setupSEO();
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  private setupSEO(): void {
    this.seoService.updateMetaTags({
      title: 'John Doe - Full Stack Developer & UI/UX Enthusiast',
      description:
        'Passionate full-stack developer with 5+ years of experience creating beautiful, functional, and user-centered digital experiences. Specializing in Angular, React, Node.js, and modern web technologies.',
      keywords:
        'full stack developer, angular developer, react developer, web development, ui ux design, frontend developer, backend developer',
      author: 'John Doe',
      image: '/assets/images/profile.jpg',
    });
  }

  private startTypingAnimation(): void {
    this.typingInterval = setInterval(() => {
      const currentFullTitle = this.titles[this.titleIndex];

      if (this.charIndex < currentFullTitle.length) {
        // Typing
        this.currentTitle = currentFullTitle.substring(0, this.charIndex + 1);
        this.charIndex++;
      } else {
        // Pause, then start deleting
        setTimeout(() => {
          this.deleteText();
        }, this.pauseDuration);
      }
    }, this.typingSpeed);
  }

  private deleteText(): void {
    const deleteInterval = setInterval(() => {
      if (this.charIndex > 0) {
        this.charIndex--;
        this.currentTitle = this.titles[this.titleIndex].substring(
          0,
          this.charIndex
        );
      } else {
        clearInterval(deleteInterval);
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
        // Restart typing
        setTimeout(() => {
          this.startTypingAnimation();
        }, 500);
      }
    }, this.deletingSpeed);
  }

  scrollToProjects(): void {
    document.getElementById('featured-projects')?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  scrollToAbout(): void {
    document.getElementById('about-preview')?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  downloadResume(): void {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  }

  navigateToAbout(): void {
    // Use Angular Router navigation
    window.location.href = '/about';
  }

  navigateToProjects(): void {
    window.location.href = '/projects';
  }

  navigateToContact(): void {
    window.location.href = '/contact';
  }
}
