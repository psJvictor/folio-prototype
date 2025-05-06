
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="container">
        <div className="flex flex-col items-start max-w-3xl animate-fade-in">
          <p className="text-lg font-mono text-muted-foreground mb-4">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block mb-2">João Victor</span>
            <span className="text-muted-foreground font-normal text-2xl md:text-4xl">
              Fullstack Developer
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl">
            I build exceptional and accessible digital experiences for the web.
            Specialized in creating modern, responsive applications with clean code.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild size="lg">
              <Link to="/projects">
                View My Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/psJvictor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/joão-victor-santos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <ArrowDown size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
