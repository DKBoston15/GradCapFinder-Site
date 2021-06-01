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
            .catch((error) => alert(error))
    }

    // let templateParams = {
    //     name,
    //     email,
    //     description
    // }
    // emailjs
    //     .send(
    //         "service_egc5313",
    //         "template_zses0cj",
    //         templateParams,
    //         "user_MZDgArYLRizB7rNHlh6Bn"
    //     )
    //     .then(
    //         function (response) {
    //             console.log("SUCCESS!", response.status, response.text)
    //             formReset()
    //             toast({
    //                 title: "Form Submitted.",
    //                 description: "We will respond as soon as possible!",
    //                 status: "success",
    //                 duration: 4000,
    //                 isClosable: true
    //             })
    //         },
    //         function (error) {
    //             console.log("FAILED...", error)
    //         }
    //     )
    return (
        <Container
            justify="center"
            alignItems="center"
            direction="column"
            w="100%"
        >
            {/* @ts-ignore */}
            <form
                name="contact-us"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={sendEmail}
            >
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
