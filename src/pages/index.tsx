import React from "react"
import { Flex } from "@chakra-ui/react"
import { Helmet } from "react-helmet"

// Components
import Hero from "../modules/hero/Hero"
import Info from "../modules/info/Info"
import Book from "../modules/book/Book"
import About from "../modules/about/About"
import Videos from "../modules/videos/Videos"
import ContactUs from "../modules/contact-us/ContactUs"
import Footer from "../modules/footer/Footer"

function IndexPage() {
    return (
        <>
            <Flex
                flexDirection="column"
                justify="space-between"
                pb={160}
                height="100%"
            >
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
            </Flex>
            <Footer />
        </>
    )
}

export default IndexPage
