import * as React from "react"
import FullStory from 'react-fullstory';
import fourOFourImage from "../images/404.jpg"

const ORG_ID = '13J61T';
const NotFoundPage = () => {
    return (
        <main>
            <FullStory org={ORG_ID} />
            <img
                src={fourOFourImage}
                alt="404"
                style={{ height: "100vh", width: "100vw" }}
            />
        </main>
    )
}

export default NotFoundPage
