import React from "react";
import { Box, Flex, Button, Spacer, Heading } from "@chakra-ui/react";

const Header = () => {
    return (
        <Flex>
            <Box p="2">
                <Heading size="md">GradCapFinder</Heading>
            </Box>
            <Spacer />
            <Box>
                <Button bg="brand.orange" color="white" mr="4">
                    Contact Us
                </Button>
            </Box>
        </Flex>
    );
};

export default Header;
