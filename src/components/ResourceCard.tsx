import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Globe } from "lucide-react";
import { useState } from "react";
import { useSiteInfo } from "@/hooks/use-site-info";

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  stars?: string | number;
  isGithub?: boolean;
  customImage?: string; // Optional custom image URL
}

const ResourceCard = ({ 
  title, 
  description, 
  url, 
  category, 
  tags, 
  stars, 
  isGithub = false,
  customImage 
}: ResourceCardProps) => {
  const { siteInfo, loading, error } = useSiteInfo(url);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getThumbnailContent = () => {
    // If custom image is provided, use it with priority
    if (customImage && !imageError) {
      return (
        <img
          src={customImage}
          alt={`Custom preview of ${title}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={handleImageError}
          loading="lazy"
        />
      );
    }

    // Show loading state
    if (loading) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 animate-pulse">
          <div className="text-center">
            <Globe className="h-8 w-8 text-muted-foreground mx-auto mb-2 animate-spin" />
            <span className="text-xs text-muted-foreground">Loading...</span>
          </div>
        </div>
      );
    }

    // Show error state or fallback
    if (error || !siteInfo || (imageError && !customImage)) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="text-center">
            {isGithub ? (
              <Github className="h-12 w-12 text-primary mx-auto mb-2" />
            ) : (
              <Globe className="h-12 w-12 text-primary mx-auto mb-2" />
            )}
            <span className="text-sm font-medium text-primary">{isGithub ? 'GitHub' : 'Website'}</span>
          </div>
        </div>
      );
    }

    // For GitHub repos, show the OpenGraph image if available
    if (isGithub && siteInfo.image && !imageError) {
      return (
        <img
          src={siteInfo.image}
          alt={`Preview of ${title}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={handleImageError}
          loading="lazy"
        />
      );
    }

    // For other sites, create a custom thumbnail with favicon and info
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted p-6 text-center">
        <div className="mb-4">
          <img
            src={siteInfo.favicon}
            alt={`${title} favicon`}
            className="w-16 h-16 mx-auto rounded-lg shadow-sm"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-foreground line-clamp-2">{title}</h4>
          <p className="text-xs text-muted-foreground">{new URL(url).hostname}</p>
        </div>
      </div>
    );
  };
  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border/50 hover:border-primary/20">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Thumbnail Section */}
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg bg-muted">
          {getThumbnailContent()}
          
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-3">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            {isGithub && stars && (
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Star className="h-3 w-3" />
                <span>{stars}</span>
              </div>
            )}
          </div>          
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
            {description}
          </p>
          
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="text-xs py-0 px-2 h-5"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              asChild
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                {isGithub ? (
                  <Github className="mr-2 h-4 w-4" />
                ) : (
                  <ExternalLink className="mr-2 h-4 w-4" />
                )}
                {isGithub ? "View on GitHub" : "Visit Site"}
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;