import { useState, useEffect } from 'react';

interface SiteInfo {
  favicon: string;
  title: string;
  description: string;
  image?: string;
}

export const useSiteInfo = (url: string) => {
  const [siteInfo, setSiteInfo] = useState<SiteInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSiteInfo = async () => {
      try {
        setLoading(true);
        setError(false);

        // Extract domain from URL
        const domain = new URL(url).hostname;
        
        // Get favicon URL
        const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
        
        // For GitHub repos, we can extract better info
        let siteImage = faviconUrl;
        let siteTitle = '';
        let siteDescription = '';

        if (url.includes('github.com')) {
          // GitHub specific handling
          const pathParts = new URL(url).pathname.split('/').filter(Boolean);
          if (pathParts.length >= 2) {
            const owner = pathParts[0];
            const repo = pathParts[1];
            siteTitle = `${owner}/${repo}`;
            siteDescription = `GitHub repository by ${owner}`;
            siteImage = `https://opengraph.githubassets.com/1/${owner}/${repo}`;
          }
        } else {
          // For other sites, use domain as title
          siteTitle = domain;
          siteDescription = `Visit ${domain}`;
        }

        setSiteInfo({
          favicon: faviconUrl,
          title: siteTitle,
          description: siteDescription,
          image: siteImage
        });
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchSiteInfo();
    }
  }, [url]);

  return { siteInfo, loading, error };
};
