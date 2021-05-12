import React from "react";
import {
    Flex,
    Text,
    Container,
    Image,
    List,
    ListItem,
    Spacer,
    ListIcon
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

//Components
import CollegeBanner from "../../components/CollegeBanner";
import PrimaryButton from "../../components/PrimaryButton";

let images = [
    {
        link:
            "https://res.cloudinary.com/domqwdeiu/image/upload/v1620706692/gradcapfinder/mark3-removebg-preview_1_bllpfh.png",
        alt: "Massachusetts Institute of Technology"
    },
    {
        link:
            "https://res.cloudinary.com/domqwdeiu/image/upload/v1620706693/gradcapfinder/usc__1_-removebg-preview_1_bacgyr.png",
        alt: "University of Southern California"
    },
    {
        link:
            "https://res.cloudinary.com/domqwdeiu/image/upload/v1620706693/gradcapfinder/Texas-Tech-logo_1_po6ekf.png",
        alt: "Texas Tech University"
    },
    {
        link:
            "https://res.cloudinary.com/domqwdeiu/image/upload/v1620706693/gradcapfinder/oregon_1_ts0ywt.png",
        alt: "University of Oregon"
    }
];

const About = () => {
    return (
        <Flex direction="column" pt="5em" pb="2em" bg="brand.bg">
            <Flex mb={20} w="90%">
                <Flex
                    direction="column"
                    alignItems="center"
                    justify="center"
                    flex="1"
                >
                    <Image
                        src="https://res.cloudinary.com/domqwdeiu/image/upload/v1620712575/gradcapfinder/dane_portrait_kljmog.png"
                        alt="Dr. Dane Bozeman"
                        w="18em"
                        mb={10}
                    />
                    <PrimaryButton variant={false} text="Free Consultation" />
                    <List mt={10} decoration="none" spacing={2}>
                        <ListItem>
                            <ListIcon
                                as={InfoIcon}
                                w="1.5em"
                                h="1.5em"
                                color="brand.blue"
                            />
                            106 Completed Disertations
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={InfoIcon}
                                w="1.5em"
                                h="1.5em"
                                color="brand.blue"
                            />
                            2 Book Chapters
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={InfoIcon}
                                w="1.5em"
                                h="1.5em"
                                color="brand.blue"
                            />
                            2 Peer Reviewed Articles
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={InfoIcon}
                                w="1.5em"
                                h="1.5em"
                                color="brand.blue"
                            />
                            20+ Policy Papers
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={InfoIcon}
                                w="1.5em"
                                h="1.5em"
                                color="brand.blue"
                            />
                            20+ Policy Papers
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={InfoIcon}
                                w="1.5em"
                                h="1.5em"
                                color="brand.blue"
                            />
                            10+ Annual Government Reports
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={InfoIcon}
                                w="1.5em"
                                h="1.5em"
                                color="brand.blue"
                            />
                            4 Multi-Million Dollar Grants
                        </ListItem>
                    </List>
                </Flex>
                <Flex
                    direction="column"
                    justify="center"
                    alignItems="center"
                    flex="1"
                >
                    <Text
                        fontWeight="700"
                        fontSize="3xl"
                        mb="3"
                        textAlign="left"
                        w="100%"
                    >
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
    );
};

export default About;
