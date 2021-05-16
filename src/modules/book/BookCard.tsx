import React from "react";
import {
    Flex,
    Text,
    Box,
    Container,
    Image,
    Spacer,
    UnorderedList,
    ListItem
} from "@chakra-ui/react";

import bookCover from "./images/book-cover.png";

const Book = () => {
    return (
        <Box
            mt="5em"
            mb="5em"
            p="2em"
            w={{ base: "90%", lg: "65%" }}
            h="100%"
            borderRadius="25"
            bg="brand.bg"
        >
            <Flex direction="column" alignItems="center">
                <Text textAlign="center" fontWeight="700" fontSize="lg">
                    Using experiences selected from working with over 100
                    successful PhDs, our book provides an overview of the
                    graduate school experience for learners.
                </Text>
                <Box w="50%" h="1" bg="brand.blue" mt="8" mb="3" />
                <Container w={{ base: "90%", md: "80%", lg: "50%" }}>
                    <a href="https://www.amazon.com/Graduate-School-Marathon-Dane-Bozeman-ebook/dp/B08FZ1GBJG/ref=sr_1_1?dchild=1&keywords=graduate+school+is+a+marathon&qid=1621119256&sr=8-1">
                        <Image
                            align="center"
                            objectFit="fill"
                            src={bookCover}
                            alt="GradCapFinder Book Cover"
                        />
                    </a>
                </Container>
                <Spacer />
                <Container>
                    <Text
                        color="brand.orange"
                        fontWeight="700"
                        mb="3"
                        fontSize="lg"
                    >
                        Learn To:
                    </Text>
                    <UnorderedList spacing="2">
                        <ListItem>
                            Define the uncertainty in the graduate school
                            experience
                        </ListItem>
                        <ListItem>
                            Interpret analysis, professionalism, and writing as
                            a graduate learner
                        </ListItem>
                        <ListItem>
                            Integrate laughing, crying, and learning into the
                            graduate experience
                        </ListItem>
                        <ListItem>
                            Construct an exit strategy from their experience as
                            a learner.
                        </ListItem>
                    </UnorderedList>
                </Container>
            </Flex>
        </Box>
    );
};

export default Book;
