
export interface ProjectType {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  coverImage: string;
  featured: boolean;
}

export const projects: ProjectType[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    shortDescription: "Modern portfolio website built with React and Tailwind CSS",
    description: "A responsive portfolio website showcasing my projects and skills. Built with React, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and responsive design.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/psJvictor/folio-prototype",
    liveUrl: "https://dev.psjvictor.com",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "e-commerce-app",
    title: "E-commerce Platform",
    shortDescription: "Full-featured e-commerce platform with admin dashboard",
    description: "A complete e-commerce solution with product listings, shopping cart, checkout process, and admin dashboard. Built with React, Node.js, Express, and MongoDB. Features include user authentication, product management, and order processing.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    githubUrl: " https://github.com/psJvictor/cart-hub-genesis",
    liveUrl: "https://cart-hub-genesis.vercel.app/",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "barbershop-booking-manager",
    title: "Barbershop Booking Manager",
    shortDescription: "A barber shop booking and services management application",
    description: "A barber shop booking and services management application. Features include booking, service management, and customer management. Built with React, Node.js, Express, and MongoDB.",
    tags: ["React", "Node.js", "Express", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com/psJvictor/barbershop-booking-manager",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "weather-app",
    title: "Weather Application",
    shortDescription: "Real-time weather forecasting application",
    description: "A weather application providing real-time weather information and forecasts. Features include current conditions, 5-day forecast, location search, and temperature unit conversion. Built with React and OpenWeather API.",
    tags: ["React", "API Integration", "CSS", "JavaScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    coverImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "chat-application",
    title: "Real-time Chat",
    shortDescription: "Real-time messaging application with multiple channels",
    description: "A real-time chat application allowing users to create channels, send messages, and share files. Features include user authentication, online status indicators, and message notifications. Built with React, Socket.io, and Node.js.",
    tags: ["React", "Socket.io", "Node.js", "Express"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    shortDescription: "Content management system for bloggers",
    description: "A blog platform allowing users to create, edit, and publish articles. Features include rich text editing, categories, tags, and comments. Built with Next.js, Prisma, and PostgreSQL.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);

export const getProjectById = (id: string) => projects.find(project => project.id === id);
