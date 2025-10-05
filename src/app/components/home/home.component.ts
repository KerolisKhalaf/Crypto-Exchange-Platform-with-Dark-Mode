import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styles: [`
    .hero {
      padding: 6rem 0;
      background: linear-gradient(135deg, var(--surface-color) 0%, var(--background-color) 100%);
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
    }

    .gradient-text {
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-description {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
    }

    .hero-visual {
      display: flex;
      justify-content: center;
    }

    .crypto-chart {
      background-color: var(--surface-color);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      padding: 1.5rem;
      width: 100%;
      max-width: 400px;
      box-shadow: var(--shadow-large);
    }

    .chart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--border-color);
    }

    .market-status {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--accent-color);
      font-size: 0.875rem;
      font-weight: 500;
    }

    .status-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--text-muted);
    }

    .status-indicator.active {
      background-color: var(--accent-color);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .crypto-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .crypto-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem;
      border-radius: 0.5rem;
      transition: background-color 0.3s ease;
    }

    .crypto-item:hover {
      background-color: var(--background-color);
    }

    .crypto-info {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .crypto-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    .crypto-details {
      display: flex;
      flex-direction: column;
    }

    .crypto-symbol {
      font-weight: 600;
      color: var(--text-primary);
    }

    .crypto-name {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }

    .crypto-price {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .price {
      font-weight: 600;
      color: var(--text-primary);
    }

    .change {
      font-size: 0.875rem;
      font-weight: 500;
    }

    .change.positive {
      color: var(--accent-color);
    }

    .change.negative {
      color: #ef4444;
    }

    .features {
      padding: 6rem 0;
      background-color: var(--background-color);
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

    .feature-card {
      text-align: center;
      transition: transform 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-4px);
    }

    .feature-icon {
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

    .feature-icon svg {
      width: 32px;
      height: 32px;
    }

    .feature-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .feature-card p {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .stats {
      padding: 4rem 0;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      color: white;
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

    .cta {
      padding: 6rem 0;
      background-color: var(--surface-color);
    }

    .cta-content {
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
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
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-actions {
        justify-content: center;
        flex-wrap: wrap;
      }

      .grid-cols-3,
      .grid-cols-4 {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .stats {
        padding: 3rem 0;
      }

      .stat-number {
        font-size: 2rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  cryptoData = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: '43,250.00',
      change: 2.34,
      icon: 'assets/images/bitcoin.svg'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: '2,650.00',
      change: -1.23,
      icon: 'assets/images/ethereum.svg'
    },
    {
      symbol: 'BNB',
      name: 'Binance Coin',
      price: '315.00',
      change: 0.87,
      icon: 'assets/images/binance.svg'
    },
    {
      symbol: 'ADA',
      name: 'Cardano',
      price: '0.45',
      change: 3.12,
      icon: 'assets/images/cardano.svg'
    }
  ];

  features = [
    {
      title: 'Secure Trading',
      description: 'Bank-level security with multi-layer protection for your assets and personal data.',
      icon: 'M12 15l-3-3h6l-3 3z M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9z M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42'
    },
    {
      title: 'Fast Execution',
      description: 'Lightning-fast order execution with advanced matching engine technology.',
      icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you with any questions or issues.',
      icon: 'M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z'
    }
  ];

  stats = [
    { value: '2M+', label: 'Active Users' },
    { value: '$50B+', label: 'Trading Volume' },
    { value: '150+', label: 'Cryptocurrencies' },
    { value: '99.9%', label: 'Uptime' }
  ];

  constructor() {}

  ngOnInit() {}
}
