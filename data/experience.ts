export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  type: "Full-time" | "Contract" | "Education";
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "codelab-programmer",
    role: "Programmer",
    company: "CodeLab FZC",
    location: "Dhaka, Bangladesh",
    period: "March 2025 – Present",
    current: true,
    type: "Full-time",
    summary:
      "Core engineer building multi-application enterprise platforms, automated data processing engines, and algorithmic trading integrations.",
    responsibilities: [
      "Building and maintaining a contract-to-billing platform for K1 Group Japan spanning three interconnected applications communicating via HS512 JWT-secured REST APIs.",
      "Troubleshooting mission-critical issues in production and implementing business-aligned architectural improvements.",
      "Automated bulk data synchronization via Google Sheets API, reducing manual data entry turnaround by 80%.",
      "Engineered automated crypto trading strategies utilizing the Strategy pattern across Uniswap and Sushiswap, realizing 20% margin on single trades.",
    ],
    technologies: [
      "PHP 7.3+",
      "CodeIgniter 4",
      "MySQL",
      "JWT (HS512)",
      "REST APIs",
      "Google Sheets API",
      "Web3 / DeFi",
      "Bash",
      "Linux",
    ],
    achievements: [
      "Reduced operational data-entry workload by 80% with automated Google Sheets pipeline.",
      "Delivered reliable multi-app JWT communication with zero inter-service authentication failures.",
    ],
  },
  {
    id: "codelab-junior-programmer",
    role: "Junior Programmer",
    company: "CodeLab FZC",
    location: "Dhaka, Bangladesh",
    period: "June 2023 – February 2025",
    type: "Full-time",
    summary:
      "Full stack development focused on Next.js frontend performance, database optimization, and blockchain bot development.",
    responsibilities: [
      "Migrated legacy e-commerce platform to Next.js App Router, achieving a 95% Google Lighthouse performance score and 98% SEO rating.",
      "Implemented full stack features following clean architecture standards and optimized database query execution for an audio-based e-learning platform.",
      "Engineered a Node.js-based cryptocurrency arbitrage trading bot successfully generating automated profits on the Ethereum Sepolia testnet.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "MySQL",
      "Tailwind CSS",
      "Solidity / Web3",
      "REST APIs",
    ],
    achievements: [
      "Boosted web vitals to 95+ performance score on Next.js storefront migration.",
      "Engineered autonomous arbitrage bot on Sepolia testnet.",
    ],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  details: string[];
}

export const educationList: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Shahjalal University of Science and Technology (SUST)",
    period: "February 2018 – June 2023",
    cgpa: "3.52 / 4.00",
    details: [
      "Awarded CSE Department 3rd Year Scholarship in 2023 for academic excellence.",
      "Solved 600+ algorithmic problems across LeetCode, Codeforces, UVA, Vjudge, and HackerRank.",
      "10th place in Regional Chemistry Olympiad, Khulna division.",
    ],
  },
];
