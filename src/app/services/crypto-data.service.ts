import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface CryptoPrice {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  icon: string;
  rank: number;
}

export interface MarketData {
  totalMarketCap: number;
  totalVolume: number;
  activeCryptocurrencies: number;
  marketCapChange24h: number;
}

@Injectable({
  providedIn: 'root'
})
export class CryptoDataService {
  private cryptoPricesSubject = new BehaviorSubject<CryptoPrice[]>([]);
  public cryptoPrices$ = this.cryptoPricesSubject.asObservable();

  private marketDataSubject = new BehaviorSubject<MarketData | null>(null);
  public marketData$ = this.marketDataSubject.asObservable();

  private readonly UPDATE_INTERVAL = 30000; // 30 seconds

  constructor(private http: HttpClient) {
    this.initializeData();
    this.startPeriodicUpdates();
  }

  private initializeData(): void {
    // Initialize with mock data since we don't have a real API
    const initialData = this.getMockCryptoData();
    this.cryptoPricesSubject.next(initialData);

    const initialMarketData = this.getMockMarketData();
    this.marketDataSubject.next(initialMarketData);
  }

  private startPeriodicUpdates(): void {
    interval(this.UPDATE_INTERVAL).subscribe(() => {
      this.updateCryptoPrices();
    });
  }

  private updateCryptoPrices(): void {
    const currentPrices = this.cryptoPricesSubject.value;
    const updatedPrices = currentPrices.map(crypto => ({
      ...crypto,
      price: this.generateRandomPrice(crypto.price),
      change24h: this.generateRandomChange(),
      volume24h: this.generateRandomVolume(crypto.volume24h)
    }));

    this.cryptoPricesSubject.next(updatedPrices);
  }

  private generateRandomPrice(currentPrice: number): number {
    const change = (Math.random() - 0.5) * 0.02; // ±1% change
    return currentPrice * (1 + change);
  }

  private generateRandomChange(): number {
    return (Math.random() - 0.5) * 10; // ±5% change
  }

  private generateRandomVolume(currentVolume: number): number {
    const change = (Math.random() - 0.5) * 0.1; // ±5% change
    return currentVolume * (1 + change);
  }

  getCryptoPrices(): Observable<CryptoPrice[]> {
    return this.cryptoPrices$;
  }

  getMarketData(): Observable<MarketData | null> {
    return this.marketData$;
  }

  getCryptoById(id: string): Observable<CryptoPrice | undefined> {
    return this.cryptoPrices$.pipe(
      map(prices => prices.find(crypto => crypto.id === id))
    );
  }

  getTopCryptos(limit: number = 10): Observable<CryptoPrice[]> {
    return this.cryptoPrices$.pipe(
      map(prices => prices.slice(0, limit))
    );
  }

