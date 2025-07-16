module.exports = {
  defaults: {
    concurrency: 4,
    standard: 'WCAG2AA',
    runners: ['axe'],
    timeout: 30000,
    chromeLaunchConfig: {
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
  }
};
