import React from "react";
import { Box, Flex, Button, Spacer, Text } from "@chakra-ui/react";

// Components
import PrimaryButton from "../../components/PrimaryButton";

const Header = () => {
    return (
        <Flex alignItems="center" justify="space-between" width="90%">
            <Text fontSize="3xl" fontWeight="700">
                GradCapFinder
            </Text>
            <Box>
                <PrimaryButton text="Contact Us" variant={false} />
            </Box>
        </Flex>
    );
};

export default Header;
