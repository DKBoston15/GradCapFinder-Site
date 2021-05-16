import React from "react";
import { Flex, Text } from "@chakra-ui/react";

// Components
import Video from "./Video";

const Videos = () => {
    return (
        <Flex direction="column" alignItems="center" justify="center">
            <Text mt="5" fontSize="4xl" fontWeight="700">
                Hear From Our Students
            </Text>
            <Text mt="3" textAlign="center" fontSize="lg">
                Listen to Jennifer and Katie share their experiences in working
                with GradCapFinder.
            </Text>
            <Video link="https://www.youtube.com/embed/Yky3veiHBMg" />
            <Video link="https://www.youtube.com/embed/YMiqb2VcTjo" />
        </Flex>
    );
};

export default Videos;
