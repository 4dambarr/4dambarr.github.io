module.exports = {
  siteMetadata: {
    siteUrl: "https://www.adambarr.io",
    title: "Adam Barr",
    description: "Hi, I'm Adam Barr, a computer science student and software developer, this website gives you a bit more information about me",
    author: "Adam Barr"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `./src/content`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
