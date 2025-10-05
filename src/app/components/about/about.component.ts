import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>About CryptoExchange</h1>
          <p>Leading the future of digital asset trading with innovation, security, and transparency</p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission">
      <div class="container">
        <div class="mission-content">
          <div class="mission-text">
            <h2>Our Mission</h2>
            <p>
              We are committed to democratizing access to digital assets by providing a secure, 
              transparent, and user-friendly cryptocurrency trading platform. Our mission is to 
              empower individuals and institutions worldwide to participate in the digital economy 
              with confidence and ease.
            </p>
            <p>
              Through cutting-edge technology, regulatory compliance, and exceptional customer service, 
              we strive to be the most trusted cryptocurrency exchange platform globally.
            </p>
          </div>
          <div class="mission-visual">
            <div class="visual-card">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>Pioneering the next generation of trading technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values">
      <div class="container">
        <div class="section-header">
          <h2>Our Values</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div class="values-grid">
          <div class="value-card" *ngFor="let value of values">
            <div class="value-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path [attr.d]="value.icon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>{{value.title}}</h3>
            <p>{{value.description}}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team">
      <div class="container">
        <div class="section-header">
          <h2>Leadership Team</h2>
          <p>Meet the visionaries behind our platform</p>
        </div>
        <div class="team-grid">
          <div class="team-member" *ngFor="let member of teamMembers">
            <div class="member-photo">
              <img [src]="member.photo" [alt]="member.name" class="photo">
            </div>
            <div class="member-info">
              <h3>{{member.name}}</h3>
              <p class="position">{{member.position}}</p>
              <p class="bio">{{member.bio}}</p>
              <div class="social-links">
                <a [href]="member.linkedin" target="_blank" rel="noopener noreferrer" class="social-link">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zM4 2a2 2 0 100 4 2 2 0 000-4z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a [href]="member.twitter" target="_blank" rel="noopener noreferrer" class="social-link">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Stats -->
    <section class="company-stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item" *ngFor="let stat of companyStats">
            <div class="stat-number">{{stat.value}}</div>
            <div class="stat-label">{{stat.label}}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline">
      <div class="container">
        <div class="section-header">
          <h2>Our Journey</h2>
          <p>Key milestones in our company's history</p>
        </div>
        <div class="timeline-container">
          <div class="timeline-item" *ngFor="let milestone of milestones">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-date">{{milestone.date}}</div>
              <h3>{{milestone.title}}</h3>
              <p>{{milestone.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Join Our Mission</h2>
          <p>Be part of the future of digital asset trading. Start your journey with us today.</p>
          <div class="cta-actions">
            <a href="#" class="btn btn-primary">Start Trading</a>
            <a href="#" class="btn btn-secondary">View Careers</a>
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

    .mission {
      padding: 6rem 0;
      background-color: var(--background-color);
    }

    .mission-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .mission-text h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
    }

    .mission-text p {
      font-size: 1.125rem;
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .visual-card {
      background-color: var(--surface-color);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      padding: 2rem;
      text-align: center;
      box-shadow: var(--shadow-medium);
    }

    .card-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      border-radius: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      color: white;
    }

    .card-icon svg {
      width: 40px;
      height: 40px;
    }

    .visual-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .values {
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

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .value-card {
      background-color: var(--background-color);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .value-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-large);
    }

    .value-icon {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      color: white;
    }

    .value-icon svg {
      width: 32px;
      height: 32px;
    }

    .value-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .value-card p {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .team {
      padding: 6rem 0;
      background-color: var(--background-color);
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .team-member {
      background-color: var(--surface-color);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .team-member:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-large);
    }

    .member-photo {
      margin-bottom: 1.5rem;
    }

    .photo {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid var(--border-color);
    }

    .member-info h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
    }

    .position {
      color: var(--primary-color);
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .bio {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .social-link {
      width: 40px;
      height: 40px;
      background-color: var(--background-color);
      border: 1px solid var(--border-color);
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateY(-2px);
    }

    .social-link svg {
      width: 20px;
      height: 20px;
    }

    .company-stats {
      padding: 4rem 0;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      color: white;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 1.125rem;
      opacity: 0.9;
    }

    .timeline {
      padding: 6rem 0;
      background-color: var(--surface-color);
    }

    .timeline-container {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
    }

    .timeline-container::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: var(--border-color);
      transform: translateX(-50%);
    }

    .timeline-item {
      display: flex;
      margin-bottom: 3rem;
      position: relative;
    }

    .timeline-item:nth-child(odd) {
      flex-direction: row;
    }

    .timeline-item:nth-child(even) {
      flex-direction: row-reverse;
    }

    .timeline-marker {
      width: 16px;
      height: 16px;
      background-color: var(--primary-color);
      border: 4px solid var(--surface-color);
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }

    .timeline-content {
      background-color: var(--background-color);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      padding: 2rem;
      width: 45%;
      box-shadow: var(--shadow-light);
    }

    .timeline-date {
      color: var(--primary-color);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .timeline-content h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .timeline-content p {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .cta {
      padding: 6rem 0;
      background-color: var(--background-color);
      text-align: center;
    }

    .cta-content h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .cta-content p {
      font-size: 1.125rem;
      color: var(--text-secondary);
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2rem;
      }

      .mission-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .values-grid,
      .team-grid {
        grid-template-columns: 1fr;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .timeline-container::before {
        left: 20px;
      }

      .timeline-item {
        flex-direction: row !important;
      }

      .timeline-marker {
        left: 20px;
      }

      .timeline-content {
        width: calc(100% - 60px);
        margin-left: 40px;
      }

      .cta-actions {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  values = [
    {
      title: 'Security First',
      description: 'We prioritize the security of our users\' assets with industry-leading security measures and regular audits.',
      icon: 'M12 15l-3-3h6l-3 3z M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9z M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42'
    },
    {
      title: 'Transparency',
      description: 'We believe in complete transparency in our operations, fees, and business practices.',
      icon: 'M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z'
    },
    {
      title: 'Innovation',
      description: 'We continuously innovate to provide cutting-edge trading tools and user experiences.',
      icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
    },
    {
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do, driving our product development and service excellence.',
      icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75'
    }
  ];

  teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Co-Founder',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Former Goldman Sachs executive with 15+ years in financial services. Led multiple successful fintech startups.',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson'
    },
    {
      name: 'Michael Chen',
      position: 'CTO & Co-Founder',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Blockchain expert and former Google engineer. Built scalable trading systems for major exchanges.',
      linkedin: 'https://linkedin.com/in/michaelchen',
      twitter: 'https://twitter.com/michaelchen'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Chief Security Officer',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Cybersecurity specialist with expertise in blockchain security. Former NSA security analyst.',
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      twitter: 'https://twitter.com/emilyrodriguez'
    }
  ];

  companyStats = [
    { value: '2018', label: 'Founded' },
    { value: '2M+', label: 'Users' },
    { value: '$50B+', label: 'Trading Volume' },
    { value: '150+', label: 'Countries' }
  ];

  milestones = [
    {
      date: '2018',
      title: 'Company Founded',
      description: 'CryptoExchange was founded with a vision to democratize cryptocurrency trading.'
    },
    {
      date: '2019',
      title: 'Platform Launch',
      description: 'Launched our first trading platform with support for major cryptocurrencies.'
    },
    {
      date: '2020',
      title: 'Mobile App Release',
      description: 'Released our mobile applications for iOS and Android platforms.'
    },
    {
      date: '2021',
      title: '1 Million Users',
      description: 'Reached the milestone of 1 million registered users worldwide.'
    },
    {
      date: '2022',
      title: 'Advanced Trading Tools',
      description: 'Introduced advanced trading features including futures and margin trading.'
    },
    {
      date: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to 150+ countries with localized support.'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
