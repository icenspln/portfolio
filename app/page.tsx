import Intro from "./intro"
import Navbar from "./navbar"
import Testimonials from "./testimonials"
import FormAnimation from "./form"
import Experience from "./experience"

import Cont from "./cont"
export default function Page() {
    return (
        <>
            <Cont>
                <Navbar />
                <Intro />
            </Cont>
            <Experience />
            {/* <Testimonials /> */}
            <FormAnimation />
        </>
    )
}
