
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-32 page-transition">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-6">Hi, I'm John Doe</h1>
          <p className="text-xl text-foreground/80 mb-8">
            A passionate developer crafting beautiful digital experiences
          </p>
          <div className="flex gap-4">
            <a
              href="/projects"
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
