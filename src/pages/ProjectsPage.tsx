
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useTranslation } from "react-i18next";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mb-12">
          <SectionHeading>{t("projects.title")}</SectionHeading>
          <p className="text-lg text-muted-foreground">
            {t("projects.description")}
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
