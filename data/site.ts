export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  cvPath: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
  navLinks: {
    title: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Sukanto Kumar Das",
  role: "Full Stack Software Engineer",
  tagline: "Building scalable web platforms, high-performance APIs, and modern frontend experiences.",
  bio: "Full Stack Software Engineer with deep experience in architecting resilient backend systems, RESTful microservices, and modern responsive web applications. Proven track record building enterprise billing platforms, DEX automated trading systems, and high-performance e-commerce applications.",
  location: "Basundhara, Dhaka, Bangladesh",
  email: "sukanto.k.das@gmail.com",
  phone: "+880-1797521254",
  cvPath: "/SUKANTO_CV.pdf",
  social: {
    github: "https://github.com/sukantokumardas",
    linkedin: "https://linkedin.com/in/sukantokumardas",
    email: "mailto:sukanto.k.das@gmail.com",
  },
  navLinks: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Experience", href: "/experience" },
    { title: "Contact", href: "/contact" },
  ],
};
