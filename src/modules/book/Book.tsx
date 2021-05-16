import React from "react";
import { Flex } from "@chakra-ui/react";

// Components
import BookCard from "./BookCard";

// Images
import bookCover from "./images/book-cover.png";

const Book = () => {
    return (
        <Flex justify="center" backgroundImage="url(bookCover)">
            <BookCard />
        </Flex>
    );
};

export default Book;
