import FormAnimation from "./contact"
import { Inter } from "next/font/google"
import Cont from "./components/cont"
import Navbar from "./components/navbar"
import Intro from "./home/intro"
import Experience from "./about"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <Cont>
                {/* <Navbar /> */}
                <Intro />
            </Cont>
            {/* <Experience /> */}
            {/* <Testimonials /> */}
            {/* <FormAnimation /> */}
        </>
    )
}
