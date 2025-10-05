import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="container">
        <!-- Main Footer Content -->
        <div class="footer-content">
          <!-- Company Info -->
          <div class="footer-section">
            <div class="footer-logo">
              <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                <path d="M19 15L19.5 17L21 17.5L19.5 18L19 20L18.5 18L17 17.5L18.5 17L19 15Z" fill="currentColor"/>
                <path d="M5 15L5.5 17L7 17.5L5.5 18L5 20L4.5 18L3 17.5L4.5 17L5 15Z" fill="currentColor"/>
              </svg>
              <span class="logo-text">CryptoExchange</span>
            </div>
            <p class="footer-description">
              Leading the future of digital asset trading with innovation, security, and transparency. 
              Join millions of users worldwide in the cryptocurrency revolution.
            </p>
            <div class="social-links">
              <a *ngFor="let social of socialLinks" [href]="social.url" target="_blank" rel="noopener noreferrer" class="social-link">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path [attr.d]="social.icon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Trading -->
          <div class="footer-section">
            <h3>Trading</h3>
            <ul class="footer-links">
              <li><a routerLink="/services">Spot Trading</a></li>
              <li><a routerLink="/services">Futures Trading</a></li>
              <li><a routerLink="/services">Margin Trading</a></li>
              <li><a routerLink="/services">Staking</a></li>
              <li><a routerLink="/services">API Trading</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div class="footer-section">
            <h3>Resources</h3>
            <ul class="footer-links">
              <li><a routerLink="/blog">Blog</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Trading Guide</a></li>
              <li><a href="#">API Documentation</a></li>
              <li><a href="#">Fee Schedule</a></li>
            </ul>
          </div>

          <!-- Company -->
          <div class="footer-section">
            <h3>Company</h3>
            <ul class="footer-links">
              <li><a routerLink="/about">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Legal</a></li>
            </ul>
          </div>

          <!-- Support -->
          <div class="footer-section">
            <h3>Support</h3>
            <ul class="footer-links">
              <li><a routerLink="/contact">Contact Us</a></li>
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Status Page</a></li>
              <li><a href="#">Bug Reports</a></li>
              <li><a href="#">Feature Requests</a></li>
            </ul>
          </div>
        </div>

        <!-- Newsletter Signup -->
        <div class="newsletter-section">
          <div class="newsletter-content">
            <div class="newsletter-text">
              <h3>Stay Updated</h3>
              <p>Get the latest crypto news and trading insights delivered to your inbox.</p>
            </div>
            <form class="newsletter-form">
              <input type="email" placeholder="Enter your email" class="newsletter-input" required>
              <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <div class="copyright">
              <p>&copy; {{currentYear}} CryptoExchange. All rights reserved.</p>
            </div>
            <div class="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Risk Disclosure</a>
            </div>
          </div>
        </div>

        <!-- Trust Badges -->
        <div class="trust-badges">
          <div class="trust-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>SSL Secured</span>
          </div>
          <div class="trust-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15l-3-3h6l-3 3z M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Regulated</span>
          </div>
          <div class="trust-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Insured</span>
          </div>
          <div class="trust-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--surface-color);
      border-top: 1px solid var(--border-color);
      padding: 4rem 0 2rem;
      margin-top: 4rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .footer-section h3 {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }

    .logo-icon {
      width: 32px;
      height: 32px;
      color: var(--primary-color);
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    .footer-description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
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

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.75rem;
    }

    .footer-links a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: var(--primary-color);
    }

    .newsletter-section {
      background-color: var(--background-color);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      padding: 2rem;
      margin-bottom: 3rem;
    }

    .newsletter-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }

    .newsletter-text h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
    }

    .newsletter-text p {
      color: var(--text-secondary);
    }

    .newsletter-form {
      display: flex;
      gap: 1rem;
      min-width: 400px;
    }

    .newsletter-input {
      flex: 1;
      padding: 0.75rem 1rem;
      border: 1px solid var(--border-color);
      border-radius: 0.5rem;
      background-color: var(--surface-color);
      color: var(--text-primary);
      font-size: 1rem;
    }

    .newsletter-input:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }

    .newsletter-input::placeholder {
      color: var(--text-muted);
    }

    .footer-bottom {
      border-top: 1px solid var(--border-color);
      padding-top: 2rem;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .copyright p {
      color: var(--text-secondary);
      margin: 0;
    }

    .footer-bottom-links {
      display: flex;
      gap: 2rem;
    }

    .footer-bottom-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.3s ease;
    }

    .footer-bottom-links a:hover {
      color: var(--primary-color);
    }

    .trust-badges {
      display: flex;
      justify-content: center;
      gap: 3rem;
      padding-top: 2rem;
      border-top: 1px solid var(--border-color);
    }

    .trust-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-secondary);
      font-size: 0.875rem;
      font-weight: 500;
    }

    .trust-item svg {
      width: 20px;
      height: 20px;
      color: var(--accent-color);
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .footer-content {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
      }
      
      .footer-section:first-child {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 768px) {
      .footer {
        padding: 3rem 0 2rem;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .newsletter-content {
        flex-direction: column;
        text-align: center;
      }

      .newsletter-form {
        min-width: auto;
        width: 100%;
        max-width: 400px;
      }

      .footer-bottom-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .footer-bottom-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
      }

      .trust-badges {
        flex-wrap: wrap;
        gap: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .newsletter-form {
        flex-direction: column;
      }

      .trust-badges {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `]
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

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
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/cryptoexchange',
      icon: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z M9.75 15.02V8.98L15 12l-5.25 3.02z'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
