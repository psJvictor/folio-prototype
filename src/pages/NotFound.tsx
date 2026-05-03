
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="container min-h-[70vh] flex flex-col items-center justify-center py-12 text-center">
        <h1 className="text-7xl md:text-9xl font-bold text-primary">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6">{t("notFound.title")}</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          {t("notFound.description")}
        </p>
        <Button asChild size="lg">
          <Link to="/">{t("notFound.backHome")}</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
