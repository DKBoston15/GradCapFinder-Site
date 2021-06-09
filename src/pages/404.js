import * as React from "react"
import { hotjar } from "react-hotjar"

import fourOFourImage from "../images/404.jpg"

hotjar.initialize(2444366, 6)
// markup
const NotFoundPage = () => {
    return (
        <main>
            <img
                src={fourOFourImage}
                alt="404"
                style={{ height: "100vh", width: "100vw" }}
            />
        </main>
    )
}

export default NotFoundPage
