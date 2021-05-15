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
                    <Image
                        align="center"
                        objectFit="fill"
                        src="https://res.cloudinary.com/domqwdeiu/image/upload/v1620601932/gradcapfinder/Book_cover_d3cbxw.png"
                        alt="GradCapFinder Book Cover"
                    />
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
