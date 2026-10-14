import { MetadataRoute } from 'next';
import { REAL_POSTS } from '@/lib/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mediamafias.com';

  // Core Marketing & Revenue Pages
  const coreRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/b2b-radio', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/sync', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/academy', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/distribution', priority: 0.85, changeFrequency: 'monthly' as const },
    { route: '/api-pipeline', priority: 0.85, changeFrequency: 'monthly' as const },
    { route: '/spotlight', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/upload', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/contact', priority: 0.7, changeFrequency: 'monthly' as const }
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority
  }));

  // Dynamic Blog Articles
  const blogRoutes = REAL_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  return [...coreRoutes, ...blogRoutes];
}
