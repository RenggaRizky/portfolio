import React, { useState } from "react";
import PrimaryBtn from "../Button/Primary";
import { Button, Navbar } from "flowbite-react";
import styles from "./style.module.css";

export default function NavbarMenu() {
    return (
        <Navbar
            fluid={false}
            rounded={true}
            className="xl:py-10 px-4 xl:max-w-7xl xl:mx-auto"
        >
            {/* <Navbar fluid={true} rounded={true} className={styles.navbar}> */}
            <Navbar.Brand href="#">
                <img
                    src="icon/logo.svg"
                    className="h-12 sm:h-14 animate-wiggle"
                    alt="logo"
                />
            </Navbar.Brand>
            <a
                className="flex md:order-2"
                href="pdf/Rengga_Rizky_Septian-Front_End_Developer.pdf"
                download="Rengga Rizky Septian - Front End Developer"
            >
                <PrimaryBtn className="hidden md:inline-block">
                    Download CV
                </PrimaryBtn>
            </a>
            <Navbar.Toggle />
            <Navbar.Collapse className="mt-4 p-4 md:mt-0 md:p-0 bg-gray-50 md:bg-white rounded-lg md:rounded-none">
                <Navbar.Link
                    href="#experiences"
                    className="block py-2 pl-3 pr-4  text-darkblue md:bg-white border-none rounded-md hover:bg-primary hover:text-white  md:hover:bg-transparent md:hover:text-primary transition-all delay-200 md:p-0"
                >
                    Experiences
                </Navbar.Link>
                <Navbar.Link
                    href="#tools-and-skills"
                    className="block py-2 pl-3 pr-4  text-darkblue md:bg-white border-none rounded-md hover:bg-primary hover:text-white  md:hover:bg-transparent md:hover:text-primary transition-all delay-200 md:p-0"
                >
                    Tools & Skills
                </Navbar.Link>
                <Navbar.Link
                    href="#projects"
                    className="block py-2 pl-3 pr-4  text-darkblue md:bg-white border-none rounded-md hover:bg-primary hover:text-white  md:hover:bg-transparent md:hover:text-primary transition-all delay-200 md:p-0"
                >
                    Projects
                </Navbar.Link>
                <Navbar.Link
                    href="#contact"
                    className="block py-2 pl-3 pr-4  text-darkblue md:bg-white border-none rounded-md hover:bg-primary hover:text-white  md:hover:bg-transparent md:hover:text-primary transition-all delay-200 md:p-0"
                >
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
