import React from "react";
import { Flex, Text } from "@chakra-ui/react";

// Components
import ContactForm from "./ContactForm";

const ContactUs = () => {
    return (
        <Flex
            direction="column"
            justify="center"
            alignItems="center"
            bg="brand.bg"
        >
            <Text fontWeight="700" fontSize="4xl">
                Contact Us
            </Text>
            <ContactForm />
        </Flex>
    );
};

export default ContactUs;
