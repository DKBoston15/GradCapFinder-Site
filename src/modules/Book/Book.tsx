import React from "react";
import { Flex } from "@chakra-ui/react";

// Components
import BookCard from "./BookCard";

const Book = () => {
    return (
        <Flex
            justify="center"
            backgroundImage="url('https://res.cloudinary.com/domqwdeiu/image/upload/v1620601933/gradcapfinder/book_bg_al5l1m.png')"
        >
            <BookCard />
        </Flex>
    );
};

export default Book;
