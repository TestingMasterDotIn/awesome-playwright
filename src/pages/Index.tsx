import { useState, useMemo, useRef } from "react";
import Hero from "@/components/Hero";
import ResourceCard from "@/components/ResourceCard";
import SearchFilters from "@/components/SearchFilters";
import { playwrightResources, categories } from "@/data/resources";
import {  Globe, ExternalLink} from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const resourcesRef = useRef<HTMLElement>(null);

  const scrollToResources = () => {
    resourcesRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToGitHubRepos = () => {
    setSelectedCategory("GitHub Repos");
    setSearchTerm("");
    setTimeout(() => {
      resourcesRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const filteredResources = useMemo(() => {
    return playwrightResources.filter((resource) => {
      const matchesSearch = 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = 
        selectedCategory === "All" || resource.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Hero 
        onExploreResources={scrollToResources}
        onGitHubRepos={scrollToGitHubRepos}
      />
      
      <section ref={resourcesRef} className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Amazing Playwright Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated collection of tools, tutorials, and community resources to supercharge your Playwright testing journey.
          </p>
        </div>

        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        <div className="mb-6 text-sm text-muted-foreground">
          Showing {filteredResources.length} of {playwrightResources.length} resources
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="animate-fade-in">
              <ResourceCard {...resource} />
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No resources found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}
      </section>
      
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center space-x-4">
              <p className="text-gray-600 dark:text-gray-400">
                TestMart is part of the 
              </p>
              <a
                href="https://testingmaster.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                data-testid="footer-testingmaster-link"
              >
                <Globe className="h-4 w-4" />
                <span>TestingMaster.in</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <p className="text-gray-600 dark:text-gray-400">
                ecosystem
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Built for testing professionals and automation engineers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;