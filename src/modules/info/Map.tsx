import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

const Map = () => {
    return (
        <Flex direction="column" w={{ base: "100%", lg: "50%" }}>
            <StaticImage
                src="../../images/Flag_Map.svg"
                alt="Country Map"
                placeholder="tracedSVG"
            />
            <Text mt="5" color="brand.gray">
                Not Shown Above: <br /> Belize, Yemen
            </Text>
        </Flex>
    );
};

export default Map;
