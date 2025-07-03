import { useState, useEffect } from "react";
import { X, ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TestingMasterFlyerProps {
  onClose: () => void;
}

const TestingMasterFlyer = ({ onClose }: TestingMasterFlyerProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md mx-auto relative animate-in fade-in-0 zoom-in-95 duration-300">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        
        <CardContent className="p-6 pt-12 text-center">
          <div className="mb-4">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              Welcome to Awesome-Playwright
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              This awesome Playwright resource collection is part of the larger TestingMaster.in ecosystem. 
              Discover more testing tools, frameworks, and learning paths!
            </p>
          </div>
          
          <div className="space-y-3">
            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => {
                window.open("https://testingmaster.in", "_blank");
                onClose();
              }}
            >
              <Globe className="h-4 w-4 mr-2" />
              Visit TestingMaster.in
              <ExternalLink className="h-3 w-3 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={onClose}
            >
              Continue Exploring
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            Built with ❤️ for the testing community
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestingMasterFlyer;
