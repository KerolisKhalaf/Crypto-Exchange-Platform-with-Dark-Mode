import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar" [class.dark]="isDarkMode">
      <div class="container">
        <div class="navbar-content">
          <!-- Logo -->
          <div class="logo">
            <a routerLink="/" class="logo-link">
              <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                <path d="M19 15L19.5 17L21 17.5L19.5 18L19 20L18.5 18L17 17.5L18.5 17L19 15Z" fill="currentColor"/>
                <path d="M5 15L5.5 17L7 17.5L5.5 18L5 20L4.5 18L3 17.5L4.5 17L5 15Z" fill="currentColor"/>
              </svg>
              <span class="logo-text">CryptoExchange</span>
            </a>
          </div>

          <!-- Navigation Links -->
          <div class="nav-links" [class.mobile-open]="mobileMenuOpen">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMobileMenu()">Home</a>
            <a routerLink="/about" routerLinkActive="active" (click)="closeMobileMenu()">About</a>
            <a routerLink="/services" routerLinkActive="active" (click)="closeMobileMenu()">Services</a>
            <a routerLink="/blog" routerLinkActive="active" (click)="closeMobileMenu()">Blog</a>
            <a routerLink="/contact" routerLinkActive="active" (click)="closeMobileMenu()">Contact</a>
          </div>

          <!-- Right Side Actions -->
          <div class="nav-actions">
            <!-- Dark Mode Toggle -->
            <button class="theme-toggle" (click)="toggleTheme()" [attr.aria-label]="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'">
              <svg *ngIf="!isDarkMode" class="theme-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg *ngIf="isDarkMode" class="theme-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
                <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
                <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
                <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
                <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
              </svg>
            </button>

            <!-- CTA Button -->
            <a href="#" class="btn btn-primary">Get Started</a>

            <!-- Mobile Menu Toggle -->
            <button class="mobile-toggle" (click)="toggleMobileMenu()" [attr.aria-label]="mobileMenuOpen ? 'Close menu' : 'Open menu'">
              <span class="hamburger-line" [class.active]="mobileMenuOpen"></span>
              <span class="hamburger-line" [class.active]="mobileMenuOpen"></span>
              <span class="hamburger-line" [class.active]="mobileMenuOpen"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background-color: var(--surface-color);
      border-bottom: 1px solid var(--border-color);
      position: sticky;
      top: 0;
      z-index: 1000;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }

    .navbar.dark {
      background-color: rgba(30, 41, 59, 0.8);
    }

    .navbar-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
    }

    .logo-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: var(--text-primary);
      font-weight: 700;
      font-size: 1.25rem;
      transition: color 0.3s ease;
    }

    .logo-link:hover {
      color: var(--primary-color);
    }

    .logo-icon {
      width: 32px;
      height: 32px;
      color: var(--primary-color);
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 0;
      position: relative;
      transition: color 0.3s ease;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--primary-color);
    }

    .nav-links a.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: var(--primary-color);
      border-radius: 1px;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .theme-toggle {
      background: none;
      border: none;
      color: var(--text-secondary);
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.5rem;
      transition: all 0.3s ease;
    }

    .theme-toggle:hover {
      color: var(--primary-color);
      background-color: var(--surface-color);
    }

    .theme-icon {
      width: 20px;
      height: 20px;
    }

    .mobile-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      gap: 4px;
    }

    .hamburger-line {
      width: 24px;
      height: 2px;
      background-color: var(--text-primary);
      transition: all 0.3s ease;
      border-radius: 1px;
    }

    .hamburger-line.active:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger-line.active:nth-child(2) {
      opacity: 0;
    }

    .hamburger-line.active:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: var(--surface-color);
        border-bottom: 1px solid var(--border-color);
        flex-direction: column;
        gap: 0;
        padding: 1rem;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }

      .nav-links.mobile-open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .nav-links a {
        padding: 1rem;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid var(--border-color);
      }

      .nav-links a:last-child {
        border-bottom: none;
      }

      .mobile-toggle {
        display: flex;
      }

      .nav-actions .btn {
        display: none;
      }
    }
  `]
})
export class NavbarComponent implements OnInit {
  isDarkMode = false;
  mobileMenuOpen = false;

  constructor(
    private darkModeService: DarkModeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.darkModeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  toggleTheme() {
    this.darkModeService.toggleDarkMode();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
