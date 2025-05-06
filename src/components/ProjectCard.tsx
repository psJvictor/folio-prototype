
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProjectType } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: ProjectType;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group card-hover rounded-lg overflow-hidden bg-card border border-border">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={project.coverImage} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="font-mono text-xs">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
        
        <Link 
          to={`/projects/${project.id}`} 
          className="inline-flex items-center text-sm font-medium text-primary group"
        >
          View Project 
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
