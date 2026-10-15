import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/api/generate/'],
      },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot-Extended',
          'CCBot'
        ],
        allow: '/',
      }
    ],
    sitemap: 'https://www.mediamafias.com/sitemap.xml',
  };
}
