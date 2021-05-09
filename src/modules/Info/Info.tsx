import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";

// Components
import CollegeBanner from "../../components/CollegeBanner";
import Map from "./Map";
import Why from "./Why";

const Info = () => {
    let images = [
        {
            link:
                "https://res.cloudinary.com/domqwdeiu/image/upload/v1620597298/gradcapfinder/TAMU_joeqoa.png",
            alt: "Texas A&M University"
        },
        {
            link:
                "https://res.cloudinary.com/domqwdeiu/image/upload/v1620597299/gradcapfinder/UCHICAGO_obb9hx.png",
            alt: "University of Chicago"
        },
        {
            link:
                "https://res.cloudinary.com/domqwdeiu/image/upload/v1620597298/gradcapfinder/HARVARD_roofxj.png",
            alt: "Harvard University"
        },
        {
            link:
                "https://res.cloudinary.com/domqwdeiu/image/upload/v1620597299/gradcapfinder/VANDERBILT_kindlp.png",
            alt: "Vanderbilt University"
        }
    ];
    return (
        <Flex
            width="100%"
            direction="column"
            alignItems="center"
            bg="brand.bg"
            mt={"3.7em"}
            pb={"5em"}
        >
            <CollegeBanner images={images} />
            <Flex
                mt={10}
                w="90%"
                direction={{ base: "column-reverse", sm: "row" }}
            >
                <Map />
                <Spacer />
                <Why />
            </Flex>
        </Flex>
    );
};

export default Info;
