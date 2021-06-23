import React from "react"
import { Flex, Text, Box, SimpleGrid } from "@chakra-ui/react"
import { Helmet } from "react-helmet"
import { Link, graphql, navigate } from "gatsby"
import Button from "../components/Button"
import BlogFooter from '../modules/footer/BlogFooter'

function BlogPage({ data }) {
    const post = data.allMdx.nodes
    const toBlog = (slug) => {
        navigate(slug)
    }
    return (
        <>
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
            <Box display="flex" alignItems="center">
                <Text fontSize="5xl" fontWeight="700" textAlign={{sm: 'center', lg: 'left'}}>
                    The Graduate Feed
                </Text>
                <Box display={{sm: 'none', lg: 'flex'}} ml={5}><Button text="Subscribe"/></Box>
                </Box>
                <Flex display="flex" flexDirection={{sm: 'column', md: 'row'}}>
                    <Flex bg="tomato" height="380px" width={{md: '50%', lg: '100%'}} mt={10} bgGradient="url('https://picsum.photos/1500/480')" flexDirection="column"/>
                    <Box width={{md: '50%', lg: '100%'}} ml={10} display="flex" flexDirection="column" justifyContent="space-between" >
                        <Box>
                        <Text mt={12}>02/21/2021</Text>
                        <Text fontSize="4xl" fontWeight="700">Graduate education, Five F-Words, and the hindsight of an early-career researcher</Text>
                        <Text mt={1}>This is a test description!</Text>
                        </Box>
                        <Box display="flex" mt={{sm: 5, lg: 0}}><Text borderBottom="2px solid #209EBC" mt={1}>Cashion Cain</Text></Box>
                    </Box>
                </Flex>
                <SimpleGrid columns={{ md: 2, lg: 3 }} spacing="40px" mt="5em" height="100%">
                    {post.map((post: any) => {
                        if (post.frontmatter) {
                            const title =
                                post.frontmatter.title || post.fields.slug
                            return (
                                <Box>
                                    <Box height="220px" cursor="pointer" bgGradient={`url(${post.frontmatter.thumbnail})`} onClick={() => {toBlog(post.slug)}}/>
                                    <Box display="flex" flexDirection="column" justifyContent="space-between" height="12em">
                                        <Box>
                                            <Link to={post.slug} key={post.slug}>
                                                <Text mt={4} color="#595959">02/21/2021</Text>
                                                <Text fontSize="18px" fontWeight="700">{title}</Text>
                                                <Text mt={1}>{post.frontmatter.description}</Text>
                                            </Link>
                                        </Box>
                                        <Box display="flex"><Text borderBottom="2px solid #209EBC">{post.frontmatter.author}</Text></Box>
                                    </Box>  
                                </Box>
                                
                            )
                        }
                    })}
                </SimpleGrid>
            </Flex>
        </Flex>
        <Box pt={250}><BlogFooter/></Box>
        </>
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
                    thumbnail
                    author
                }
                slug
            }
        }
    }
`
