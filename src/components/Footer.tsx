
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-8 mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-mono font-semibold">
              &lt; psJvictor.dev &gt;
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Fullstack developer passionate about creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-6 pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} psJvictor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
