
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="container min-h-[70vh] flex flex-col items-center justify-center py-12 text-center">
        <h1 className="text-7xl md:text-9xl font-bold text-primary">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
