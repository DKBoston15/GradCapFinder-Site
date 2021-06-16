import React from "react"
import { Flex, Text } from "@chakra-ui/react"

// Components
import Feature from "./Feature"

const Why = () => {
    return (
        <Flex direction="column" w={{ base: "100%", lg: "40%" }}>
            <Text
                fontSize={{ base: "3xl", sm: "4xl", md: "3xl", lg: "4xl" }}
                fontWeight="700"
                mb="7"
            >
                Why Work With GradCapFinder?
            </Text>
            <Feature
                title="Community"
                description="We have seen that the most successful PhD students create a strong community to leverage their support and guidance in the PhD process. At GCF, we help students identify the existing members of their community and find new mentors. The world map displays where our students are located and the community of PhDs we have built at GCF."
            />
            <Feature
                title="Assessment"
                description="We recognize that successful PhD candidates continuously assess themselves and their work. We aim to provide students constructive opportunities to evaluate themselves. This process pushes students to strive for constant improvement and learning. GCF has supported students in their growth journey all over the world."
            />
            <Feature
                title="Knowledge"
                description="GCF supports the process of producing knowledge for the world to consume. Through our work with our PhD community we help students directly translate their efforts into knowledge. Join our global community of knowledge creators so we can support your effort to make a difference."
            />
        </Flex>
    )
}

export default Why
