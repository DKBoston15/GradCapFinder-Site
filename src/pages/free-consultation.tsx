import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { PopupWidget, openPopupWidget } from "react-calendly";

function FreeConsultationPage() {
    const openPage = () => {
        console.log("T");
        let options = {
            url: "https://calendly.com/gradcapfinder"
        };
        openPopupWidget(options);
    };

    return (
        <Flex flexDirection="column" justify="space-between" w="100%">
            <Text>Hello Consultation</Text>
            <Button onClick={openPage}>Open Calendly Page</Button>
            {/* <InlineWidget url="https://calendly.com/gradcapfinder" /> */}
            <PopupWidget
                color="#00a2ff"
                text="Free Consultation"
                textColor="#ffffff"
                url="https://calendly.com/gradcapfinder"
            />
        </Flex>
    );
}

export default FreeConsultationPage;