  searchCryptos(query: string): Observable<CryptoPrice[]> {
    return this.cryptoPrices$.pipe(
      map(prices => prices.filter(crypto => 
        crypto.name.toLowerCase().includes(query.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(query.toLowerCase())
      ))
    );
  }

  // Mock data for demonstration
  private getMockCryptoData(): CryptoPrice[] {
    return [
      {
        id: 'bitcoin',
        symbol: 'BTC',
        name: 'Bitcoin',
        price: 43250.00,
        change24h: 2.34,
        volume24h: 28500000000,
        marketCap: 850000000000,
        icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        rank: 1
      },
      {
        id: 'ethereum',
        symbol: 'ETH',
        name: 'Ethereum',
        price: 2650.00,
        change24h: -1.23,
        volume24h: 18500000000,
        marketCap: 320000000000,
        icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
        rank: 2
      },
      {
        id: 'binance-coin',
        symbol: 'BNB',
        name: 'Binance Coin',
        price: 315.00,
        change24h: 0.87,
        volume24h: 2500000000,
        marketCap: 48000000000,
        icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
        rank: 3
      },
      {
        id: 'cardano',
        symbol: 'ADA',
        name: 'Cardano',
        price: 0.45,
        change24h: 3.12,
        volume24h: 1200000000,
        marketCap: 15000000000,
        icon: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
        rank: 4
      },
      {
        id: 'solana',
        symbol: 'SOL',
        name: 'Solana',
        price: 98.50,
        change24h: -2.15,
        volume24h: 1800000000,
        marketCap: 42000000000,
        icon: 'https://cryptologos.cc/logos/solana-sol-logo.png',
        rank: 5
      },
      {
        id: 'polkadot',
        symbol: 'DOT',
        name: 'Polkadot',
        price: 6.85,
        change24h: 1.45,
        volume24h: 850000000,
        marketCap: 8500000000,
        icon: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png',
        rank: 6
      },
      {
        id: 'chainlink',
        symbol: 'LINK',
        name: 'Chainlink',
        price: 14.20,
        change24h: 0.75,
        volume24h: 650000000,
        marketCap: 7200000000,
        icon: 'https://cryptologos.cc/logos/chainlink-link-logo.png',
        rank: 7
      },
      {
        id: 'litecoin',
        symbol: 'LTC',
        name: 'Litecoin',
        price: 72.30,
        change24h: -0.45,
        volume24h: 450000000,
        marketCap: 5400000000,
        icon: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png',
        rank: 8
      },
      {
        id: 'avalanche',
        symbol: 'AVAX',
        name: 'Avalanche',
        price: 24.80,
        change24h: 2.85,
        volume24h: 320000000,
        marketCap: 5800000000,
        icon: 'https://cryptologos.cc/logos/avalanche-avax-logo.png',
        rank: 9
      },
      {
        id: 'polygon',
        symbol: 'MATIC',
        name: 'Polygon',
        price: 0.85,
        change24h: 1.25,
        volume24h: 280000000,
        marketCap: 7800000000,
        icon: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
        rank: 10
      }
    ];
  }

  private getMockMarketData(): MarketData {
    return {
      totalMarketCap: 1650000000000,
      totalVolume: 85000000000,
      activeCryptocurrencies: 8500,
      marketCapChange24h: 1.25
    };
  }

  // Method to simulate real-time price updates
  simulatePriceUpdate(cryptoId: string, newPrice: number): void {
    const currentPrices = this.cryptoPricesSubject.value;
    const updatedPrices = currentPrices.map(crypto => 
      crypto.id === cryptoId ? { ...crypto, price: newPrice } : crypto
    );
    this.cryptoPricesSubject.next(updatedPrices);
  }

  // Method to get historical data (mock)
  getHistoricalData(cryptoId: string, days: number = 7): Observable<any[]> {
    // This would normally make an HTTP request to get historical data
    // For now, we'll return mock data
    const mockData = [];
    const basePrice = this.cryptoPricesSubject.value.find(c => c.id === cryptoId)?.price || 100;
    
    for (let i = days; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const price = basePrice * (0.9 + Math.random() * 0.2); // ±10% variation
      
      mockData.push({
        date: date.toISOString().split('T')[0],
        price: price,
        volume: Math.random() * 1000000
      });
    }
    
    return new BehaviorSubject(mockData).asObservable();
  }

  // Method to get trading pairs
  getTradingPairs(): Observable<any[]> {
    const pairs = [
      { base: 'BTC', quote: 'USDT', price: 43250.00, change: 2.34, volume: '2.5B' },
      { base: 'ETH', quote: 'USDT', price: 2650.00, change: -1.23, volume: '1.8B' },
      { base: 'BNB', quote: 'USDT', price: 315.00, change: 0.87, volume: '450M' },
      { base: 'ADA', quote: 'USDT', price: 0.45, change: 3.12, volume: '320M' },
      { base: 'SOL', quote: 'USDT', price: 98.50, change: -2.15, volume: '280M' },
      { base: 'DOT', quote: 'USDT', price: 6.85, change: 1.45, volume: '180M' }
    ];
    
    return new BehaviorSubject(pairs).asObservable();
  }
}
