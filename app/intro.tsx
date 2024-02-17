export default function Intro() {
    return (
        <div>
            <div className="into--custom-height flex items-center relative">
                <article className="w-full flex flex-col md:flex-row gap-5 items-center  justify-between">
                    <div className="w-lg max-w-lg flex flex-col gap-4 md:gap-7 items-center md:items-start">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center md:text-left w-full">
                            Merouane Boukandoura.
                        </h1>
                        <div className="h-2 w-11 bg-gradientPurple rounded"></div>

                        <div className="flex items-center justify-start gap-3">
                            <img src="/github-icon.svg" alt="" />
                            <img src="/email-icon.svg" alt="" />
                            <img src="/facebook-icon.svg" alt="" />
                            <img src="/instagram-icon.svg" alt="" />
                        </div>
                    </div>
                    <div className="max-w-full md:w-96 text-center md:text-start">
                        <h2 className="text-xl">Backend & Mobile developer</h2>
                        <p className="text-grayText text-sm mb-3">
                            Lorem ipsum dolor sit amet consectetur. Velit
                            egestas sed fermentum lobortis dui. Vitae sit d vel.
                            Massa id elementum porttitor suspendisse.
                        </p>

                        <p className="text-grayText text-sm">
                            Lorem ipsum dolor sit amet consectetur. Velit
                            egestas sed fermentum lobortis dui. Vitae sit velit
                            tristique purus. Consequat vitae cursus augue turpis
                            gravida fringilla at. Suspendisse d etiam enim
                            adipiscing vel. Massa id elementum porttitor
                            suspendisse.
                        </p>

                        <div className="flex gap-5 items-center my-5 justify-center md:justify-normal">
                            <a href="">
                                <button className="bg-gradientPurple text-white px-3.5 py-1 rounded-2xl">
                                    DOWNLOAD CV
                                </button>
                            </a>
                            <a
                                href=""
                                className="gradient-text-purple relative before:absolute before:left-0 before:-bottom-[0.3px] before:w-full before:h-px before:bg-gradientPurple h-fit"
                            >
                                START A PROJECT
                            </a>
                            {/* <div className="w-full h-0.5 bg-gradientPurple absolute top-5"></div> */}
                        </div>
                    </div>
                </article>
                <div className="hidden md:block intro--scroll-down text-grayText border-grayText slide-in-blurred-bottom">
                    scroll down
                </div>
            </div>
        </div>
    )
}
