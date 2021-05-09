import React from "react";
import { Flex, Text, Image, Button } from "@chakra-ui/react";

// Components
import PrimaryButton from "../../components/PrimaryButton";

const Header = () => {
    return (
        <Flex alignItems="center" justify="space-between" width="90%">
            <Flex direction="column">
                <Text fontSize="5xl" fontWeight="900">
                    Finish your degree,
                    <br /> publish your research,
                    <br /> construct your expertise,
                    <br /> <Text color="brand.blue">become a scholar</Text>
                </Text>
                <Flex w="25em" justify="space-between" mt="2em">
                    <PrimaryButton variant={false} text="Free Consultation" />
                    <PrimaryButton variant={true} text="Learn More" />
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
