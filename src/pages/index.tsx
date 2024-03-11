import FormAnimation from "./contact"
import { Inter } from "next/font/google"
import Cont from "../components/cont"
import Navbar from "../components/navbar"
import Intro from "./home/intro"
import Experience from "./about"
import Inner from "@/components/Layout/Inner"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <Inner>
            <Cont>
                <Intro />
            </Cont>
        </Inner>
    )
}
