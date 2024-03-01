import Intro from "./intro"
import Navbar from "./navbar"
import Testimonials from "./testimonials"
import FormAnimation from "./form"
import Experience from "./experience"

export default function Page() {
    return (
        <main className="mx-2 sm:mx-3 md:mx-12 xl:mx-20 px-2 ">
            {/* intro section:: */}
            <section className="">
                <Navbar />
                <Intro />
                <Experience />
                <Testimonials />
                <FormAnimation />
                {/* <Testimonials /> */}
            </section>
        </main>
    )
}
