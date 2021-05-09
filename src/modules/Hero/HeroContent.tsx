import React from "react";
import { Flex, Text, Image, Button } from "@chakra-ui/react";

// Components
import PrimaryButton from "../../components/PrimaryButton";

const Header = () => {
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
                    <PrimaryButton variant={false} text="Free Consultation" />
                    <Flex mt={{ base: "1.5em", md: "0" }}>
                        <PrimaryButton variant={true} text="Learn More" />
                    </Flex>
                </Flex>
            </Flex>
            <Image
                boxSize="50%"
                src="https://res.cloudinary.com/domqwdeiu/image/upload/v1620541790/gradcapfinder/HeroImage_ngscbz.jpg"
                alt="Graduating Students"
            />
        </Flex>
    );
};

export default Header;
