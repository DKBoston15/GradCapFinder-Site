module.exports = {
    siteMetadata: {
        title: "GradCapFinder"
    },
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "@chakra-ui/gatsby-plugin",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png"
            }
        },
        "gatsby-transformer-remark",
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`poppins`],
                display: "swap"
            }
        },
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/"
            },
            __key: "pages"
        }
    ]
};
