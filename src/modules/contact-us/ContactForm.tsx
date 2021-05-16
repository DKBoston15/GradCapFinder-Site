import { useState } from "react";
import {
    FormControl,
    FormLabel,
    Flex,
    Input,
    Textarea,
    Checkbox,
    CheckboxGroup,
    Text,
    Button,
    Container
} from "@chakra-ui/react";
import emailjs from "emailjs-com";

// Components
import CustomSelect from "./CustomSelect";

const ContactForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [description, setDescription] = useState();
    const [services, setServices] = useState([]);
    const onChange = (e) => {
        if (Array.isArray(e)) {
            setServices(e);
            return;
        }
        if (e.target.id == "name") {
            setName(e.target.value);
            return;
        }
        if (e.target.id == "email") {
            setEmail(e.target.value);
            return;
        }
        if (e.target.id == "description") {
            setDescription(e.target.value);
            return;
        }
    };

    const formReset = () => {
        setName("");
        setEmail("");
        setDescription("");
        setServices([]);
    };

    function sendEmail(e) {
        e.preventDefault();

        let templateParams = {
            name,
            email,
            description,
            services
        };

        emailjs
            .send(
                "service_egc5313",
                "template_zses0cj",
                templateParams,
                "user_MZDgArYLRizB7rNHlh6Bn"
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    formReset();
                },
                function (error) {
                    console.log("FAILED...", error);
                }
            );
    }
    return (
        <Container
            justify="center"
            alignItems="center"
            direction="column"
            w="100%"
        >
            {/* @ts-ignore */}
            <form name="contact-us" id="contact-form" onSubmit={sendEmail}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        id="name"
                        bg="white"
                        value={name}
                        onChange={onChange}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        bg="white"
                        type="email"
                        id="email"
                        value={email}
                        onChange={onChange}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                        bg="white"
                        id="description"
                        value={description}
                        onChange={onChange}
                    />
                </FormControl>
                <Text>Select the services in which we can help</Text>
                <Flex
                    direction={{ base: "column", sm: "row" }}
                    justify="center"
                >
                    <CheckboxGroup
                        id="services"
                        onChange={onChange}
                        value={services}
                    >
                        <Flex
                            direction="column"
                            m={{ base: "0em 1em", sm: "1em 1em" }}
                            mt=".5em"
                        >
                            <Checkbox
                                size="8xl"
                                value="Analysis"
                                mb=".5em"
                                icon={<CustomSelect text="Analysis" />}
                            />
                            <Checkbox
                                size="8xl"
                                value="Professionalism"
                                icon={<CustomSelect text="Professionalism" />}
                            />
                        </Flex>
                        <Flex
                            direction="column"
                            m={{ base: ".5em 1em", sm: "1em 1em" }}
                        >
                            <Checkbox
                                size="8xl"
                                value="Career"
                                mb=".5em"
                                icon={<CustomSelect text="Career" />}
                            />
                            <Checkbox
                                size="8xl"
                                value="Writing"
                                icon={<CustomSelect text="Writing" />}
                            />
                        </Flex>
                        <Flex
                            direction="column"
                            m={{ base: ".5em 1em", sm: "1em 1em" }}
                        >
                            <Checkbox
                                size="8xl"
                                value="Grants"
                                mb=".5em"
                                icon={<CustomSelect text="Grants" />}
                            />
                            <Checkbox
                                size="8xl"
                                value="Other"
                                icon={<CustomSelect text="Other" />}
                            />
                        </Flex>
                    </CheckboxGroup>
                </Flex>
                <Flex justify="center" mt="2em">
                    <Button
                        width="100%"
                        type="submit"
                        color="white"
                        bg="brand.orange"
                    >
                        Submit
                    </Button>
                </Flex>
            </form>
        </Container>
    );
};

export default ContactForm;
