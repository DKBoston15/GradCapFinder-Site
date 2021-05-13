import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

// Components
import Button from "../../components/Button";

const Header = () => {
    return (
        <Flex alignItems="center" justify="space-between" width="90%">
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700">
                GradCapFinder
            </Text>
            <Box display={{ base: "none", sm: "flex" }}>
                <Button text="Contact Us" />
            </Box>
        </Flex>
    );
};

export default Header;
