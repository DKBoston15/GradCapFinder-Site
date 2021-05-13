import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const CustomSelect = ({ text }) => {
    return (
        <Flex>
            <Text fontWeight="600" fontSize="md" p=".5em 1.5em">
                {text}
            </Text>
        </Flex>
    );
};

export default CustomSelect;
