import React from "react"
import { Flex, Spacer } from "@chakra-ui/react"

// Components
import CollegeBanner from "../../components/CollegeBanner"
import Map from "./Map"
import Why from "./Why"

import tamu from "../../images/info_images/tamu.png"
import chicago from "../../images/info_images/chicago.png"
import harvard from "../../images/info_images/harvard.png"
import vanderbilt from "../../images/info_images/vanderbilt.png"

const Info = () => {
    let images = [
        {
            link: tamu,
            alt: "Texas A&M University"
        },
        {
            link: chicago,
            alt: "University of Chicago"
        },
        {
            link: harvard,
            alt: "Harvard University"
        },
        {
            link: vanderbilt,
            alt: "Vanderbilt University"
        }
    ]
    return (
        <Flex
            id="info"
            width="100%"
            direction="column"
            alignItems="center"
            bg="brand.bg"
            mt={"3.7em"}
            pb={"2.5em"}
        >
            <CollegeBanner images={images} />
            <Flex
                mt={10}
                w="90%"
                direction={{ base: "column-reverse", lg: "row" }}
            >
                <Map />
                <Spacer />
                <Why />
            </Flex>
        </Flex>
    )
}

export default Info
