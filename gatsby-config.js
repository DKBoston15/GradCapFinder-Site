module.exports = {
    siteMetadata: {
        title: "GradCapFinder",
        author: {
            name: "GradCapFinder",
            description:
                "An Educational Consulting Service for Graduate Students."
        },
        description: "An Educational Consulting Service for Graduate Students.",
        siteUrl: "https://nifty-haibt-162826.netlify.app/"
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
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog`,
                name: `blog`
            }
        },
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`poppins`],
                display: "swap",
                extensions: [`.mdx`, `.md`],
                name: "blog"
            }
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `tomato`,
                // Disable the loading spinner.
                showSpinner: false
            }
        },
        {
            resolve: `gatsby-plugin-scroll-indicator`,
            options: {
                // Configure color of the scroll indicator
                color: "#209EBC",
                // Height of the scroll indicator
                height: "3px",
                // Configure paths where the scroll indicator will appear
                paths: ["/blog/**"],
                // Configure the z-index of the indicator element
                zIndex: `9999`
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
}
