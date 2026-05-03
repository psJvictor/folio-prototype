import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  const featuredProjects = getFeaturedProjects();

  return (
    <Layout>
      <HeroSection />

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <SectionHeading>{t("home.featuredProjects")}</SectionHeading>
            <Link to="/projects" className="group inline-flex items-center text-sm font-medium">
              {t("home.viewAllProjects")}
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
              <SectionHeading>{t("home.aboutMe")}</SectionHeading>
              <p className="text-lg mb-6">
                {t("home.aboutDescription")}
              </p>
              <Button asChild>
                <Link to="/about">{t("home.learnMore")}</Link>
              </Button>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden">
              <img
                src="https://i.imgur.com/D4QtpmM.jpeg"
                alt={t("home.imgAlt")}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 text-center">
        <div className="container max-w-3xl">
          <SectionHeading className="text-center">{t("home.cta.title")}</SectionHeading>
          <p className="text-xl text-muted-foreground mb-8">
            {t("home.cta.description")}
          </p>
          <Button asChild size="lg">
            <Link to="/contact">{t("home.cta.button")}</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
