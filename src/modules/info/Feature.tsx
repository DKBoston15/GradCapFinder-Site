import React from "react"
import { Flex, Text, Box } from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons"

const Feature = ({ title, description1, description2, description3 }) => {
    return (
        <Flex direction="column" mb="5">
            <Flex alignItems="center">
                <CheckCircleIcon w={7} h={7} color="brand.blue" />
                <Text fontWeight="700" mt={3} fontSize="2xl" ml="3" pb="3">
                    {title}
                </Text>
            </Flex>
            <Text fontWeight="500" mt={3}>
                {description1} <b>{description2}</b> {description3}
            </Text>
        </Flex>
    )
}

export default Feature
