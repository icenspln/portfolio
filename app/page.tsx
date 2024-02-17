import Navbar from "./navbar"
// import Testimonials from "./testimonials"

export default function Page() {
    return (
        <main className="mx-3 px-2 ">
            {/* intro section:: */}
            <section className="">
                <Navbar />
                <div className="into--custom-height flex items-center">
                    <article className="w-full flex gap-5 items-center  justify-between">
                        <div className="w-lg max-w-lg">
                            <div className="flex flex-col gap-7">
                                <h1 className="text-6xl">
                                    Merouane Boukandoura.
                                </h1>
                                <div className="h-2 w-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>

                                <div className="flex items-center justify-start gap-3">
                                    <img src="/github-icon.svg" alt="" />
                                    <img src="/email-icon.svg" alt="" />
                                    <img src="/facebook-icon.svg" alt="" />
                                    <img src="/instagram-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="w-96">
                            <h2 className="text-xl">
                                Backend & Mobile developer
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Velit
                                egestas sed fermentum lobortis dui. Vitae sit
                                velit tristique purus. Consequat vitae cursus
                                augue turpis gravida fringilla at. Suspendisse
                                eleifend est massa sit etiam enim adipiscing
                                vel. Massa id elementum porttitor suspendisse.
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Velit
                                egestas sed fermentum lobortis dui. Vitae sit
                                velit tristique purus. Consequat vitae cursus
                                augue turpis gravida fringilla at. Suspendisse
                                eleifend est massa sit etiam enim adipiscing
                                vel. Massa id elementum porttitor
                                suspendisse.Vitae sit velit tristique purus.
                                Consequat vitae cursus augue turpis gravida
                                fringilla at. Suspendisse eleifend est massa sit
                                etiam enim adipiscing vel. Massa id elementum
                                porttitor suspendisse.
                            </p>
                        </div>
                    </article>
                </div>
                {/* <Testimonials /> */}
            </section>
        </main>
    )
}
