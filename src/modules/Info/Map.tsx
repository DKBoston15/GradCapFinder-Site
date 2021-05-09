import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

// SVG
import MapSVG from "./Images/Flag_Map.svg";

const Map = () => {
    return (
        <Flex direction="column" w="50%">
            <Image src={MapSVG} alt="Country Map" />
            <Text mt="5" color="brand.gray">
                Now Shown Above: <br /> Belize, Yemen
            </Text>
        </Flex>
    );
};

export default Map;
