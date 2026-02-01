/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://algosource.in/docs',
  generateRobotsTxt: false, // We created a custom robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/api/*', '/404', '/_*'],
  generateIndexSitemap: true,
  outDir: 'public',
  transform: async (config, path) => {
    // Custom priority based on path depth and importance
    let priority = 0.7;
    let changefreq = 'weekly';

    // Home page gets highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    // Main sections get high priority
    else if (path.split('/').length === 2) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    // Programs and getting-started are important
    else if (path.includes('/programs') || path.includes('/getting-started') || path.includes('/before-you-start')) {
      priority = 0.85;
      changefreq = 'weekly';
    }
    // Sub-pages
    else {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
  additionalPaths: async (config) => {
    return [
      { loc: '/', changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() },
    ];
  },
};
