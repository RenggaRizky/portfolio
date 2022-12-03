import { Tooltip } from "flowbite-react";
import React from "react";

export default function Tools() {
    const logo = [
        { src: "img/html.png", desc: "HTML" },
        { src: "img/css.png", desc: "CSS" },
        { src: "img/js.png", desc: "JavaScript" },
        { src: "img/sass.png", desc: "SASS" },
        { src: "img/bootstrap.png", desc: "Bootstrap" },
        { src: "img/tailwind.svg", desc: "Tailwind" },
        { src: "img/react.png", desc: "ReactJS" },
        { src: "img/nextjs.svg", desc: "NextJS" },
        { src: "img/mongodb.svg", desc: "MongoDB" },
        { src: "img/figma.png", desc: "Figma" },
        { src: "img/github.png", desc: "Github" },
    ];

    return (
        <section
            className="mx-auto sm:max-w-2xl sm:px-4 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl pt-4 lg:pt-8"
            id="tools-and-skills"
        >
            <div className="mx-auto container px-4 mb-16 sm:flex sm:bg-gradient-to-r from-darkblue to-secondary sm:rounded-xl sm:justify-between sm:gap-x-8 sm:shadow-lg md:gap-x-10 lg:px-14">
                <div className="sm:w-full sm:basis-1/2 sm:self-end">
                    <img
                        src="img/tools.png"
                        className="hidden sm:inline-block sm:w-full xl:w-3/4"
                    />
                </div>
                <div className="sm:basis-1/2 sm:self-center sm:py-8 lg:py-12">
                    <p className="uppercase text-primary font-bold text-sm lg:text-base">
                        Tools & Skills
                    </p>

                    <h2 className="text-darkblue font-bold text-xl mb-8 sm:text-2xl sm:text-white lg:text-3xl lg:mb-10">
                        Terus bisa apa aja??..
                    </h2>

                    <div className="mb-16 sm:hidden">
                        <img
                            src="img/tools-m.png"
                            alt="tools"
                            className="w-fit"
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-4  w-full place-content-between sm:gap-2 md:gap-4">
                        {logo.map((data) => {
                            return (
                                <div
                                    key={data.src}
                                    className="hover:scale-125 sm:hover:scale-150 md:hover:scale-110 h-20 xl:h-28  px-4 py-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 flex justify-center items-center flex-col transition-all  group  sm:px-1 sm:py-1"
                                >
                                    <div className="flex flex-col justify-between items-center gap-y-2">
                                        <img
                                            src={data.src}
                                            alt={data.desc}
                                            className="w-3/4 group-hover:scale-75  duration-200 delay-100 ease-in-out lg:w-1/2"
                                        />
                                        <p className="text-darkblue text-[0.625rem] xl:text-sm hidden group-hover:inline-block">
                                            {data.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
