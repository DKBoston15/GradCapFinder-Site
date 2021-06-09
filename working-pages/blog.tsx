import React from "react"
import { Flex, Text, Box, SimpleGrid } from "@chakra-ui/react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import { hotjar } from "react-hotjar"

import Button from "../src/components/Button"
hotjar.initialize(2444366, 6)
function BlogPage({ data }) {
    const post = data.allMdx.nodes
    return (
        <Flex justify="center" direction="column" align="center">
            <Helmet>
                <meta charSet="utf-8" />
                <title>The Graduate Feed</title>
                <link rel="canonical" href="http://gradcapfinder.com" />
            </Helmet>
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
            <Flex direction="column" w="80%" mt="5em">
                <Text fontSize="5xl" fontWeight="700">
                    The Graduate Feed
                </Text>
                <Flex bg="tomato" height="480px" mt={10}></Flex>
                <SimpleGrid columns={{ md: 2, lg: 3 }} spacing="40px" mt="5em">
                    {post.map((post: any) => {
                        if (post.frontmatter) {
                            const title =
                                post.frontmatter.title || post.fields.slug
                            return (
                                <Link to={post.slug} key={post.slug}>
                                    <Box bg="tomato" height="320px">
                                        <h1>{title}</h1>
                                        <p>{post.frontmatter.date}</p>
                                        <p>{post.frontmatter.description}</p>
                                    </Box>
                                </Link>
                            )
                        }
                    })}
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}

export default BlogPage

export const pageQuery = graphql`
    {
        site {
            id
            siteMetadata {
                description
                title
            }
        }
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                frontmatter {
                    date(formatString: "Do MMMM YYYY")
                    title
                    description
                }
                slug
            }
        }
    }
`
