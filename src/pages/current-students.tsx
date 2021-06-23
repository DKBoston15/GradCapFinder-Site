import * as React from "react"
import { Link } from "gatsby"
import { Box, Flex, Text } from "@chakra-ui/react"
import { Helmet } from "react-helmet"
import FullStory from 'react-fullstory';

import Button from "../components/Button"
import Footer from "../modules/footer/Footer"
const CurrentStudents = () => {
    const openPaypal = () => {
        window.open(
            "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9C7JDZGF9DXUC",
            "_blank"
        )
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Current Students</title>
            </Helmet>
            <Flex direction="column" align="center" h="100vh">
                <Flex
                    alignItems="center"
                    justify="space-between"
                    width="90%"
                    mt={10}
                >
                    <Text
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="700"
                    >
                        <Link to="/">GradCapFinder</Link>
                    </Text>
                    <Flex alignItems="center">
                        <Link to="/">
                            <Text fontSize="lg" pr={5} fontWeight="600">
                                Home
                            </Text>
                        </Link>
                    </Flex>
                </Flex>
                <Text
                    align="center"
                    mt={{ base: 10, lg: 0 }}
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight="700"
                >
                    Current Students
                </Text>

                <Flex direction="column" justify="center" align="center" mt={5}>
                    <Text fontSize="lg" w="50vw" align="center">
                        While we are working on a new platform designed for you,
                        please use the options below to make payments and
                        schedule appointments.
                    </Text>
                    <Flex
                        w="20em"
                        h="15em"
                        justify="space-evenly"
                        direction="column"
                    >
                        <Button
                            calendly={true}
                            text="Schedule Reccurring Meeting"
                            meetingType="generalMeeting"
                        />
                        <Box onClick={() => openPaypal()}>
                            <Button text="Pay Via Paypal" width="100%" />
                        </Box>
                        {/* <Button text="Pay Via Venmo" /> */}
                        {/* <Button text="Pay with BitCoin" /> */}
                    </Flex>
                </Flex>
            </Flex>
            <Footer />
        </>
    )
}

export default CurrentStudents
