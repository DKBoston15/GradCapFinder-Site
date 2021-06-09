import React, { useMemo, ReactNode } from "react"
import { Button, ButtonProps } from "@chakra-ui/react"
import { openPopupWidget } from "react-calendly"

type TVariant = "primary" | "secondary"
interface IButtonProps extends ButtonProps {
    text: ReactNode
    variant?: TVariant
    width?: string
    calendly?: boolean
    meetingType?: string
}

const PrimaryButton = ({
    text,
    variant = "primary",
    width,
    calendly,
    meetingType
}: IButtonProps) => {
    const openCalendly = () => {
        let meetingUrl = ""
        if (meetingType === "generalMeeting") {
            meetingUrl = "https://calendly.com/gradcapfinder/general-meeting"
        }
        if (meetingType === "freeConsultation") {
            meetingUrl = "https://calendly.com/gradcapfinder/free-consultation"
        }
        let options = {
            url: meetingUrl
        }
        openPopupWidget(options)
    }
    const buttonVariantMapper: Record<TVariant, JSX.Element> = useMemo(
        () => ({
            primary: (
                <Button
                    bg="brand.orange"
                    color="white"
                    boxShadow="lg"
                    w={width}
                    p="7"
                    fontSize={{ base: "14px", md: "18px" }}
                    _hover={{
                        background: "hsl(32, 98%, 45%)"
                    }}
                    _focus={{
                        border: "none"
                    }}
                    onClick={calendly ? openCalendly : undefined}
                >
                    {text}
                </Button>
            ),
            secondary: (
                <Button
                    bg="brand.blue"
                    color="white"
                    boxShadow="lg"
                    w={width}
                    p="7"
                    fontSize={{ base: "14px", md: "18px" }}
                    _hover={{
                        background: "	hsl(192, 71%, 38%)"
                    }}
                    _focus={{
                        border: "none"
                    }}
                    onClick={calendly ? openCalendly : undefined}
                >
                    {text}
                </Button>
            )
        }),
        []
    )

    return buttonVariantMapper[variant]
}

export default PrimaryButton
