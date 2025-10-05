import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Crypto News & Insights</h1>
          <p>Stay updated with the latest cryptocurrency news, market analysis, and trading insights</p>
        </div>
      </div>
    </section>

    <!-- Featured Article -->
    <section class="featured-article" *ngIf="featuredArticle">
      <div class="container">
        <div class="featured-content">
          <div class="featured-image">
            <img [src]="featuredArticle.image" [alt]="featuredArticle.title" class="article-image">
            <div class="featured-badge">Featured</div>
          </div>
          <div class="featured-text">
            <div class="article-meta">
              <span class="category">{{featuredArticle.category}}</span>
              <span class="date">{{featuredArticle.date}}</span>
              <span class="read-time">{{featuredArticle.readTime}} min read</span>
            </div>
            <h2>{{featuredArticle.title}}</h2>
            <p>{{featuredArticle.excerpt}}</p>
            <a href="#" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Categories -->
    <section class="categories">
      <div class="container">
        <div class="categories-header">
          <h2>Browse by Category</h2>
        </div>
        <div class="categories-grid">
          <div class="category-card" *ngFor="let category of categories" [class.active]="selectedCategory === category.name">
            <div class="category-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path [attr.d]="category.icon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>{{category.name}}</h3>
            <p>{{category.count}} articles</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="articles">
      <div class="container">
        <div class="articles-header">
          <h2>Latest Articles</h2>
          <div class="filter-controls">
            <select class="filter-select" [value]="selectedCategory" (change)="onCategoryChange($event)">
              <option value="">All Categories</option>
              <option *ngFor="let category of categories" [value]="category.name">{{category.name}}</option>
            </select>
          </div>
        </div>
        <div class="articles-grid">
          <article class="article-card" *ngFor="let article of filteredArticles">
            <div class="article-image">
              <img [src]="article.image" [alt]="article.title" class="card-image">
              <div class="article-category">{{article.category}}</div>
            </div>
            <div class="article-content">
              <div class="article-meta">
                <span class="date">{{article.date}}</span>
                <span class="read-time">{{article.readTime}} min read</span>
              </div>
              <h3>{{article.title}}</h3>
              <p>{{article.excerpt}}</p>
              <div class="article-footer">
                <div class="author">
                  <img [src]="article.author.avatar" [alt]="article.author.name" class="author-avatar">
                  <span class="author-name">{{article.author.name}}</span>
                </div>
                <a href="#" class="read-more">Read More →</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="newsletter">
      <div class="container">
        <div class="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Get the latest crypto news and insights delivered to your inbox</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Enter your email address" class="email-input" required>
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
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

    .featured-article {
      padding: 4rem 0;
      background-color: var(--background-color);
    }

    .featured-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .featured-image {
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
    }

    .article-image {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }

    .featured-badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background-color: var(--primary-color);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .featured-text .article-meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 0.875rem;
      color: var(--text-secondary);
    }

    .category {
      background-color: var(--primary-color);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-weight: 500;
    }

    .featured-text h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--text-primary);
      line-height: 1.2;
    }

    .featured-text p {
      font-size: 1.125rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .categories {
      padding: 4rem 0;
      background-color: var(--surface-color);
    }

    .categories-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .categories-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }

    .category-card {
      background-color: var(--background-color);
      border: 2px solid var(--border-color);
      border-radius: 1rem;
      padding: 2rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .category-card:hover,
    .category-card.active {
      border-color: var(--primary-color);
      transform: translateY(-2px);
      box-shadow: var(--shadow-medium);
    }

    .category-icon {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      color: white;
    }

    .category-icon svg {
      width: 32px;
      height: 32px;
    }

    .category-card h3 {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
    }

    .category-card p {
      color: var(--text-secondary);
      font-size: 0.875rem;
    }

    .articles {
      padding: 4rem 0;
      background-color: var(--background-color);
    }

    .articles-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3rem;
    }

    .articles-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    .filter-select {
      padding: 0.75rem 1rem;
      border: 1px solid var(--border-color);
      border-radius: 0.5rem;
      background-color: var(--surface-color);
      color: var(--text-primary);
      font-size: 0.875rem;
    }

    .articles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .article-card {
      background-color: var(--surface-color);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .article-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-large);
    }

    .article-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .card-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .article-category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background-color: var(--primary-color);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .article-content {
      padding: 1.5rem;
    }

    .article-meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 0.875rem;
      color: var(--text-secondary);
    }

    .article-content h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-primary);
      line-height: 1.3;
    }

    .article-content p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .article-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .author {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .author-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
    }

    .author-name {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }

    .read-more {
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.875rem;
      transition: color 0.3s ease;
    }

    .read-more:hover {
      color: var(--primary-dark);
    }

    .newsletter {
      padding: 4rem 0;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      color: white;
      text-align: center;
    }

    .newsletter-content h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .newsletter-content p {
      font-size: 1.125rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .newsletter-form {
      display: flex;
      max-width: 500px;
      margin: 0 auto;
      gap: 1rem;
    }

    .email-input {
      flex: 1;
      padding: 1rem;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
      backdrop-filter: blur(10px);
    }

    .email-input::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    .email-input:focus {
      outline: none;
      background-color: rgba(255, 255, 255, 0.2);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2rem;
      }

      .featured-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .categories-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .articles-header {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .articles-grid {
        grid-template-columns: 1fr;
      }

      .newsletter-form {
        flex-direction: column;
      }

      .newsletter-content h2 {
        font-size: 2rem;
      }
    }
  `]
})
export class BlogComponent implements OnInit {
  selectedCategory = '';
  filteredArticles: any[] = [];

  featuredArticle = {
    title: 'Bitcoin Reaches New All-Time High: What This Means for the Crypto Market',
    excerpt: 'Bitcoin has reached unprecedented heights, breaking through key resistance levels. Our analysis explores the factors driving this surge and what traders should expect in the coming weeks.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop',
    category: 'Market Analysis',
    date: 'Dec 15, 2024',
    readTime: 5
  };

  categories = [
    { name: 'Market Analysis', count: 24, icon: 'M9 19c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z M9 9v6M15 9v6' },
    { name: 'Trading Tips', count: 18, icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
    { name: 'Blockchain News', count: 32, icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
    { name: 'DeFi', count: 15, icon: 'M12 15l-3-3h6l-3 3z M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9z' },
    { name: 'NFTs', count: 12, icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { name: 'Security', count: 8, icon: 'M12 15l-3-3h6l-3 3z M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9z M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42' }
  ];

  articles = [
    {
      title: 'Ethereum 2.0: The Complete Guide to the Merge',
      excerpt: 'Everything you need to know about Ethereum\'s transition to Proof of Stake and its implications for the ecosystem.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop',
      category: 'Blockchain News',
      date: 'Dec 14, 2024',
      readTime: 8,
      author: {
        name: 'Alex Thompson',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
      }
    },
    {
      title: 'DeFi Yield Farming Strategies for 2024',
      excerpt: 'Maximize your returns with these proven DeFi yield farming strategies and risk management techniques.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=200&fit=crop',
      category: 'DeFi',
      date: 'Dec 13, 2024',
      readTime: 6,
      author: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
      }
    },
    {
      title: 'Technical Analysis: Bitcoin Support and Resistance Levels',
      excerpt: 'A detailed technical analysis of Bitcoin\'s current price action and key levels to watch.',
      image: 'https://images.unsplash.com/photo-1642790103337-e5d0b6a3a4a4?w=400&h=200&fit=crop',
      category: 'Trading Tips',
      date: 'Dec 12, 2024',
      readTime: 4,
      author: {
        name: 'Mike Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      }
    },
    {
      title: 'NFT Market Trends: What\'s Hot in Digital Art',
      excerpt: 'Explore the latest trends in the NFT market and discover emerging artists and collections.',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=200&fit=crop',
      category: 'NFTs',
      date: 'Dec 11, 2024',
      readTime: 5,
      author: {
        name: 'Emma Wilson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
      }
    },
    {
      title: 'Crypto Security Best Practices for Beginners',
      excerpt: 'Essential security tips to protect your cryptocurrency investments from hackers and scams.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop',
      category: 'Security',
      date: 'Dec 10, 2024',
      readTime: 7,
      author: {
        name: 'David Park',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
      }
    },
    {
      title: 'Market Outlook: Altcoin Season Analysis',
      excerpt: 'Is altcoin season upon us? Our analysis of market indicators and altcoin performance.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop',
      category: 'Market Analysis',
      date: 'Dec 9, 2024',
      readTime: 6,
      author: {
        name: 'Lisa Zhang',
        avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face'
      }
    }
  ];

  constructor() {}

  ngOnInit() {
    this.filteredArticles = this.articles;
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    this.filterArticles();
  }

  filterArticles() {
    if (this.selectedCategory === '') {
      this.filteredArticles = this.articles;
    } else {
      this.filteredArticles = this.articles.filter(article => article.category === this.selectedCategory);
    }
  }
}
