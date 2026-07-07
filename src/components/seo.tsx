import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export function SEO({ title, description, image, url }: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = `${title} | Safron Enterprise Consulting`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Open Graph
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="og:${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", `og:${property}`);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updateOGTag("title", title);
    updateOGTag("description", description);
    updateOGTag("type", "website");
    
    if (image) updateOGTag("image", image);
    if (url) updateOGTag("url", url);

  }, [title, description, image, url]);

  return null;
}
