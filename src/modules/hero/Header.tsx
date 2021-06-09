import React from "react"
import {
    Box,
    Flex,
    Spacer,
    Text,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    IconButton
} from "@chakra-ui/react"
import { Link as ReactLink } from "react-scroll"
import { Link, navigate } from "gatsby"
import { ChatIcon, InfoIcon, PhoneIcon, HamburgerIcon } from "@chakra-ui/icons"
// Components
import Button from "../../components/Button"

const Header = () => {
    const navigateToPage = (page) => {
        navigate(`/${page}`)
    }

    return (
        <Flex alignItems="center" justify="space-between" width="90%">
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700">
                GradCapFinder
            </Text>
            <Flex align="center">
                <Box display={{ base: "none", md: "flex" }}>
                    {/* <Link to="/blog">
                        <Text fontSize="lg" pr={5} fontWeight="600">
                            Blog
                        </Text>
                    </Link> */}
                    <Link to="/current-students">
                        <Text fontSize="lg" pr={5} fontWeight="600">
                            Current Students
                        </Text>
                    </Link>
                    <Link to="/faq">
                        <Text fontSize="lg" pr={5} fontWeight="600">
                            FAQ
                        </Text>
                    </Link>
                </Box>
                <Box display={{ base: "flex", md: "none" }}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<HamburgerIcon />}
                            variant="outline"
                        />
                        <MenuList>
                            {/* <MenuItem
                                onClick={() => navigateToPage("blog")}
                                icon={<ChatIcon />}
                            >
                                Blog
                            </MenuItem> */}
                            <MenuItem
                                onClick={() =>
                                    navigateToPage("current-students")
                                }
                                icon={<InfoIcon />}
                            >
                                Current Students
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigateToPage("faq")}
                                icon={<InfoIcon />}
                            >
                                FAQ
                            </MenuItem>
                            <ReactLink
                                to="contact"
                                smooth={true}
                                duration={1000}
                            >
                                <MenuItem icon={<PhoneIcon />}>
                                    Contact Us
                                </MenuItem>
                            </ReactLink>
                        </MenuList>
                    </Menu>
                </Box>
                <Box display={{ base: "none", md: "flex" }}>
                    <ReactLink to="contact" smooth={true} duration={1000}>
                        <Button text="Contact Us" />
                    </ReactLink>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Header
