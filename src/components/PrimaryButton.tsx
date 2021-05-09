import React from "react";
import { Button } from "@chakra-ui/react";

const PrimaryButton = ({ text, variant }) => {
    let button;
    if (variant) {
        button = (
            <Button
                bg="brand.blue"
                color="white"
                p="7"
                fontSize={{ base: "14px", md: "18px" }}
                _hover={{
                    background: "	hsl(192, 71%, 38%)"
                }}
                _focus={{
                    border: "none"
                }}
            >
                {text}
            </Button>
        );
    } else {
        button = (
            <Button
                bg="brand.orange"
                color="white"
                p="7"
                fontSize={{ base: "14px", md: "18px" }}
                _hover={{
                    background: "hsl(32, 98%, 45%)"
                }}
                _focus={{
                    border: "none"
                }}
            >
                {text}
            </Button>
        );
    }

    return <div>{button}</div>;
};

export default PrimaryButton;
