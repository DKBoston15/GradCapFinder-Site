import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
// Components
import Button from "../../components/Button";

const Header = () => {
    return (
        <Flex alignItems="center" justify="space-between" width="90%">
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700">
                GradCapFinder
            </Text>
            <Box display={{ base: "none", sm: "flex" }}>
                <Link to="contact" smooth={true} duration={1000}>
                    <Button text="Contact Us" />
                </Link>
            </Box>
        </Flex>
    );
};

export default Header;
