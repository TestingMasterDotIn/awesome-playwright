import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  stars?: number;
  isGithub?: boolean;
}

const ResourceCard = ({ 
  title, 
  description, 
  url, 
  category, 
  tags, 
  stars, 
  isGithub = false 
}: ResourceCardProps) => {
  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border/50 hover:border-primary/20">
      <CardContent className="p-6 h-full flex flex-col">
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
      </CardContent>
    </Card>
  );
};

export default ResourceCard;