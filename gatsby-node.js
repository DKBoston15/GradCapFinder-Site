const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const BlogPostTemplate = path.resolve("./src/templates/BlogPosts.js")

    return graphql(`
        {
            allMdx {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if (result.error) {
            throw result.errors
        }
        const posts = result.data.allMdx.edges
        posts.forEach((post, index) => {
            const previous = index === post.length - 1 ? null : posts[index + 1]
            const next = index === 0 ? null : posts[index - 1]
            createPage({
                path: post.node.fields.slug,
                component: BlogPostTemplate,
                context: {
                    slug: post.node.fields.slug,
                    previous,
                    next
                }
            })
        })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === "Mdx") {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: "slug",
            node,
            value: `/blog${value}`
        })
    }
}
