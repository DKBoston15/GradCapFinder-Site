import React from "react";
import { Flex, Text } from "@chakra-ui/react";

// Components
import Feature from "./Feature";

const Why = () => {
    return (
        <Flex direction="column" w="40%">
            <Text fontSize="4xl" fontWeight="700" mb="7">
                Why Work With GradCapFinder?
            </Text>
            <Feature
                title="Experienced"
                description="We developed our system through years of work with graduate students in the Life, Physical,  and Social sciences as well as the Humanities. "
            />
            <Feature
                title="Remote"
                description="Since the beginning we have worked with students all over the world from the United States to Bahrain and Argentina."
            />
            <Feature
                title="Passionate"
                description="We live and breath what we do everyday, and what we do is help coach and prepare graduate students to finish their degree and become scholars. We even wrote a book about it!"
            />
        </Flex>
    );
};

export default Why;
