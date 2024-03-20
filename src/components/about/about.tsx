import React from "react"
import Cont from "../cont"
import Inner from "@/components/Layout/Inner"

type CardTypes = {
    title: string
    number: number
}

type SectionItemTypes = {
    title: string
    description: string
}
const Card = ({ title, number }: CardTypes) => (
    <div className="w-[193px] h-[98px] rounded-lg border-solid  border-white border p-2 flex flex-col items-center justify-center m-4 bg-linearBlack">
        <span className="text-[48px]  text-white font-kalnia leading-10">
            +{number}
        </span>
        <span className="text-left text-grayText font-dosis">{title}</span>
    </div>
)

const SectionItem = ({ title, description }: SectionItemTypes) => (
    <div className="flex justify-start items-start gap-3 mb-2">
        <div>{/* <Image className="mt-3.5" src="/-.svg" alt="-" /> */}</div>
        <div>
            <h3 className="text-lg text-white font-Dosis">{title}</h3>
            <p className="text-grayText font-Dosis">{description}</p>
        </div>
    </div>
)

const About = () => (
    <Inner>
        <div
            className="flex flex-col items-center justify-start py-20 pb-40" // give the same vertical padding to all sections
            style={{
                background:
                    "linear-gradient(103.02deg, #2E2E2E 0%, #222222 81.17%)", // bro.. we have tailwind...
            }}
        >
            <Cont>
                {/* <h1 className="text-white text-3xl text-center mb-8">About</h1> */}
                <div className="flex justify-center flex-wrap">
                    <Card title="Successful Projects" number={30} />
                    <Card title="Years of Experience" number={4} />
                    <Card title="Worldwide Clients" number={10} />
                </div>
                <div
                    className="grid grid-cols-2 gap-16 my-12"
                    style={{ gridTemplateColumns: "1fr 1fr" }}
                >
                    <div>
                        <h1 className="text-2xl  mb-4 text-white  kalnia-font">
                            Education
                        </h1>
                        <SectionItem
                            title="School"
                            description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                        />
                        <SectionItem
                            title="School"
                            description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                        />
                        <SectionItem
                            title="School"
                            description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                        />
                        <SectionItem
                            title="Degree"
                            description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                        />
                    </div>

                    <div>
                        <h1 className="text-2xl font-medium mb-4 text-white kalnia-font">
                            Experience
                        </h1>
                        <SectionItem
                            title="Company"
                            description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                        />
                        <SectionItem
                            title="Company"
                            description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                        />
                        <SectionItem
                            title="Company"
                            description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                        />
                        <SectionItem
                            title="Role"
                            description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                        />
                    </div>
                </div>
            </Cont>
        </div>
    </Inner>
)

export default About
