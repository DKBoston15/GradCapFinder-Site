import React from "react";
import { Flex } from "@chakra-ui/react";
import Banner from "../../components/Banner";

// Components
import Header from "./Header";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <>
      <Banner />
      <Flex width="100%" mt={10} direction="column" alignItems="center">
        <Header />
        <HeroContent />
      </Flex>
    </>
  );
};

export default Hero;
