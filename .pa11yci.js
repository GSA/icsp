module.exports = {
  defaults: {
    concurrency: 4,
    standard: 'WCAG2AA',
    runners: ['axe'],
    chromeLaunchConfig: {
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
  },
  sitemap: {
    url: 'http://localhost:4000/sitemap.xml',
    exclude: [
      '/.*\\.pdf$',
      '/admin'
    ]
  }
};
