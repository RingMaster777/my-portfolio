import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactForm } from '../../interfaces/contact.interface';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      try {
        const formData: ContactForm = this.contactForm.value;
        // Simulate API call
        await this.sendEmail(formData);

        this.submitSuccess = true;
        this.submitMessage =
          "Thank you! Your message has been sent successfully. I'll get back to you soon.";
        this.contactForm.reset();
      } catch (error) {
        this.submitSuccess = false;
        this.submitMessage =
          'Sorry, there was an error sending your message. Please try again later.';
      } finally {
        this.isSubmitting = false;

        // Clear message after 5 seconds
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      }
    }
  }

  private async sendEmail(formData: ContactForm): Promise<void> {
    // Mock implementation - replace with actual EmailJS or API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate 90% success rate
        Math.random() > 0.1 ? resolve() : reject(new Error('Network error'));
      }, 2000);
    });
  }
}
