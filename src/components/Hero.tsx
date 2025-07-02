import { Button } from "@/components/ui/button";
import { Search, Github, BookOpen, Zap } from "lucide-react";
import heroImage from "@/assets/playwright-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-primary-glow/10" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Awesome Playwright
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Your one-stop destination for everything Playwright. Discover tools, resources, 
            tutorials, and community projects that make web testing awesome.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group">
              <Search className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Explore Resources
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              GitHub Repos
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">Learning Resources</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">Testing Tools</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border">
              <Github className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;