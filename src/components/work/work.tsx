import Image from "next/image"

export function Work() {
    return (
        <div className="pt-64 py-20 text-white">
            <header>
                <h1 className="text-center text-4xl mb-2">Portfolio</h1>
                <div className="flex justify-center gap-4 items-center ">
                    <p>/AI</p>
                    <p className="text-grayText">Backend Dev</p>
                    <p className="text-grayText">Mobile Dev</p>
                </div>
            </header>
            <main className="flex items-center justify-center my-8">
                <div className="flex flex-col items-center justify-center">
                    <article
                        style={{
                            backgroundImage: `url(${"/frame.png"})`,
                            objectFit: "cover",
                        }}
                        className="relative w-[714px] h-[410px] rounded-2xl bg-slate-900 mb-4"
                    >
                        <div className="flex items-center justify-center gap-3 my-4">
                            <Image
                                src="html5.svg"
                                width={45}
                                height={45}
                                alt=""
                            />
                            <Image
                                src="git.svg"
                                width={45}
                                height={45}
                                alt=""
                            />
                            <Image
                                width={45}
                                height={45}
                                src="github.svg"
                                alt=""
                            />
                        </div>
                        <div className="work--left-arrow rounded-[50%] p-5 border-[1px] border-solid border-white w-fit absolute top-1/2 -left-16 -translate-y-1/2">
                            <Image
                                alt=""
                                src={"left-arrow.svg"}
                                width={15}
                                height={15}
                                className="h-8 w-8"
                            />
                        </div>
                        <div className="work--right-arrow rounded-[50%] p-5 border-[1px] border-solid border-white w-fit absolute top-1/2 -right-16 -translate-y-1/2">
                            <Image
                                alt=""
                                src={"right-arrow.svg"}
                                width={15}
                                height={15}
                                className="h-8 w-8"
                            />
                        </div>
                    </article>
                    <h3 className="text-xl w-[714px]">
                        Lorem ipsum dolo amet consectetur adipisicing elit.
                        Minima, sequi.
                    </h3>
                </div>
            </main>
            <div className="flex justify-center">
                <ul className="flex items-center">
                    <li>.</li>
                    <li>.</li>
                    <li>.</li>
                    <li>.</li>
                </ul>
            </div>
        </div>
    )
}
