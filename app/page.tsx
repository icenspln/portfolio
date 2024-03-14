import Navbar from "./components/navbar"
import FormAnimation from "./components/form"
import Experience from "./components/experience"
import Cont from "./components/cont"
import Intro from "./components/home"

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
