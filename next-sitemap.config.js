// next-sitemap.config.js

module.exports = {
  siteUrl: 'https://bitlifefree.com', 
  generateRobotsTxt: true,             
  sitemapSize: 7000,                   
  changefreq: 'weekly',                
  priority: 0.7,                       
  exclude: ['/404'],                   
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ]
  }
}
