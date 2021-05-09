import React from "react";
import { Box, Flex, Button, Spacer, Text } from "@chakra-ui/react";

// Components
import PrimaryButton from "../../components/PrimaryButton";

const Header = () => {
    return (
        <Flex alignItems="center" justify="space-between" width="90%">
            <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="700">
                GradCapFinder
            </Text>
            <Box display={{ base: "none", sm: "flex" }}>
                <PrimaryButton text="Contact Us" variant={false} />
            </Box>
        </Flex>
    );
};

export default Header;
