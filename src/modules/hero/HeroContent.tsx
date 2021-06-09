import React from "react"
import { Flex, Text, Box } from "@chakra-ui/react"
import { Link } from "react-scroll"
import { StaticImage } from "gatsby-plugin-image"

// Components
import Button from "../../components/Button"

// Images
// import heroImage from "./images/hero-image.jpg";

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
                    w={{
                        base: "100%",
                        lg: "90%",
                        xl: "70%"
                    }}
                    justify="space-between"
                    alignItems="center"
                    mt="2em"
                    direction={{ base: "column", md: "row" }}
                >
                    <Button
                        text="Free Consultation"
                        calendly={true}
                        meetingType="freeConsultation"
                    />
                    <Flex
                        mt={{ base: "1.5em", md: "0" }}
                        ml={{ base: "0", md: "5" }}
                    >
                        <Link to="info" smooth={true} duration={1000}>
                            <Button variant="secondary" text="Learn More" />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
            <Box boxSize="48%">
                <StaticImage
                    src="../../images/hero-image.jpg"
                    alt="Graduating Students"
                    placeholder="tracedSVG"
                />
            </Box>
        </Flex>
    )
}

export default Header
