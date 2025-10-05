import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Get in Touch</h1>
          <p>Have questions? We're here to help. Reach out to our team for support, partnerships, or general inquiries.</p>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <!-- Contact Form -->
          <div class="contact-form-container">
            <h2>Send us a Message</h2>
            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    [(ngModel)]="formData.firstName" 
                    required 
                    class="form-input"
                  >
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    [(ngModel)]="formData.lastName" 
                    required 
                    class="form-input"
                  >
                </div>
              </div>
              
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  [(ngModel)]="formData.email" 
                  required 
                  class="form-input"
                >
              </div>
              
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  [(ngModel)]="formData.phone" 
                  class="form-input"
                >
              </div>
              
              <div class="form-group">
                <label for="subject">Subject *</label>
                <select 
                  id="subject" 
                  name="subject" 
                  [(ngModel)]="formData.subject" 
                  required 
                  class="form-select"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="media">Media Inquiry</option>
                  <option value="careers">Careers</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  [(ngModel)]="formData.message" 
                  required 
                  rows="5" 
                  class="form-textarea"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary" 
                [disabled]="!contactForm.form.valid || isSubmitting"
              >
                <span *ngIf="!isSubmitting">Send Message</span>
                <span *ngIf="isSubmitting">Sending...</span>
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="contact-info">
            <h2>Contact Information</h2>
            <p>We're here to help and answer any question you might have. We look forward to hearing from you!</p>
            
            <div class="info-cards">
              <div class="info-card" *ngFor="let info of contactInfo">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path [attr.d]="info.icon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>{{info.title}}</h3>
                  <p *ngIf="info.type === 'text'">{{info.value}}</p>
                  <a *ngIf="info.type === 'email'" [href]="'mailto:' + info.value">{{info.value}}</a>
                  <a *ngIf="info.type === 'phone'" [href]="'tel:' + info.value">{{info.value}}</a>
                  <a *ngIf="info.type === 'link'" [href]="info.value" target="_blank" rel="noopener noreferrer">{{info.label || info.value}}</a>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="social-section">
              <h3>Follow Us</h3>
              <div class="social-links">
                <a *ngFor="let social of socialLinks" [href]="social.url" target="_blank" rel="noopener noreferrer" class="social-link">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path [attr.d]="social.icon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>{{social.name}}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq">
      <div class="container">
        <div class="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to common questions about our platform</p>
        </div>
        <div class="faq-list">
          <div class="faq-item" *ngFor="let faq of faqs; let i = index">
            <button class="faq-question" (click)="toggleFaq(i)">
              <span>{{faq.question}}</span>
              <svg class="faq-icon" [class.rotated]="faq.isOpen" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="faq-answer" [class.open]="faq.isOpen">
              <p>{{faq.answer}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Office Locations -->
    <section class="offices">
      <div class="container">
        <div class="section-header">
          <h2>Our Offices</h2>
          <p>Visit us at one of our global locations</p>
        </div>
        <div class="offices-grid">
          <div class="office-card" *ngFor="let office of offices">
            <div class="office-image">
              <img [src]="office.image" [alt]="office.city" class="office-photo">
            </div>
            <div class="office-info">
              <h3>{{office.city}}</h3>
              <p class="office-address">{{office.address}}</p>
              <div class="office-details">
                <div class="detail">
                  <strong>Phone:</strong> {{office.phone}}
                </div>
                <div class="detail">
                  <strong>Email:</strong> {{office.email}}
                </div>
                <div class="detail">
                  <strong>Hours:</strong> {{office.hours}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 6rem 0 4rem;
      background: linear-gradient(135deg, var(--surface-color) 0%, var(--background-color) 100%);
      text-align: center;
    }

    .hero-content h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .hero-content p {
      font-size: 1.25rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }

    .contact-section {
      padding: 6rem 0;
      background-color: var(--background-color);
    }

    .contact-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
    }

    .contact-form-container h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
      color: var(--text-primary);
    }

    .contact-form {
      background-color: var(--surface-color);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      padding: 2rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: var(--text-primary);
    }

    .form-input,
    .form-select,
    .form-textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid var(--border-color);
      border-radius: 0.5rem;
      background-color: var(--background-color);
      color: var(--text-primary);
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .form-input:focus,
    .form-select:focus,
    .form-textarea:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }

    .contact-info h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .contact-info > p {
      color: var(--text-secondary);
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .info-cards {
      margin-bottom: 3rem;
    }

    .info-card {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.5rem;
      background-color: var(--surface-color);
      border: 1px solid var(--border-color);
      border-radius: 0.75rem;
      margin-bottom: 1rem;
      transition: all 0.3s ease;
    }

    .info-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-medium);
    }

    .info-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }

    .info-icon svg {
      width: 24px;
      height: 24px;
    }

    .info-content h3 {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
    }

    .info-content p,
    .info-content a {
      color: var(--text-secondary);
      text-decoration: none;
    }

    .info-content a:hover {
      color: var(--primary-color);
    }

    .social-section h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .social-links {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      background-color: var(--surface-color);
      border: 1px solid var(--border-color);
      border-radius: 0.5rem;
      color: var(--text-secondary);
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateX(4px);
    }

    .social-link svg {
      width: 20px;
      height: 20px;
    }

    .faq {
      padding: 6rem 0;
      background-color: var(--surface-color);
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .section-header p {
      font-size: 1.125rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }

    .faq-list {
      max-width: 800px;
      margin: 0 auto;
    }

    .faq-item {
      background-color: var(--background-color);
      border: 1px solid var(--border-color);
      border-radius: 0.75rem;
      margin-bottom: 1rem;
      overflow: hidden;
    }

    .faq-question {
      width: 100%;
      padding: 1.5rem;
      background: none;
      border: none;
      text-align: left;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text-primary);
      transition: background-color 0.3s ease;
    }

    .faq-question:hover {
      background-color: var(--surface-color);
    }

    .faq-icon {
      width: 20px;
      height: 20px;
      transition: transform 0.3s ease;
    }

    .faq-icon.rotated {
      transform: rotate(180deg);
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .faq-answer.open {
      max-height: 200px;
    }

    .faq-answer p {
      padding: 0 1.5rem 1.5rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .offices {
      padding: 6rem 0;
      background-color: var(--background-color);
    }

    .offices-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .office-card {
      background-color: var(--surface-color);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .office-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-large);
    }

    .office-image {
      height: 200px;
      overflow: hidden;
    }

    .office-photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .office-info {
      padding: 1.5rem;
    }

    .office-info h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
    }

    .office-address {
      color: var(--text-secondary);
      margin-bottom: 1rem;
    }

    .office-details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .detail {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }

    .detail strong {
      color: var(--text-primary);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2rem;
      }

      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .offices-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  isSubmitting = false;
  
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  contactInfo = [
    {
      title: 'Email',
      value: 'support@cryptoexchange.com',
      type: 'email',
      icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6'
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      type: 'phone',
      icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'
    },
    {
      title: 'Address',
      value: '123 Crypto Street, Digital City, DC 12345',
      type: 'text',
      icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 7a3 3 0 100 6 3 3 0 000-6z'
    },
    {
      title: 'Support Hours',
      value: '24/7 Customer Support',
      type: 'text',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      label: '24/7 Customer Support'
    }
  ];

  socialLinks = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/cryptoexchange',
      icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/cryptoexchange',
      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zM4 2a2 2 0 100 4 2 2 0 000-4z'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/cryptoexchange',
      icon: 'M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.53-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/cryptoexchange',
      icon: 'M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z'
    }
  ];

  faqs = [
    {
      question: 'How do I get started with trading?',
      answer: 'Getting started is easy! Simply create an account, complete the verification process, deposit funds, and you can begin trading. We offer a demo mode for new users to practice trading without risking real money.',
      isOpen: false
    },
    {
      question: 'What are the trading fees?',
      answer: 'Our trading fees are competitive and transparent. For spot trading, we charge 0.1% for both maker and taker orders. Fees decrease based on your 30-day trading volume. Check our fee structure page for detailed information.',
      isOpen: false
    },
    {
      question: 'Is my account secure?',
      answer: 'Yes, we prioritize security above all else. We use industry-leading security measures including cold storage, two-factor authentication, SSL encryption, and regular security audits. Your funds are protected with insurance coverage.',
      isOpen: false
    },
    {
      question: 'How long does withdrawal take?',
      answer: 'Withdrawal processing times vary by cryptocurrency and network conditions. Most withdrawals are processed within 30 minutes to 2 hours. Some networks may take longer during high traffic periods.',
      isOpen: false
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Yes! We provide 24/7 customer support through live chat, email, and our support center. Our experienced team is always ready to help with any questions or issues you may have.',
      isOpen: false
    },
    {
      question: 'Can I trade on mobile devices?',
      answer: 'Absolutely! We offer full-featured mobile apps for both iOS and Android devices. You can trade, monitor markets, and manage your account from anywhere with the same functionality as our web platform.',
      isOpen: false
    }
  ];

  offices = [
    {
      city: 'New York',
      address: '123 Wall Street, New York, NY 10005',
      phone: '+1 (555) 123-4567',
      email: 'ny@cryptoexchange.com',
      hours: 'Mon-Fri: 9AM-6PM EST',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=200&fit=crop'
    },
    {
      city: 'London',
      address: '456 Canary Wharf, London E14 5AB, UK',
      phone: '+44 20 7946 0958',
      email: 'london@cryptoexchange.com',
      hours: 'Mon-Fri: 9AM-5PM GMT',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=200&fit=crop'
    },
    {
      city: 'Singapore',
      address: '789 Marina Bay, Singapore 018956',
      phone: '+65 6123 4567',
      email: 'singapore@cryptoexchange.com',
      hours: 'Mon-Fri: 9AM-6PM SGT',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=200&fit=crop'
    }
  ];

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    if (this.formData.firstName && this.formData.lastName && this.formData.email && this.formData.subject && this.formData.message) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        this.formData = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        };
      }, 2000);
    }
  }

  toggleFaq(index: number) {
    this.faqs.forEach((faq, i) => {
      faq.isOpen = i === index ? !faq.isOpen : false;
    });
  }
}
