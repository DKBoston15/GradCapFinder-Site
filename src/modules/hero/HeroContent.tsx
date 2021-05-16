import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { openPopupWidget } from "react-calendly";

// Components
import Button from "../../components/Button";

// Images
import heroImage from "./images/hero-image.jpg";

const Header = () => {
    const openCalendly = () => {
        let options = {
            url: "https://calendly.com/gradcapfinder"
        };
        openPopupWidget(options);
    };

    return (
        <Flex
            alignItems="center"
            justify="space-between"
            width="90%"
            direction={{ base: "column-reverse", md: "row" }}
        >
            <Flex direction="column">
                <Text
                    fontSize={{ base: "2xl", lg: "4xl", xl: "5xl" }}
                    fontWeight="900"
                    textAlign={{ base: "center", md: "left" }}
                >
                    Finish your degree,
                    <br /> publish your research,
                    <br /> construct your expertise,
                    <br /> <Text color="brand.blue">become a scholar</Text>
                </Text>
                <Flex
                    w="25em"
                    justify="space-between"
                    alignItems="center"
                    mt="2em"
                    direction={{ base: "column", md: "row" }}
                >
                    <Button text="Free Consultation" calendly={true} />
                    <Flex mt={{ base: "1.5em", md: "0" }}>
                        <Link to="info" smooth={true} duration={1000}>
                            <Button variant="secondary" text="Learn More" />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
            <Image boxSize="50%" src={heroImage} alt="Graduating Students" />
        </Flex>
    );
};

export default Header;
