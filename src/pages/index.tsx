import FormAnimation from "../components/contact/contact"
import { Inter } from "next/font/google"
import Cont from "../components/cont"
import Navbar from "../components/navbar"
import Intro from "../components/home/intro"
import Experience from "../components/about/about"
import Inner from "@/components/Layout/Inner"
import About from "../components/about/about"
import Contact from "../components/contact/contact"
import { Work } from "@/components/work/work"
import { Slider } from "@/components/slider/slider"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <Inner>
            <Cont>
                <Navbar />
                <Intro />
            </Cont>
            <About />
            <Slider />
            <Work />
            <Contact />
        </Inner>
    )
}
