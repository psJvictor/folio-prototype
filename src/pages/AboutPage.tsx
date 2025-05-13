
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";

const AboutPage = () => {
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <SectionHeading>About Me</SectionHeading>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg">
                Hello! I'm João Victor, a fullstack developer passionate about building
                exceptional digital experiences. I enjoy creating elegant solutions to complex
                problems through clean, efficient code.
              </p>
              
              <p>
                With a strong foundation in both frontend and backend technologies, I specialize in
                building modern web applications using JavaScript/TypeScript, React, Node.js, and
                various other frameworks and tools. I'm committed to writing maintainable code and 
                creating intuitive user interfaces.
              </p>
              
              <p>
                I started my journey in web development in 2018 and have since worked on a variety of 
                projects, from small business websites to complex enterprise applications. I'm constantly
                learning and exploring new technologies to stay at the forefront of the ever-evolving 
                tech landscape.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing my knowledge through blog posts and mentoring.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Education & Experience</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold">Fullstack Developer</h3>
                  <p className="text-muted-foreground">Comunix • 2023 - Present</p>
                  <p>
                    Fullstack developer for the main product, implementing modern best practices
                    and onboarding new developers. Worked on redesigning and optimizing the main product
                    interface, resulting in a 40% improvement in performance.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">Backend Developer</h3>
                  <p className="text-muted-foreground">Banco Bradesco• 2021 - 2023</p>
                  <p>
                    Developed a new API for credit scoring unify across various score credit companies in the country.
                    Collaborated with design and product teams to implement features that met client requirements
                    and provided excellent user experiences. Left with the conclusion that the project was a success and
                    received a reward from the company.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">Bachelor's in Computer Science</h3>
                  <p className="text-muted-foreground">Faculdade de Informática e Administração Paulista • 2019 - 2022</p>
                  <p>
                    Graduated with honors, focusing on software engineering and web development.
                    Participated in various hackathons and coding competitions and developed a fullstack application as a final project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="rounded-lg overflow-hidden mb-8">
                <img 
                  src="/dist/images/temp_image.png"
                  alt="João Victor" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border">
                <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
                
                <div className="space-y-6">
                  {skillCategories.map((category) => (
                    <div key={category.name}>
                      <h3 className="font-medium mb-2">{category.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="font-mono text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
