export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  featured: boolean;
  category: "Full Stack" | "Backend / Systems" | "Web3 / Trading" | "Frontend";
  technologies: string[];
  role: string;
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  overview: string;
  problem: string;
  architecture: string;
  implementationNotes: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "k1-contract-billing-platform",
    title: "K1 Contract & Billing Platform",
    tagline: "Enterprise contract lifecycle & automated multi-app billing platform for K1 Group Japan",
    summary:
      "A distributed billing and contract management system comprising three independently deployed applications exchanging JWT-secured transactions and coordinating automated invoicing.",
    featured: true,
    category: "Full Stack",
    role: "Lead Platform Developer",
    metrics: "Automated billing across 3 applications with 80% data entry reduction",
    technologies: [
      "PHP 7.3+",
      "CodeIgniter 4",
      "MySQL",
      "JWT (HS512)",
      "REST APIs",
      "DataTables",
      "SMTP Email Queue",
      "Linux Cron",
    ],
    githubUrl: "https://github.com/sukantokumardas",
    overview:
      "Engineered an enterprise-grade contract-to-billing platform for K1 Group Japan. The architecture is decomposed into three separate applications handling contract registration, approval workflows, and billing issuance, connected via secure token-authenticated REST interfaces.",
    problem:
      "The client relied on fragmented legacy tooling and manual spreadsheet handoffs between sales and accounting. This led to reconciliation errors, delayed monthly invoicing cycles, and an absence of a verifiable audit log for approval changes.",
    architecture:
      "Three isolated CodeIgniter 4 services deployed independently across server instances. Services communicate via HS512 HMAC JWT-authenticated REST APIs with strict replay protection and request signing. A dedicated cron worker handles recurring billing calculations, invoice generation, and asynchronous SMTP dispatch.",
    implementationNotes: [
      "Designed a robust role-based approval pipeline requiring cryptographic validation between services.",
      "Implemented asynchronous SMTP queuing mechanism with retry policies for invoice distribution.",
      "Engineered automated spreadsheet synchronization via Google Sheets API, slashing data entry time by 80%.",
      "Optimized complex database queries with custom indexing on multi-million row billing histories.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Ensuring zero unauthorized inter-application communication across independent server boundaries.",
        solution:
          "Implemented HS512 signed JWT headers with short-lived tokens, nonces, and timestamp validation to prevent replay attacks.",
      },
      {
        challenge:
          "High transaction load during end-of-month batch billing runs causing server memory spikes.",
        solution:
          "Re-architected the billing batch run into chunked database cursor sweeps processed via scheduled background cron jobs with graceful checkpoint recovery.",
      },
    ],
  },
  {
    slug: "crypto-trading-coin-platform",
    title: "Crypto Trading & Coin Purchase Platform",
    tagline: "Algorithmic crypto trading platform with automated DEX swaps and exchange liquidity feeds",
    summary:
      "High-throughput crypto trading engine incorporating DEX liquidity protocols (Uniswap/Sushiswap), MEXC exchange integration, and predictive pricing logic.",
    featured: true,
    category: "Web3 / Trading",
    role: "Full Stack / Web3 Engineer",
    metrics: "20% single-trade profit margin achieved using automated Strategy Pattern",
    technologies: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "Prisma ORM",
      "MySQL",
      "Turborepo",
      "Uniswap V3",
      "Sushiswap",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    githubUrl: "https://github.com/sukantokumardas",
    overview:
      "A modular cryptocurrency trade execution platform built with NestJS microservices and Next.js. Integrates decentralized liquidity pools with centralized exchange data feeds to perform automated arbitrage, token-availability checks, and dynamic wallet balance tracking.",
    problem:
      "Manual crypto arbitrage is too slow to capture temporary price discrepancies across DEXs and centralized exchanges, and existing tools lack clear commission transparency and reliable token-expiration safeguards.",
    architecture:
      "Turborepo monorepo structuring NestJS microservices for trade calculation and execution, coupled with a Next.js frontend. Uses Prisma ORM with MySQL for transaction auditing, Web3 providers for Uniswap router interaction, and WebSocket feeds for real-time balance propagation.",
    implementationNotes: [
      "Implemented Strategy Pattern to dynamically switch between Uniswap and Sushiswap liquidity pools based on gas price and slippage.",
      "Integrated MEXC exchange API to track token expiration dates and prevent invalid trade executions.",
      "Built real-time dynamic balance and commission audit dashboard with sub-second WebSocket updates.",
      "Developed price prediction heuristic model taking into account order book depth and recent volume spikes.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Slippage and front-running risks during on-chain decentralized token swaps.",
        solution:
          "Enforced dynamic slippage tolerances calculated per pool volatility and routed execution through private mempool endpoints where feasible.",
      },
      {
        challenge:
          "Maintaining atomic consistency between off-chain database balances and on-chain trade confirmations.",
        solution:
          "Utilized Prisma database transactions with strict state machine transitions (PENDING -> SUBMITTED -> CONFIRMED -> SETTLED).",
      },
    ],
  },
  {
    slug: "stock-room-ecommerce",
    title: "STOCK ROOM — E-Commerce Platform",
    tagline: "High-performance Next.js 15 e-commerce storefront with transactional inventory management",
    summary:
      "End-to-end modern e-commerce storefront and merchant control panel with zero-downtime inventory concurrency, automated invoice generation, and 95+ Lighthouse performance.",
    featured: true,
    category: "Full Stack",
    role: "Full Stack Engineer",
    metrics: "95% Lighthouse performance, 98% SEO score",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Prisma ORM",
      "MySQL",
      "Tailwind CSS",
      "React Server Components",
    ],
    githubUrl: "https://github.com/sukantokumardas",
    overview:
      "Engineered an e-commerce platform built on Next.js 15 App Router and Prisma ORM. Provides a customer storefront and a merchant administration suite for catalog control, stock levels, and order fulfillment workflows.",
    problem:
      "Traditional e-commerce platforms struggle with slow server response times during catalog browsing, and race conditions during high-volume checkouts leading to overselling.",
    architecture:
      "Built with Next.js 15 Server Components for instant catalog rendering and minimal client JavaScript. State mutations are guarded by database-level transactions through Prisma ORM to lock inventory row items during order placement.",
    implementationNotes: [
      "Engineered full customer and admin order management systems including order statuses, history, and PDF invoice generation.",
      "Developed comprehensive admin catalog CRUD with dynamic tables, multi-image upload, category hierarchy, and SEO slug auto-generation.",
      "Implemented database-transaction-safe checkout flow preventing negative inventory counts.",
      "Achieved 95% performance and 98% SEO scores via static prerendering and responsive asset loading.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Inventory race conditions when multiple customers buy the last item simultaneously.",
        solution:
          "Wrapped order checkout in atomic Prisma transaction blocks using row-level locking to verify availability prior to debiting stock.",
      },
      {
        challenge:
          "Fast catalog filtering without full page reloads or excessive server compute.",
        solution:
          "Leveraged URL search parameters with optimistic UI updates and Next.js server components for cached, granular re-renders.",
      },
    ],
  },
  {
    slug: "sales-etl-pipeline",
    title: "Sales Data Import & Matching Pipeline",
    tagline: "Automated 10+ stage ETL batch pipeline with fuzzy matching & automated rollback recovery",
    summary:
      "Resilient data processing engine handling heterogeneous CSV sales records, web-scraped listings, and fuzzy lead matching with zero-data-loss checkpoint backups.",
    featured: true,
    category: "Backend / Systems",
    role: "Backend Engineer",
    metrics: "Processes 10+ ETL stages with automatic fault detection and recovery",
    technologies: ["Python", "MySQL", "Bash", "CSV ETL", "Linux", "Fuzzy String Matching"],
    githubUrl: "https://github.com/sukantokumardas",
    overview:
      "A 10+ stage automated ETL pipeline designed to import large volume CSV sales reports, normalize merchant master records, and match scraped competitor inventory to uncover high-intent business leads.",
    problem:
      "Incoming vendor datasets featured inconsistent field naming, duplicate records, non-standard company titles, and intermittent malformed data rows that corrupted database tables.",
    architecture:
      "Pipeline orchestration managed via Bash shell scripts driving modular Python processing workers. Each stage validates, transforms, and loads intermediate artifacts into staging MySQL tables, guarded by timestamped mysqldump checkpoints for fault rollback.",
    implementationNotes: [
      "Built 10+ discrete pipeline stages covering schema validation, normalization, and deduplication.",
      "Implemented Levenshtein-based fuzzy string matching algorithm to pair scraped competitors with shop master records.",
      "Engineered automatic failure detection and timestamped database dump creation after each successful phase.",
      "Configured automated alert notifications when input anomalies exceeded tolerance thresholds.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Pipeline failures halfway through leaving the database in an inconsistent state.",
        solution:
          "Configured atomic stage execution with automatic mysqldump snapshots, rolling back cleanly to the previous checkpoint upon error.",
      },
      {
        challenge:
          "Fuzzy matching on hundreds of thousands of store names was computationally prohibitive.",
        solution:
          "Implemented phonetic and n-gram blocking to filter candidates down before running expensive Levenshtein distance computations.",
      },
    ],
  },
  {
    slug: "podcast-live-streaming",
    title: "Podcast & Live Streaming Platform",
    tagline: "Multi-role audio streaming and e-learning application with tokenized subscription billing",
    summary:
      "Full-featured audio broadcasting, interactive examination engine, and content subscription platform with bKash gateway integration.",
    featured: false,
    category: "Full Stack",
    role: "Full Stack Engineer",
    metrics: "Supports 4 distinct user roles with tokenized bKash subscriptions",
    technologies: [
      "Laravel 10",
      "PHP",
      "MySQL",
      "Blade",
      "Tailwind CSS",
      "bKash Payment Gateway",
      "REST APIs",
    ],
    githubUrl: "https://github.com/sukantokumardas",
    overview:
      "A comprehensive audio streaming and e-learning platform supporting four distinct user roles: Podcasters, Examiners, Listeners, and Administrators, with full subscription billing and live audio voice-messaging.",
    problem:
      "Educational creators required a consolidated portal where audio lectures could be distributed alongside structured assessments and monetized through regional payment gateways.",
    architecture:
      "Monolithic MVC architecture built on Laravel 10 and MySQL. Features tokenized recurring payment processing with bKash, role-based middleware permission guards, and optimized audio streaming delivery.",
    implementationNotes: [
      "Engineered four dedicated control panels with granular role-based authorization and phone OTP login.",
      "Developed interactive online exam module with spreadsheet-based bulk question imports and automatic scoring.",
      "Integrated bKash tokenized payment gateway for multi-tier listener subscription plans.",
      "Built content modules for podcasts, voice messages, blog publications, notices, and favorites.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Handling asynchronous payment verification webhooks reliably without double-crediting subscriptions.",
        solution:
          "Implemented idempotent webhook listeners with database transaction locks and payment verification state validation.",
      },
      {
        challenge:
          "Managing large spreadsheet question uploads without HTTP timeouts.",
        solution:
          "Processed question import spreadsheets via background queued jobs with batch chunking and detailed line-by-line validation logs.",
      },
    ],
  },
];
