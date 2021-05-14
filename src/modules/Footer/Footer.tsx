import React from "react";
import { Flex, Text } from "@chakra-ui/react";

// Components
import Button from "../../components/Button";

const Footer = () => {
    return (
        <Flex
            bg="brand.blue"
            h="10em"
            justify="space-between"
            p={{ base: "2em 2em", md: "2em 4em" }}
            alignItems="center"
        >
            <Text
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="700"
                color="white"
            >
                GradCapFinder
            </Text>
            <Button text="Free Consultation" />
        </Flex>
    );
};

export default Footer;
