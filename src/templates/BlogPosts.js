import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Flex, Text, Box } from "@chakra-ui/react"
import Button from "../components/Button"

const BlogPosts = ({ data, pageContext }) => {
    const { frontmatter, body } = data.mdx
    const { previous, next } = pageContext
    return (
        <Flex justify="center" direction="column" align="center">
            <Flex
                alignItems="center"
                justify="space-between"
                width="90%"
                mt={10}
            >
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700">
                    <Link to="/">GradCapFinder</Link>
                </Text>
                <Flex alignItems="center">
                    <Link to="/">
                        <Text fontSize="lg" pr={5} fontWeight="600">
                            Home
                        </Text>
                    </Link>
                    <Box display={{ base: "none", sm: "flex" }}>
                        <Button
                            text="Subscribe"
                            onClick={() => {
                                console.log("Subscribed")
                            }}
                        />
                    </Box>
                </Flex>
            </Flex>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <article>
                <MDXRenderer>{body}</MDXRenderer>
            </article>
            {previous === false ? null : (
                <>
                    {previous && (
                        <Link to={previous.node.fields.slug}>
                            <Button text={previous.node.frontmatter.title} />
                        </Link>
                    )}
                </>
            )}
            {next === false ? null : (
                <>
                    {next && (
                        <Link to={next.node.fields.slug}>
                            <Button text={next.node.frontmatter.title} />
                        </Link>
                    )}
                </>
            )}
        </Flex>
    )
}

export default BlogPosts

export const query = graphql`
    query PostsBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            slug
            frontmatter {
                title
                date(formatString: "Do MMMM YYYY")
            }
        }
    }
`
