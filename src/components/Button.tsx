import React, { useMemo, ReactNode } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

type TVariant = "primary" | "secondary";
interface IButtonProps extends ButtonProps {
    text: ReactNode;
    variant?: TVariant;
}

const PrimaryButton = ({ text, variant = "primary" }: IButtonProps) => {
    const buttonVariantMapper: Record<TVariant, JSX.Element> = useMemo(
        () => ({
            primary: (
                <Button
                    bg="brand.orange"
                    color="white"
                    boxShadow="lg"
                    p="7"
                    fontSize={{ base: "14px", md: "18px" }}
                    _hover={{
                        background: "hsl(32, 98%, 45%)"
                    }}
                    _focus={{
                        border: "none"
                    }}
                >
                    {text}
                </Button>
            ),
            secondary: (
                <Button
                    bg="brand.blue"
                    color="white"
                    boxShadow="lg"
                    p="7"
                    fontSize={{ base: "14px", md: "18px" }}
                    _hover={{
                        background: "	hsl(192, 71%, 38%)"
                    }}
                    _focus={{
                        border: "none"
                    }}
                >
                    {text}
                </Button>
            )
        }),
        []
    );

    return buttonVariantMapper[variant];
};

export default PrimaryButton;
