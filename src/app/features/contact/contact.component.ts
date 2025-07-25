import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  socialLinks = [
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
  ];

  faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'I offer web development, UI/UX design, and consulting services for startups and businesses.',
      open: false,
    },
    {
      question: 'How can I contact you?',
      answer:
        'You can reach me via email, phone, or the contact form on this page.',
      open: false,
    },
    {
      question: 'Are you available for remote work?',
      answer:
        'Yes, I am available for both remote and onsite projects depending on requirements.',
      open: false,
    },
  ];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateTitle('Contact | Portfolio');
    this.seo.updateDescription(
      'Get in touch for web development, design, and consulting services.'
    );
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
