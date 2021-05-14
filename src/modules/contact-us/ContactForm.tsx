import React from "react";
import {
    FormControl,
    FormLabel,
    Flex,
    Input,
    Textarea,
    Checkbox,
    CheckboxGroup,
    Text
} from "@chakra-ui/react";

// Components
import CustomSelect from "./CustomSelect";
import Button from "../../components/Button";

const ContactForm = () => {
    return (
        <Flex w="40em" justify="center" alignItems="center">
            <form>
                <FormControl id="name">
                    <FormLabel>Name</FormLabel>
                    <Input bg="white" type="email" />
                </FormControl>
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input bg="white" type="email" />
                </FormControl>
                <FormControl id="description">
                    <FormLabel>Description</FormLabel>
                    <Textarea bg="white" type="email" />
                </FormControl>
                <Text>Services</Text>
                <FormControl id="services">
                    <Flex w="100%">
                        <CheckboxGroup>
                            <Flex direction="column" m="1em">
                                <Checkbox
                                    size="8xl"
                                    value="Consulting"
                                    mb=".5em"
                                    icon={<CustomSelect text="Consulting" />}
                                />
                                <Checkbox
                                    size="8xl"
                                    value="Writing"
                                    icon={<CustomSelect text="Writing" />}
                                />
                            </Flex>
                            <Flex direction="column" m="1em">
                                <Checkbox
                                    size="8xl"
                                    value="Analysis"
                                    mb=".5em"
                                    icon={<CustomSelect text="Analysis" />}
                                />
                                <Checkbox
                                    size="8xl"
                                    value="Grants"
                                    icon={<CustomSelect text="Grants" />}
                                />
                            </Flex>
                            <Flex direction="column" m="1em">
                                <Checkbox
                                    size="8xl"
                                    mb=".5em"
                                    value="Graduate School"
                                    icon={
                                        <CustomSelect text="Graduate School" />
                                    }
                                />
                                <Checkbox
                                    size="8xl"
                                    value="Other"
                                    icon={<CustomSelect text="Other" />}
                                />
                            </Flex>
                        </CheckboxGroup>
                    </Flex>
                </FormControl>
                <Flex w="35em" justify="center" mt="2em">
                    <Button text="Submit" width="100%" />
                </Flex>
            </form>
        </Flex>
    );
};

export default ContactForm;
