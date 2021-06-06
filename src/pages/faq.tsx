import * as React from "react"
import { Link } from "gatsby"
import { openPopupWidget } from "react-calendly"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Text
} from "@chakra-ui/react"

import Button from "../components/Button"

const FAQ = () => {
    const openCalendly = () => {
        let options = {
            url: "https://calendly.com/gradcapfinder"
        }
        openPopupWidget(options)
    }

    return (
        <Flex justify="center" direction="column" align="center">
            <Flex
                alignItems="center"
                justify="space-between"
                width="90%"
                mt={10}
            >
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700">
                    <Link to="/">GradCapFinder</Link>
                </Text>
                <Flex alignItems="center">
                    <Link to="/">
                        <Text fontSize="lg" pr={5} fontWeight="600">
                            Home
                        </Text>
                    </Link>
                    <Box display={{ base: "none", sm: "flex" }}>
                        <Button text="Free Consultation" calendly={true} />
                    </Box>
                </Flex>
            </Flex>
            <Flex
                w={{ base: "85%", lg: "65%" }}
                justify="center"
                direction="column"
                mt="5em"
                bg="#F5F6F9"
                p={10}
                borderRadius={10}
            >
                <Text fontSize="3xl" align="center" fontWeight="700">
                    Frequently Asked Questions
                </Text>
                <Accordion defaultIndex={[0]} allowMultiple mt="5em">
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                <Text fontWeight="700">
                                    How many PhD students become ABD?
                                </Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Flex
                                justify="space-between"
                                align="center"
                                w="95%"
                                direction={{ base: "column", md: "row" }}
                                h={{ base: "7em", md: "5em" }}
                            >
                                Almost one in six PhD students become ABD.
                                <a
                                    target="_blank"
                                    href="https://slate.com/human-interest/2014/08/abds-all-but-dissertation-ph-d-
candidates-who-cant-quite-finish.html"
                                >
                                    <Button
                                        variant="secondary"
                                        text="Learn More"
                                    />
                                </a>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                <Text fontWeight="700">
                                    How many PhD students fail to finish their
                                    PhD?
                                </Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Flex
                                justify="space-between"
                                align="center"
                                w="95%"
                                direction={{ base: "column", md: "row" }}
                                h={{ base: "7em", md: "5em" }}
                            >
                                Fewer than one in three PhD students finish the
                                PhD
                                <a
                                    target="_blank"
                                    href="https://www.aaas.org/phd-completion-project"
                                >
                                    <Button
                                        variant="secondary"
                                        text="Learn More"
                                    />
                                </a>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                <Text fontWeight="700">
                                    What is a PhD coach?
                                </Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Flex
                                justify="space-between"
                                align="center"
                                w="95%"
                                direction={{ base: "column", md: "row" }}
                                h={{ base: "7em", md: "5em" }}
                            >
                                <Text mr={25}>
                                    Just what you think a coach would be. We get
                                    to know you, push you when you want to quit,
                                    and offer support when you trip.
                                </Text>
                                <a
                                    target="_blank"
                                    href="https://phdtogo.wordpress.com/2012/02/15/have-you-ever-considered-a-thesis-"
                                >
                                    <Button
                                        variant="secondary"
                                        text="Learn More"
                                    />
                                </a>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                <Text fontWeight="700">
                                    How many students use a PhD coach?
                                </Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            No one really knows, but we do know that more and
                            more students reach out every year.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                <Text fontWeight="700">
                                    How can a PhD coach save me money?
                                </Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            A. We can reduce your time as a student by helping
                            you finish your degree, find a job, and begin your
                            research agenda <br />
                            <br />
                            B. We can show you how to find and write grants
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                <Text fontWeight="700">
                                    Should I work with a PhD coach?
                                </Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            We cannot answer that question for you, but 106
                            individuals have worked with GradCapFinder in the
                            last decade. Many of these PhDs now refer us to
                            their colleagues, family, and their own students.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
        </Flex>
    )
}

export default FAQ
