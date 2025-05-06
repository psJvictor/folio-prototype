
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProjectById } from "@/data/projects";
import { ArrowLeft, Github, Globe } from "lucide-react";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!project) {
      navigate("/projects", { replace: true });
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <Layout>
      <div className="container py-12">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-sm mb-8 hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden shadow-lg mb-6">
              <img 
                src={project.coverImage} 
                alt={project.title} 
                className="w-full h-auto"
              />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-mono">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg">{project.description}</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Project Overview</h2>
              <p>
                This project demonstrates my skills in {project.tags.join(", ")}. 
                I focused on creating a clean, maintainable codebase with modern best practices.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Technical Details</h2>
              <p>
                The application architecture follows industry best practices for 
                scalability and performance. Key technical features include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responsive design for all screen sizes</li>
                <li>Optimized performance with efficient rendering</li>
                <li>Clean code architecture and patterns</li>
                <li>Comprehensive testing suite</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 border border-border sticky top-24">
              <h2 className="text-xl font-bold mb-4">Project Links</h2>
              
              <div className="space-y-4">
                <Button asChild variant="outline" className="w-full justify-start">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View Source Code
                  </a>
                </Button>
                
                {project.liveUrl && (
                  <Button asChild className="w-full justify-start">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Globe className="mr-2 h-5 w-5" />
                      View Live Demo
                    </a>
                  </Button>
                )}
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold mb-2">Skills Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold mb-4">More Projects</h3>
                <Button asChild variant="default" className="w-full">
                  <Link to="/projects">
                    View All Projects
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetailPage;
