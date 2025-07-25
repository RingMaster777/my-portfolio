import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks: SocialLink[] = [
    {
      platform: 'GitHub',
      url: 'https://github.com/johndoe',
      icon: 'fab fa-github',
      color: '#333',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/johndoe',
      icon: 'fab fa-linkedin-in',
      color: '#0077b5',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/johndoe',
      icon: 'fab fa-twitter',
      color: '#1da1f2',
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/johndoe',
      icon: 'fab fa-instagram',
      color: '#e4405f',
    },
  ];

  faqs = [
    {
      question: 'What is your typical project timeline?',
      answer:
        'Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. I always provide detailed timelines during our initial consultation.',
      open: false,
    },
    {
      question: 'Do you work with clients remotely?',
      answer:
        "Yes! I work with clients worldwide. I'm experienced in remote collaboration using tools like Slack, Zoom, and project management platforms to ensure smooth communication throughout the project.",
      open: false,
    },
    {
      question: 'What technologies do you specialize in?',
      answer:
        'I specialize in modern web technologies including Angular, React, Node.js, TypeScript, and various databases. I also have experience with mobile development, cloud platforms (AWS, Azure), and DevOps practices.',
      open: false,
    },
    {
      question: 'Do you provide ongoing maintenance and support?',
      answer:
        'Absolutely! I offer various maintenance packages to keep your application updated, secure, and running smoothly. This includes bug fixes, security updates, performance optimization, and feature enhancements.',
      open: false,
    },
    {
      question: 'What is your preferred way to communicate during projects?',
      answer:
        'I believe in transparent and regular communication. I typically use a combination of email for formal updates, Slack for quick questions, and scheduled video calls for milestone reviews and important discussions.',
      open: false,
    },
    {
      question: 'Do you work on both frontend and backend development?',
      answer:
        "Yes, I'm a full-stack developer with expertise in both frontend and backend technologies. I can handle everything from user interface design to server architecture and database design.",
      open: false,
    },
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.setupSEO();
  }

  private setupSEO(): void {
    this.seoService.updateMetaTags({
      title: "Contact Me - John Doe | Let's Build Something Amazing",
      description:
        'Get in touch with John Doe, full stack developer. Available for new projects and collaborations. Contact via email, phone, or social media.',
      keywords:
        'contact john doe, hire full stack developer, web development services, freelance developer contact',
      author: 'John Doe',
    });
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
    // Close other FAQs (accordion behavior)
    this.faqs.forEach((faq, i) => {
      if (i !== index) {
        faq.open = false;
      }
    });
  }
}
