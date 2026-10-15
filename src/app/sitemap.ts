import { MetadataRoute } from 'next';
import { REAL_POSTS } from '@/lib/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mediamafias.com';

  // Core Marketing, Catalog & B2B Pages
  const coreRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/catalog', priority: 0.95, changeFrequency: 'daily' as const },
    { route: '/licensing', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/academy', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/insights', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/b2b-radio', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/sync', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority
  }));

  // Dynamic Insight / Guide Articles
  const insightRoutes = REAL_POSTS.map((post) => ({
    url: `${baseUrl}/insights/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85
  }));

  return [...coreRoutes, ...insightRoutes];
}
