import React from "react";
import { Flex } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
// Components
import Hero from "../modules/Hero/Hero";
import Info from "../modules/Info/Info";
import Book from "../modules/Book/Book";
import About from "../modules/About/About";
import Videos from "../modules/Videos/Videos";
import ContactUs from "../modules/ContactUs/ContactUs";
import Footer from "../modules/Footer/Footer";

function IndexPage() {
    return (
        <Flex flexDirection="column" justify="space-between" w="100%">
            <Helmet>
                <meta charSet="utf-8" />
                <title>GradCapFinder</title>
                <link rel="canonical" href="http://gradcapfinder.com" />
            </Helmet>
            <Hero />
            <Info />
            <Book />
            <About />
            <Videos />
            <ContactUs />
            <Footer />
        </Flex>
    );
}

export default IndexPage;
