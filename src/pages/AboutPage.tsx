
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  const experiences = [
    { key: "job1", type: "work" },
    { key: "job2", type: "work" },
    { key: "job3", type: "work" },
    { key: "job4", type: "work" },
    { key: "edu1", type: "edu" },
    { key: "edu2", type: "edu" },
  ];

  return (
    <Layout>
      <div className="container py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <SectionHeading>{t("about.title")}</SectionHeading>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg">{t("about.bio1")}</p>
              <p>{t("about.bio2")}</p>
              <p>{t("about.bio3")}</p>
              <p>{t("about.bio4")}</p>

              <h2 className="text-2xl font-bold mt-10 mb-4">{t("about.education")}</h2>

              <div className="space-y-6">
                {experiences.map(({ key, type }) => (
                  <div key={key}>
                    <h3 className="text-xl font-bold">{t(`about.exp.${key}.title`)}</h3>
                    <p className="text-muted-foreground">
                      {type === "edu"
                        ? t(`about.exp.${key}.institution`)
                        : t(`about.exp.${key}.company`)}
                    </p>
                    {t(`about.exp.${key}.description`) && (
                      <p>{t(`about.exp.${key}.description`)}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src="https://i.imgur.com/D4QtpmM.jpeg"
                  alt={t("about.imgAlt")}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h2 className="text-xl font-bold mb-4">{t("about.skills")}</h2>

                <div className="space-y-6">
                  {skillCategories.map((category) => (
                    <div key={category.key}>
                      <h3 className="font-medium mb-2">{t(`skills.${category.key}`)}</h3>
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
