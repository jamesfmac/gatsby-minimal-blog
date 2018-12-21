module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'James.writes', // Navigation and Site Title
  siteTitleAlt: 'James McManamey - Blog', // Alternative Site title for SEO
  siteUrl: 'https://blog.jmcmanamey.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: '/social/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/j-favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Thoughts on building products, teams, and companies', // Your site description
  author: 'James McManamey', // Author for schemaORGJSONLD
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@jamesmcmanamey', // Twitter Username - Optional
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#12C1D5',
  backgroundColor: '#f9f9f9',

  // Settings for typography.js
  headerFontFamily: 'Helvetica Neue',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '18px',
};
