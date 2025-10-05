import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
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

    .trading-features {
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

    .feature-item {
      margin-bottom: 3rem;
    }

    .feature-content {
      display: flex;
      gap: 2rem;
      align-items: flex-start;
    }

    .feature-icon {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }

    .feature-icon svg {
      width: 32px;
      height: 32px;
    }

    .feature-text h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .feature-text p {
      color: var(--text-secondary);
      margin-bottom: 1rem;
    }

    .feature-list {
      list-style: none;
      padding: 0;
    }

    .feature-list li {
      padding: 0.5rem 0;
      color: var(--text-secondary);
      position: relative;
      padding-left: 1.5rem;
    }

    .feature-list li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--accent-color);
      font-weight: bold;
    }

    .trading-pairs {
      padding: 6rem 0;
      background-color: var(--surface-color);
    }

    .pairs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .pair-card {
      background-color: var(--background-color);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      padding: 1.5rem;
      transition: all 0.3s ease;
    }

    .pair-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-large);
    }

    .pair-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .pair-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .pair-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    .quote-icon {
      margin-left: -10px;
      border: 2px solid var(--background-color);
    }

    .pair-symbol {
      font-weight: 600;
      color: var(--text-primary);
    }

    .pair-price {
      text-align: right;
    }

    .price {
      font-weight: 600;
      color: var(--text-primary);
      display: block;
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

    .pair-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .stat {
      text-align: center;
    }

    .stat-label {
      display: block;
      font-size: 0.875rem;
      color: var(--text-secondary);
      margin-bottom: 0.25rem;
    }

    .stat-value {
      font-weight: 600;
      color: var(--text-primary);
    }

    .advanced-tools {
      padding: 6rem 0;
      background-color: var(--background-color);
    }

    .tools-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .tool-card {
      background-color: var(--surface-color);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .tool-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-large);
    }

    .tool-icon {
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

    .tool-icon svg {
      width: 40px;
      height: 40px;
    }

    .tool-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .tool-card p {
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
    }

    .tool-features {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
    }

    .feature-tag {
      background-color: var(--primary-color);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .fee-structure {
      padding: 6rem 0;
      background-color: var(--surface-color);
    }

    .fee-table {
      max-width: 800px;
      margin: 0 auto;
      background-color: var(--background-color);
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: var(--shadow-medium);
    }

    .table-header {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      background-color: var(--primary-color);
      color: white;
    }

    .table-row {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      border-bottom: 1px solid var(--border-color);
    }

    .table-row:last-child {
      border-bottom: none;
    }

    .table-cell {
      padding: 1rem 1.5rem;
      font-weight: 500;
    }

    .table-row .table-cell {
      color: var(--text-primary);
    }

    .table-row:nth-child(even) {
      background-color: var(--surface-color);
    }

    .cta {
      padding: 6rem 0;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      color: white;
      text-align: center;
    }

    .cta-content h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .cta-content p {
      font-size: 1.125rem;
      margin-bottom: 2rem;
      opacity: 0.9;
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

      .feature-content {
        flex-direction: column;
        text-align: center;
      }

      .grid-cols-2 {
        grid-template-columns: 1fr;
      }

      .pairs-grid {
        grid-template-columns: 1fr;
      }

      .pair-header {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .pair-stats {
        grid-template-columns: 1fr;
      }

      .table-header,
      .table-row {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .cta-actions {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class ServicesComponent implements OnInit {
  tradingFeatures = [
    {
      title: 'Spot Trading',
      description: 'Trade cryptocurrencies instantly at current market prices with our advanced spot trading platform.',
      icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
      features: [
        'Real-time market data',
        'Advanced charting tools',
        'Multiple order types',
        'Low trading fees'
      ]
    },
    {
      title: 'Futures Trading',
      description: 'Trade cryptocurrency futures with leverage and advanced risk management tools.',
      icon: 'M9 19c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z M9 9v6M15 9v6',
      features: [
        'Up to 125x leverage',
        'Risk management tools',
        'Advanced order types',
        'Professional charts'
      ]
    },
    {
      title: 'Staking',
      description: 'Earn rewards by staking your cryptocurrencies and supporting blockchain networks.',
      icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
      features: [
        'Multiple staking pools',
        'Flexible staking terms',
        'Competitive APY rates',
        'Auto-compounding'
      ]
    },
    {
      title: 'Margin Trading',
      description: 'Trade with borrowed funds to amplify your potential profits with careful risk management.',
      icon: 'M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z',
      features: [
        'Cross and isolated margin',
        'Real-time PnL tracking',
        'Risk management tools',
        'Professional interface'
      ]
    }
  ];

  tradingPairs = [
    {
      base: 'BTC',
      quote: 'USDT',
      baseIcon: 'assets/images/bitcoin.svg',
      quoteIcon: 'assets/images/tether.svg',
      price: '43,250.00',
      change: 2.34,
      volume: '2.5B',
      high: '44,100.00',
      low: '42,800.00'
    },
    {
      base: 'ETH',
      quote: 'USDT',
      baseIcon: 'assets/images/ethereum.svg',
      quoteIcon: 'assets/images/tether.svg',
      price: '2,650.00',
      change: -1.23,
      volume: '1.8B',
      high: '2,720.00',
      low: '2,580.00'
    },
    {
      base: 'BNB',
      quote: 'USDT',
      baseIcon: 'assets/images/binance.svg',
      quoteIcon: 'assets/images/tether.svg',
      price: '315.00',
      change: 0.87,
      volume: '450M',
      high: '320.00',
      low: '308.00'
    },
    {
      base: 'ADA',
      quote: 'USDT',
      baseIcon: 'assets/images/cardano.svg',
      quoteIcon: 'assets/images/tether.svg',
      price: '0.45',
      change: 3.12,
      volume: '320M',
      high: '0.48',
      low: '0.42'
    },
    {
      base: 'SOL',
      quote: 'USDT',
      baseIcon: 'assets/images/solana.svg',
      quoteIcon: 'assets/images/tether.svg',
      price: '98.50',
      change: -2.15,
      volume: '280M',
      high: '102.00',
      low: '95.50'
    },
    {
      base: 'DOT',
      quote: 'USDT',
      baseIcon: 'assets/images/polkadot.svg',
      quoteIcon: 'assets/images/tether.svg',
      price: '6.85',
      change: 1.45,
      volume: '180M',
      high: '7.20',
      low: '6.50'
    }
  ];

  advancedTools = [
    {
      title: 'Advanced Charting',
      description: 'Professional-grade charts with 100+ technical indicators and drawing tools.',
      icon: 'M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z',
      features: ['100+ Indicators', 'Drawing Tools', 'Multiple Timeframes', 'Custom Alerts']
    },
    {
      title: 'API Trading',
      description: 'Connect your trading bots and applications with our REST and WebSocket APIs.',
      icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
      features: ['REST API', 'WebSocket', 'Rate Limits', 'Documentation']
    },
    {
      title: 'Portfolio Manager',
      description: 'Track your portfolio performance with detailed analytics and reporting tools.',
      icon: 'M9 19c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z M9 9v6M15 9v6',
      features: ['Real-time PnL', 'Performance Analytics', 'Risk Metrics', 'Export Data']
    },
    {
      title: 'Mobile Trading',
      description: 'Trade on the go with our feature-rich mobile applications for iOS and Android.',
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      features: ['iOS App', 'Android App', 'Push Notifications', 'Biometric Security']
    }
  ];

  feeTiers = [
    { volume: '< $10,000', maker: '0.1', taker: '0.1' },
    { volume: '$10,000 - $50,000', maker: '0.08', taker: '0.08' },
    { volume: '$50,000 - $100,000', maker: '0.06', taker: '0.06' },
    { volume: '$100,000 - $500,000', maker: '0.04', taker: '0.04' },
    { volume: '$500,000 - $1,000,000', maker: '0.02', taker: '0.02' },
    { volume: '> $1,000,000', maker: '0.01', taker: '0.01' }
  ];

  constructor() {}

  ngOnInit() {}
}
