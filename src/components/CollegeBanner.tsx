import React from "react";
import { Flex, Image, Spacer } from "@chakra-ui/react";

const CollegeBanner = ({ images }) => {
    return (
        <Flex width="95%" display={{ base: "none", sm: "flex" }}>
            <Image
                src={images[0].link}
                alt={images[0].alt}
                objectFit="contain"
                w="15%"
            />
            <Spacer />
            <Image
                src={images[1].link}
                alt={images[1].alt}
                objectFit="contain"
                w="15%"
            />
            <Spacer />
            <Image
                src={images[2].link}
                alt={images[2].alt}
                objectFit="contain"
                w="15%"
            />
            <Spacer />
            <Image
                src={images[3].link}
                alt={images[3].alt}
                objectFit="contain"
                w="15%"
            />
        </Flex>
    );
};

export default CollegeBanner;
