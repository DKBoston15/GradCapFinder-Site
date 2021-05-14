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
    },
    components: {
        Checkbox: {
            baseStyle: {
                control: {
                    bg: "#F5F6F9",
                    color: "black",
                    borderRadius: "15",
                    borderColor: "#E3E8EF",
                    _checked: {
                        bg: "#FA8503",
                        outline: "none",
                        borderColor: "#FA8503",
                        _hover: {
                            bg: "#FA8503",
                            outline: "none",
                            color: "white",
                            borderColor: "#FA8503"
                        }
                    },
                    _focus: {
                        outline: "none",
                        borderColor: "#E3E8EF",
                        boxShadow: "none"
                    },
                    _hover: {
                        bg: "#FA8503",
                        outline: "none",
                        color: "white",
                        borderColor: "#FA8503",
                        _checked: {
                            bg: "#FA8503",
                            outline: "none",
                            color: "white",
                            borderColor: "#FA8503"
                        }
                    }
                }
            }
        }
    }
};

export default extendTheme(theme);
