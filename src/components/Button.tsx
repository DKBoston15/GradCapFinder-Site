import React, { useMemo, ReactNode } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

type TVariant = "primary" | "secondary" | "studyHall" | "contact";
interface IButtonProps extends ButtonProps {
  text: ReactNode;
  variant?: TVariant;
  width?: string;
  meetingType?: string;
}

const PrimaryButton = ({
  text,
  variant = "primary",
  width,
  meetingType,
}: IButtonProps) => {
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
            background: "hsl(32, 98%, 45%)",
          }}
          _focus={{
            border: "none",
          }}
          onClick={(event) =>
            (window.location.href = "https://gradcapfinder.youcanbook.me/")
          }
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
            background: "	hsl(192, 71%, 38%)",
          }}
          _focus={{
            border: "none",
          }}
          onClick={(event) =>
            (window.location.href = "https://gradcapfinder.youcanbook.me/")
          }
        >
          {text}
        </Button>
      ),
      studyHall: (
        <Button
          bg="brand.orange"
          color="white"
          boxShadow="lg"
          w={width}
          p="7"
          fontSize={{ base: "14px", md: "18px" }}
          _hover={{
            background: "hsl(32, 98%, 45%)",
          }}
          _focus={{
            border: "none",
          }}
          onClick={(event) =>
            (window.location.href =
              "https://www.youtube.com/channel/UCp23Cx25jt-AM4EfyDNHCgQ/live")
          }
        >
          {text}
        </Button>
      ),
      contact: (
        <Button
          bg="brand.orange"
          color="white"
          boxShadow="lg"
          w={width}
          p="7"
          fontSize={{ base: "14px", md: "18px" }}
          _hover={{
            background: "hsl(32, 98%, 45%)",
          }}
          _focus={{
            border: "none",
          }}
        >
          {text}
        </Button>
      ),
    }),
    []
  );

  return buttonVariantMapper[variant];
};

export default PrimaryButton;
