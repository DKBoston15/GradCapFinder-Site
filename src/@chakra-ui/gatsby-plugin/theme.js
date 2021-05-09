// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from "@chakra-ui/react";
const theme = {
    fonts: {
        heading: "Poppins",
        body: "Poppins"
    },
    colors: {
        brand: {
            lightBlue: "#8DCAE6",
            blue: "#209EBC",
            darkBlue: "#033047",
            yellow: "#FFB704",
            orange: "#FA8503",
            bg: "#F5F6F9",
            gray: "#8C8C8E"
        }
    }
};

export default extendTheme(theme);
