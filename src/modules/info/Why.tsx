import React from "react";
import { Flex, Text } from "@chakra-ui/react";

// Components
import Feature from "./Feature";

const Why = () => {
    return (
        <Flex direction="column" w={{ base: "100%", md: "40%" }}>
            <Text fontSize="4xl" fontWeight="700" mb="7">
                Why Work With GradCapFinder?
            </Text>
            <Feature
                title="Community"
                description="We find successful PhD’s create community. We help graduate students identify the members of their community. The world map on this page represents our community of PhDs."
            />
            <Feature
                title="Assessment"
                description="We recognize successful PhD's journey to assess themselves and their work. We provide students with ways to constructively assess themselves and their work. We know PhDs all over the world who continually assess themselves and their work."
            />
            <Feature
                title="Knowledge"
                description="We value successful PhD’s efforts to produce knowledge for the world to consume. We help PhDs turn their efforts into knowledge. Join our global community of knowledge makers."
            />
        </Flex>
    );
};

export default Why;
