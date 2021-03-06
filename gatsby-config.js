module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "name": "Ana Paula Fonseca",
        "icons": [
            {
                "src": "/android-chrome-144x144.png",
                "sizes": "144x144",
                "type": "image/png"
            }
        ],
        "theme_color": "#ffffff",
        "background_color": "#ffffff",
        "display": "standalone"
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-wordpress-fix',
      options: {
        /*
        * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
        * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com' 
        */
        baseUrl: 'anapaulaphoto.wordpress.com',
        // The protocol. This can be http or https.
        protocol: 'http',
        // Indicates whether the site is hosted on wordpress.com. 
        // If false, then the asumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: true,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents. 
        // This feature is untested for sites hosted on Wordpress.com
        useACF: false,
        // If auth.user and auth.pass are filled, then the source plugin will be allowed to access endpoints that are protected with .htaccess. 
        auth: {
          user: process.env.WP_USER,
          pass: process.env.WP_PASSWORD,
          sendImmediately: false,

          // https://developer.wordpress.com/apps/
          clientId: process.env.WP_CLIENT_ID,
          clientSecret: process.env.WP_CLIENT_SECRET
        },
        

        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build` 
        // It can help you debug specific API Endpoints problems 
        verboseOutput: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-103565076-1',
      },
    },    

  ],
}
