
import { Article, Category } from './types';

export const CATEGORIES: Category[] = [
  'Stock Market Basics',
  'Crypto Fundamentals',
  'Market Analysis',
  'Risk Management',
  'Long-Term Investing'
];

export const MANDATORY_DISCLAIMER = "Disclaimer: All information on this website is provided for educational and informational purposes only and should not be considered financial advice. Investing in stocks and cryptocurrencies involves risk, including potential loss of capital. Users should conduct their own research or consult a licensed financial advisor before making any investment decisions. Invest at your own risk.";

export const ARTICLES: Article[] = [
  {
    id: 'intro-to-stocks',
    title: 'Understanding the Stock Market: A Beginner\'s Guide',
    category: 'Stock Market Basics',
    description: 'Learn what stocks are, how the market functions, and why companies go public.',
    readTime: '6 min',
    date: 'Oct 24, 2023',
    author: 'Elena Vance',
    imageUrl: 'https://picsum.photos/seed/stocks1/800/450',
    content: `
      <h2>What are Stocks?</h2>
      <p>A stock represents a share in the ownership of a company. When you buy a stock, you are buying a small piece of that business. Companies issue stock to raise money for growth, research, and development.</p>
      
      <h2>How Markets Work</h2>
      <p>Stocks are traded on exchanges like the NYSE or NASDAQ. Prices fluctuate based on supply and demand, company performance, and broader economic conditions.</p>
      
      <h2>Why Invest?</h2>
      <p>Historically, the stock market has been a powerful tool for wealth creation over long periods. However, it is essential to remember that past performance does not guarantee future results.</p>
    `
  },
  {
    id: 'crypto-blockchain-101',
    title: 'Blockchain & Crypto Fundamentals',
    category: 'Crypto Fundamentals',
    description: 'De-mystifying digital assets, decentralization, and the technology behind Bitcoin.',
    readTime: '8 min',
    date: 'Nov 12, 2023',
    author: 'Marcus Aurel',
    imageUrl: 'https://picsum.photos/seed/crypto1/800/450',
    content: `
      <h2>The Genesis of Digital Value</h2>
      <p>Cryptocurrency is a form of digital or virtual currency that uses cryptography for security. Unlike traditional currencies, most cryptocurrencies are decentralized networks based on blockchain technology.</p>
      
      <h2>What is Blockchain?</h2>
      <p>Think of it as a distributed ledger. Every transaction is recorded across thousands of computers, making it nearly impossible to alter historical data without the consensus of the network.</p>
      
      <h2>Bitcoin vs Altcoins</h2>
      <p>Bitcoin was the first cryptocurrency. Since then, thousands of others (altcoins) like Ethereum, Solana, and Cardano have emerged, each serving different purposes or technological goals.</p>
    `
  },
  {
    id: 'risk-management-basics',
    title: 'The Art of Risk Management',
    category: 'Risk Management',
    description: 'Protecting your capital is more important than chasing gains. Learn the fundamentals of safety.',
    readTime: '10 min',
    date: 'Dec 05, 2023',
    author: 'Sarah Chen',
    imageUrl: 'https://picsum.photos/seed/risk1/800/450',
    content: `
      <h2>Preservation of Capital</h2>
      <p>The first rule of investing is "don't lose money." While risk can never be eliminated, it can be managed. Risk management is the process of identifying, analyzing, and accepting or mitigating uncertainty in investment decisions.</p>
      
      <h2>Diversification</h2>
      <p>"Don't put all your eggs in one basket." By spreading investments across different asset classes (stocks, bonds, real estate, crypto), you reduce the impact of any single asset performing poorly.</p>
      
      <h2>Position Sizing</h2>
      <p>Determine how much of your total portfolio should be in any one trade. Many professionals recommend never risking more than 1-2% of total capital on a single speculative position.</p>
    `
  },
  {
    id: 'fundamental-analysis',
    title: 'Fundamental Analysis vs Technical Analysis',
    category: 'Market Analysis',
    description: 'Choosing the right lens to evaluate your potential investments.',
    readTime: '7 min',
    date: 'Jan 15, 2024',
    author: 'David Grant',
    imageUrl: 'https://picsum.photos/seed/analysis1/800/450',
    content: `
      <h2>Looking at the Business (Fundamental)</h2>
      <p>Fundamental analysis involves looking at a company's financial statements, management, and market position to determine its intrinsic value.</p>
      
      <h2>Looking at the Price (Technical)</h2>
      <p>Technical analysis focuses on price movement and volume patterns on charts to predict future price trends. It assumes that all known information is already reflected in the price.</p>
    `
  },
  {
    id: 'compound-interest-power',
    title: 'The Magic of Compound Interest',
    category: 'Long-Term Investing',
    description: 'Why time in the market beats timing the market for long-term growth.',
    readTime: '5 min',
    date: 'Feb 02, 2024',
    author: 'Elena Vance',
    imageUrl: 'https://picsum.photos/seed/compound1/800/450',
    content: `
      <h2>The Snowball Effect</h2>
      <p>Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods.</p>
      
      <h2>Start Early</h2>
      <p>The single most important variable in compounding is time. Even small amounts invested consistently over decades can grow significantly due to the exponential nature of compound growth.</p>
    `
  }
];
