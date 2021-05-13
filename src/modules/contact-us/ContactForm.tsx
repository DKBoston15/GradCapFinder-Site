import React from "react";
import {
    FormControl,
    FormLabel,
    Flex,
    Input,
    Textarea,
    Checkbox,
    CheckboxGroup
} from "@chakra-ui/react";

// Components
import CustomSelect from "./CustomSelect";
import Button from "../../components/Button";

const ContactForm = () => {
    return (
        <Flex w="100%" justify="center" alignItems="center">
            <form>
                <FormControl id="name">
                    <FormLabel>Name</FormLabel>
                    <Input type="email" />
                </FormControl>
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                </FormControl>
                <FormControl id="description">
                    <FormLabel>Description</FormLabel>
                    <Textarea type="email" />
                </FormControl>
                <FormControl id="services">
                    <Flex w="100em" justify="space-evenly">
                        <CheckboxGroup>
                            <Checkbox
                                size="8xl"
                                value="Consulting"
                                icon={<CustomSelect text="Consulting" />}
                            />
                            <Checkbox
                                size="8xl"
                                value="Writing"
                                icon={<CustomSelect text="Writing" />}
                            />
                            <Checkbox
                                size="8xl"
                                value="Analysis"
                                icon={<CustomSelect text="Analysis" />}
                            />
                            <Checkbox
                                size="8xl"
                                value="Grants"
                                icon={<CustomSelect text="Grants" />}
                            />
                            <Checkbox
                                size="8xl"
                                value="Graduate School"
                                icon={<CustomSelect text="Graduate School" />}
                            />
                            <Checkbox
                                size="8xl"
                                value="Other"
                                icon={<CustomSelect text="Other" />}
                            />
                        </CheckboxGroup>
                    </Flex>
                </FormControl>
                <Button text="Submit" />
            </form>
        </Flex>
    );
};

export default ContactForm;
