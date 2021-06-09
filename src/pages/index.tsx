import React from "react"
import { Flex } from "@chakra-ui/react"
import { Helmet } from "react-helmet"
import { hotjar } from "react-hotjar"

// Components
import Hero from "../modules/hero/Hero"
import Info from "../modules/info/Info"
import Book from "../modules/book/Book"
import About from "../modules/about/About"
import Videos from "../modules/videos/Videos"
import ContactUs from "../modules/contact-us/ContactUs"
import Footer from "../modules/footer/Footer"

hotjar.initialize(2444366, 6)

function IndexPage() {
    return (
        <Flex flexDirection="column" justify="space-between">
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
    )
}

export default IndexPage
