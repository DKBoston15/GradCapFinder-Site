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
            mt="10em"
            mb="10em"
            p="5em 0em 5em 5em"
            w="65%"
            h="25em"
            borderRadius="25"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundImage="url('https://res.cloudinary.com/domqwdeiu/image/upload/v1620603698/gradcapfinder/book_card_bg_emoay9.png')"
        >
            <Flex>
                <Container>
                    <Text
                        textAlign="center"
                        fontWeight="700"
                        fontSize="lg"
                        mt="-5"
                    >
                        Using experiences selected from working with over 100
                        successful PhDs, our book provides an overview of the
                        graduate school experience for learners.
                    </Text>
                    <Box w="100%" h="1" bg="brand.blue" mt="8" mb="3" />
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
                <Spacer />
                <Container w="35%" mr="2.5em">
                    <Image
                        objectFit="fill"
                        src="https://res.cloudinary.com/domqwdeiu/image/upload/v1620601932/gradcapfinder/Book_cover_d3cbxw.png"
                        alt="GradCapFinder Book Cover"
                    />
                </Container>
            </Flex>
        </Box>
    );
};

export default Book;
