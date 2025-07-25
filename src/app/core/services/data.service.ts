import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project } from '../../shared/interfaces/project.interface';
import { Skill } from '../../shared/interfaces/skill.interface';
import { TimelineItem } from '../../shared/interfaces/timeline.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    // Mock data - replace with actual API call
    const projects: Project[] = [
      {
        id: 1,
        title: 'E-Commerce Platform',
        description:
          'Modern e-commerce solution built with Angular and Node.js',
        longDescription:
          'A full-stack e-commerce platform featuring user authentication, product management, shopping cart, payment integration, and admin dashboard.',
        image: '/assets/images/project1.jpg',
        technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript'],
        githubUrl: 'https://github.com/username/ecommerce',
        liveUrl: 'https://ecommerce-demo.com',
        featured: true,
        category: 'web',
        createdAt: new Date('2024-01-15'),
      },
      {
        id: 2,
        title: 'Task Management App',
        description:
          'Collaborative task management application with real-time updates',
        longDescription:
          'A comprehensive task management solution with team collaboration features, real-time notifications, and project tracking.',
        image: '/assets/images/project2.jpg',
        technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
        githubUrl: 'https://github.com/username/taskmanager',
        liveUrl: 'https://taskmanager-demo.com',
        featured: true,
        category: 'web',
        createdAt: new Date('2023-11-20'),
      },
      {
        id: 3,
        title: 'Weather Mobile App',
        description: 'Cross-platform mobile weather application',
        longDescription:
          'A beautiful weather app providing current conditions, forecasts, and location-based weather alerts.',
        image: '/assets/images/project3.jpg',
        technologies: ['React Native', 'TypeScript', 'OpenWeather API'],
        githubUrl: 'https://github.com/username/weather-app',
        featured: false,
        category: 'mobile',
        createdAt: new Date('2023-09-10'),
      },
    ];

    return of(projects);
  }

  getSkills(): Observable<Skill[]> {
    const skills: Skill[] = [
      {
        name: 'Angular',
        level: 95,
        category: 'frontend',
        icon: 'fab fa-angular',
      },
      { name: 'React', level: 90, category: 'frontend', icon: 'fab fa-react' },
      {
        name: 'TypeScript',
        level: 90,
        category: 'frontend',
        icon: 'fab fa-js-square',
      },
      {
        name: 'Node.js',
        level: 85,
        category: 'backend',
        icon: 'fab fa-node-js',
      },
      { name: 'Python', level: 80, category: 'backend', icon: 'fab fa-python' },
      {
        name: 'MongoDB',
        level: 75,
        category: 'database',
        icon: 'fas fa-database',
      },
      {
        name: 'PostgreSQL',
        level: 80,
        category: 'database',
        icon: 'fas fa-database',
      },
      { name: 'Docker', level: 70, category: 'tools', icon: 'fab fa-docker' },
      { name: 'AWS', level: 75, category: 'tools', icon: 'fab fa-aws' },
    ];

    return of(skills);
  }

  getTimelineItems(): Observable<TimelineItem[]> {
    const timeline: TimelineItem[] = [
      {
        id: 1,
        title: 'Senior Full Stack Developer',
        company: 'Tech Solutions Inc.',
        location: 'San Francisco, CA',
        startDate: new Date('2022-03-01'),
        current: true,
        description: [
          'Lead development of scalable web applications using Angular and Node.js',
          'Mentor junior developers and conduct code reviews',
          'Implement CI/CD pipelines and DevOps practices',
        ],
        type: 'experience',
        icon: 'fas fa-briefcase',
      },
      {
        id: 2,
        title: 'Full Stack Developer',
        company: 'StartupXYZ',
        location: 'New York, NY',
        startDate: new Date('2020-06-01'),
        endDate: new Date('2022-02-28'),
        current: false,
        description: [
          'Developed and maintained multiple client projects',
          'Collaborated with design team to implement pixel-perfect UIs',
          'Optimized application performance and user experience',
        ],
        type: 'experience',
        icon: 'fas fa-briefcase',
      },
      {
        id: 3,
        title: 'Master of Computer Science',
        institution: 'Stanford University',
        location: 'Stanford, CA',
        startDate: new Date('2018-09-01'),
        endDate: new Date('2020-05-01'),
        current: false,
        description: [
          'Specialized in Software Engineering and AI',
          'GPA: 3.8/4.0',
          'Research in Machine Learning applications',
        ],
        type: 'education',
        icon: 'fas fa-graduation-cap',
      },
    ];

    return of(timeline);
  }
}
