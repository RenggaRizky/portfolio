import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="font-poppins container border-t border-solid border-slate-200 mt-36 mb-10 px-4 pt-4 md:pt-8 xl:pt-12  sm:mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl md:flex md:justify-between md:items-center">
            <Link
                href="/"
                className="flex text-primary gap-x-4 items-center justify-center md:justify-start"
            >
                <img
                    src="icon/logo.svg"
                    className="w-[10%] sm:w-[8%] lg:w-[12%]"
                />
                <h2 className="font-bold uppercase text-sm lg:text-xs">
                    Rengga Rizky <span className="block">Septian</span>
                </h2>
            </Link>
            <ul className="flex flex-wrap items-center mt-8 text-sm text-gray-500 justify-center md:mt-0">
                <li>
                    <a
                        href="#experiences"
                        className="mr-4 hover:underline md:mr-6 "
                    >
                        Experiences
                    </a>
                </li>
                <li>
                    <a
                        href="#tools-and-skills"
                        className="mr-4 hover:underline md:mr-6"
                    >
                        Tools & Skills
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className="mr-4 hover:underline md:mr-6"
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" className="hover:underline">
                        Contact
                    </a>
                </li>
            </ul>
        </footer>
    );
}
