/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mahlangu.dev',
  generateRobotsTxt: true,
  // Optionally, exclude or include specific routes
  exclude: ['/admin/*'],
};
