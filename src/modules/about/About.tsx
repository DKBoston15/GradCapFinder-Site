import React from "react"
import {
    Flex,
    Text,
    Container,
    Image,
    List,
    ListItem,
    Spacer,
    ListIcon
} from "@chakra-ui/react"
import { InfoIcon } from "@chakra-ui/icons"

// Images
import mit from "../../images/about_images/mit.png"
import usc from "../../images/about_images/usc.png"
import texasTech from "../../images/about_images/texas-tech.png"
import oregon from "../../images/about_images/oregon.png"
import dane from "../../images/about_images/dane-portrait.png"

//Components
import CollegeBanner from "../../components/CollegeBanner"
import Button from "../../components/Button"

let images = [
    {
        link: mit,
        alt: "Massachusetts Institute of Technology"
    },
    {
        link: usc,
        alt: "University of Southern California"
    },
    {
        link: texasTech,
        alt: "Texas Tech University"
    },
    {
        link: oregon,
        alt: "University of Oregon"
    }
]

const About = () => {
    return (
        <Flex direction="column" pt="5em" pb="2em" bg="brand.bg">
            <Flex
                mb={20}
                w={{ base: "100%", lg: "90%" }}
                pl={{ base: "4", lg: "0" }}
                pr={{ base: "4", lg: "0" }}
                direction={{ base: "column", sm: "column", lg: "row" }}
            >
                <Flex
                    direction="column"
                    alignItems="center"
                    justify="center"
                    flex="1"
                >
                    <Image src={dane} alt="Dr. Dane Bozeman" w="18em" mb={10} />
                    <Button text="Free Consultation" calendly={true} />
                    <List mt={10} decoration="none" spacing={2}>
                        <ListItem fontWeight="900">
                            <ListIcon
                                as={InfoIcon}
                                w="1.5em"
                                h="1.5em"
                                color="brand.blue"
                            />
                            106 completed disertations
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={InfoIcon}
                                w="1.5em"
                                h="1.5em"
                                color="brand.blue"
                            />
                            Multiple peer reviewed articles
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={InfoIcon}
                                w="1.5em"
                                h="1.5em"
                                color="brand.blue"
                            />
                            Dozens of policy papers
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={InfoIcon}
                                w="1.5em"
                                h="1.5em"
                                color="brand.blue"
                            />
                            Numerous government reports
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={InfoIcon}
                                w="1.5em"
                                h="1.5em"
                                color="brand.blue"
                            />
                            4 multi-million dollar NSF grants
                        </ListItem>
                    </List>
                </Flex>
                <Flex
                    direction="column"
                    justify="center"
                    alignItems="center"
                    textAlign={{ base: "center", lg: "left" }}
                    pt={{ base: "10", sm: "10", lg: "0" }}
                    flex="1"
                >
                    <Text fontWeight="700" fontSize="3xl" mb="3" w="100%">
                        Dr. Dane Bozeman
                    </Text>
                    <Text fontSize="md">
                        Dr. Dane Bozeman is the founder of GradCapFinder. He
                        graduated with his doctorate in Curriculum and
                        Instruction from Texas A&M University in 2010. He
                        believes the world becomes a better place when people
                        care enough to achieve their doctorate. His professional
                        work experience includes 7 years as a Mathematics and
                        Science teacher in public and private secondary schools,
                        8 years as a university instructor for both
                        undergraduate and graduate level courses in Human
                        Cognition and Statistics, and over 10 years as a
                        researcher on Life, Physical, and Social science
                        projects.
                        <br />
                        <br /> Dane believes completed dissertations represent
                        both individual and community achievements. With a
                        background in all three sciences, he works with graduate
                        students to tailor individual learning experiences. In
                        doing so, Dane emphasizes four themes – the learner,
                        knowledge, assessment, and community. By emphasizing
                        these four themes, Dane ensures the students he works
                        with make the most of their graduate school experience.
                        <br />
                        <br /> Dane, through GradCapFinder, has personally
                        worked with over 100 graduate students - from the US,
                        Asia, Europe, and the Middle East - in the past decade.
                        These students represent diverse academic fields;
                        including, Criminology, Education, Engineering, English
                        Literature, Mathematics, Physics, and Psychology. Dane
                        has worked with these students to complete dissertations
                        and take leadership positions in the academy, industry,
                        and public policy arenas.
                    </Text>
                </Flex>
            </Flex>
            <CollegeBanner images={images} />
        </Flex>
    )
}

export default About
