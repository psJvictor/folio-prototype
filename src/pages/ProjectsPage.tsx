
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mb-12">
          <SectionHeading>Projects</SectionHeading>
          <p className="text-lg text-muted-foreground">
            A showcase of my work across different domains, from web applications to APIs and more.
            Each project represents a different challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-scale-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
