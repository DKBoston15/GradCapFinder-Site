import { useState } from "react"
import {
    FormControl,
    FormLabel,
    Flex,
    Input,
    Textarea,
    Button,
    Container,
    useToast
} from "@chakra-ui/react"
import emailjs from "emailjs-com"

const ContactForm = () => {
    const toast = useToast()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [description, setDescription] = useState()
    const onChange = (e) => {
        if (e.target.id == "name") {
            setName(e.target.value)
            return
        }
        if (e.target.id == "email") {
            setEmail(e.target.value)
            return
        }
        if (e.target.id == "description") {
            setDescription(e.target.value)
            return
        }
    }

    const formReset = () => {
        setName("")
        setEmail("")
        setDescription("")
    }

    function sendEmail(e) {
        const data = {
            name,
            email,
            description
        }
        e.preventDefault()
        function encode(data) {
            return Object.keys(data)
                .map(
                    (key) =>
                        encodeURIComponent(key) +
                        "=" +
                        encodeURIComponent(data[key])
                )
                .join("&")
        }

        e.preventDefault()
        console.log(
            encode({
                "form-name": "contact-us",
                ...data
            })
        )
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact-us",
                ...data
            })
        })
            .then(() =>
                toast({
                    title: "Form Submitted.",
                    description: "We will respond as soon as possible!",
                    status: "success",
                    duration: 4000,
                    isClosable: true
                })
            )
            .catch((error) => console.log(error))
    }
    return (
        <Container
            justify="center"
            alignItems="center"
            direction="column"
            w="100%"
        >
            <form
                name="contact-us"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={sendEmail}
            >
                <input type="hidden" name="form-name" value="contact" />
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        name="name"
                        id="name"
                        bg="white"
                        value={name}
                        onChange={onChange}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        name="email"
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
                        name="description"
                        bg="white"
                        id="description"
                        value={description}
                        onChange={onChange}
                    />
                </FormControl>
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
    )
}

export default ContactForm
