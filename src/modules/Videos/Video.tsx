import React from "react";
import { Box } from "@chakra-ui/react";

const Video = ({ link }) => {
    return (
        <Box
            borderRadius="25"
            overflow="hidden"
            w={{ base: "80%", md: "60%", lg: "60%", xl: "40%" }}
            height="25em"
            mt="5"
            mb="5"
        >
            <iframe
                width="100%"
                height="100%"
                src={link}
                title="Testimonial"
                frameborder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </Box>
    );
};

export default Video;
