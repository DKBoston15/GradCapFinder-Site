import React from "react"
import { Box, Flex, Spacer, Text } from "@chakra-ui/react"
import { Link as ReactLink } from "react-scroll"
import { Link } from "gatsby"
// Components
import Button from "../../components/Button"

const Header = () => {
    return (
        <Flex alignItems="center" justify="space-between" width="90%">
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700">
                GradCapFinder
            </Text>
            <Flex align="center">
                <Link to="/faq">
                    <Text fontSize="lg" pr={5} fontWeight="600">
                        FAQ
                    </Text>
                </Link>
                <Box display={{ base: "none", sm: "flex" }}>
                    <ReactLink to="contact" smooth={true} duration={1000}>
                        <Button text="Contact Us" />
                    </ReactLink>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Header
