import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = getFeaturedProjects();

  return (
    <Layout>
      <HeroSection />
      
      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <SectionHeading>Featured Projects</SectionHeading>
            <Link to="/projects" className="group inline-flex items-center text-sm font-medium">
              View All Projects
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="animate-scale-in">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <div className="md:w-1/2">
              <SectionHeading>About Me</SectionHeading>
              <p className="text-lg mb-6">
                I'm a passionate fullstack developer with expertise in building modern web applications.
                I specialize in JavaScript technologies and have experience working with React, Node.js,
                and various other frameworks and tools.
              </p>
              <Button asChild>
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden">
              <img 
                src="https://demo-source.imgix.net/puppy.jpg" 
                alt="Developer working on laptop" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 text-center">
        <div className="container max-w-3xl">
          <SectionHeading className="text-center">Let's Work Together</SectionHeading>
          <p className="text-xl text-muted-foreground mb-8">
            Have a project in mind? I'm currently available for freelance work or full-time positions.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
