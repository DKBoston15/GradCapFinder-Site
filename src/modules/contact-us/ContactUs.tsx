import React from "react";
import { Flex, Text } from "@chakra-ui/react";

// Components
import ContactForm from "./ContactForm";

const ContactUs = () => {
    return (
        <Flex
            id="contact"
            direction="column"
            justify="center"
            alignItems="center"
            bg="brand.bg"
            pt="1em"
            pb="2em"
            w="100%"
        >
            <Text fontWeight="700" fontSize="4xl">
                Contact Us
            </Text>
            <ContactForm />
        </Flex>
    );
};

export default ContactUs;
