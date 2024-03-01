import React from "react"

const Card = ({ title, number }) => (
    <div className="w-44 h-22 border border-gray-300 rounded-lg p-2 flex flex-col items-center justify-center m-4">
        <span className="text-4xl font-medium text-white kalnia-font">
            +{number}
        </span>
        <span className="text-sm text-left text-gray-500 font-dosis">
            {title}
        </span>
    </div>
)

const SectionItem = ({ title, description }) => (
    <div className="mb-4">
        <h3 className="text-lg font-medium mb-1 text-white kalnia-font">
            -{title}
        </h3>
        <p className="text-base text-gray-600 font-dosis">{description}</p>
    </div>
)

const Experience = () => (
    <div
        className="flex flex-col items-center justify-start h-screen px-8"
        style={{
            background:
                "linear-gradient(103.02deg, #2E2E2E 0%, #222222 81.17%)",
        }}
    >
        <div className="flex justify-between mb-8 flex-wrap  mt-8">
            <Card title="Successful Projects" number={30} />
            <Card title="Years of Experience" number={4} />
            <Card title="Worldwide Clients" number={10} />
        </div>

        <div
            className="grid grid-cols-2 gap-16 mt-12"
            style={{ gridTemplateColumns: "1fr 1fr" }}
        >
            <div>
                <h1 className="text-4xl font-medium mb-4 text-white  kalnia-font">
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
                <h1 className="text-4xl font-medium mb-4 text-white kalnia-font">
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
    </div>
)

export default Experience
