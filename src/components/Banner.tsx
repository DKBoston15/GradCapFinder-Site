import { Flex, Box, Text } from "@chakra-ui/react";
import Button from "../components/Button";
export default function Example() {
  return (
    <Flex width="100%" bg="brand.blue" justify="center">
      <Flex
        py={5}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        color="white"
        alignItems="center"
        width="90%"
      >
        <Flex align="center">
          <Box display={{ base: "none", md: "flex" }}>
            <svg
              width="40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
          </Box>
          <Flex
            direction={{ base: "column" }}
            ml={{ base: 0, md: 10 }}
            fontSize={{ base: "md", xl: "xl" }}
          >
            <Text align={{ base: "center", md: "left" }}>
              Come work and ask questions live with Dr. Bozeman!
              <Text fontWeight="700">M-S (8AM-10AM CST)</Text>
            </Text>
          </Flex>
        </Flex>
        <Box mt={{ base: 5, md: 0 }}>
          <Button text="Check it out!" variant="studyHall" />
        </Box>
      </Flex>
    </Flex>
  );
}
