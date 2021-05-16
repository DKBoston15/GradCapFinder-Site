import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

// SVG
import MapSVG from "./images/Flag_Map.svg";

const Map = () => {
    return (
        <Flex direction="column" w={{ base: "100%", lg: "50%" }}>
            <Image src={MapSVG} alt="Country Map" />
            <Text mt="5" color="brand.gray">
                Not Shown Above: <br /> Belize, Yemen
            </Text>
        </Flex>
    );
};

export default Map;
