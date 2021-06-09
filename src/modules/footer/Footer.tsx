import React from "react"
import { Flex, Text } from "@chakra-ui/react"

// Components
import Button from "../../components/Button"

const Footer = () => {
    return (
        <Flex
            bg="brand.blue"
            h="10em"
            justify="space-between"
            p="2em 4em"
            alignItems="center"
            direction={{ base: "column", sm: "row" }}
        >
            <Text
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="700"
                color="white"
                mr={{ base: "0", sm: "1em" }}
            >
                GradCapFinder
            </Text>
            <Button
                text="Free Consultation"
                calendly={true}
                meetingType="freeConsultation"
            />
        </Flex>
    )
}

export default Footer
