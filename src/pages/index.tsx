import React from "react";
import { Flex } from "@chakra-ui/react";
// Components
import Hero from "../modules/Hero/Hero";
import Info from "../modules/Info/Info";
import Book from "../modules/Book/Book";
import System from "../modules/System/System";
import Videos from "../modules/Videos/Videos";
import ContactUs from "../modules/ContactUs/ContactUs";
import Footer from "../modules/Footer/Footer";

function IndexPage() {
    return (
        <Flex flexDirection="column" justify="space-between" w="100%">
            <Hero />
            <Info />
            <Book />
            <System />
            <Videos />
            <ContactUs />
            <Footer />
        </Flex>
    );
}

export default IndexPage;
