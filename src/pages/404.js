import * as React from "react"

import fourOFourImage from "../images/404.jpg"

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
