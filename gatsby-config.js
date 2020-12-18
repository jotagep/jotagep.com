const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Jotagep - Web & Mobile Developer`,
    name: `Jotagep`,
    siteUrl: `https://jotagep.com`,
    description: `Jotagep es el mejor sitio sobre desarrollo móvil y web de habla hispana. Contenido sobre Flutter, React, Vue, Gatsby y mucho más en español`,
    author: `@jotagep_dev`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/jotagep_dev`,
      },
      {
        name: `github`,
        url: `https://github.com/jotagep`,
      },
      {
        name: `youtube`,
        url: `https://www.youtube.com/channel/UCfEnVdbamDIjezK-22kXC9Q`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        img: path.join(__dirname, 'src/img'),
        pages: path.join(__dirname, 'src/pages'),
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'img',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jotagep Website`,
        short_name: `Jotagep`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#7BCDF4`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              nodes {
                path
                context {
                  index
                }
              }
            }
        }`,
        resolveSiteUrl: ({ site }) => {
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map((node) => {
            let priority = null

            if (node.path === '/') {
              priority = 1.0
            } else {
              priority = 0.8
            }

            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: 'weekly',
              priority: priority,
            }
          }),
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-NNKCTM5',
        defaultDataLayer: { platform: 'web' },
        // DEBUG
        // includeInDevelopment: true,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
