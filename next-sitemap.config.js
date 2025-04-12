/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.shepherdcms.org",
  generateRobotsTxt: true, // will also generate robots.txt
  sitemapSize: 7000, // optional: number of URLs per sitemap file
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/admin", "/auth/*"], // optional: exclude private routes
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://www.shepherdcms.org/sitemap.xml", // This will be generated automatically
    ],
  },
};
