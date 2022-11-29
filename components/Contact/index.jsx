import { Tooltip } from "flowbite-react";
import React from "react";
import PrimaryBtn from "../Button/Primary";

export default function Contact() {
    const contactLink = [
        {
            src: "img/gmail.png",
            desc: "renggarizkys@gmail.com",
            link: "mailto:renggarizkys@gmail.com",
        },
        {
            src: "img/linkedin.png",
            desc: "Rengga Rizky Septian",
            link: "https://www.linkedin.com/in/rengga-rizky-septian/",
        },
        {
            src: "img/instagram.png",
            desc: "@renggarzky",
            link: "https://www.instagram.com/renggarzky/",
        },
        {
            src: "img/github.png",
            desc: "RenggaRizky",
            link: "https://github.com/RenggaRizky",
        },
    ];

    return (
        <section
            className="sm:mx-auto sm:max-w-2xl sm:px-4 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl pt-4 lg:pt-8"
            id="contact"
        >
            <div className="container px-4 mb-16 sm:bg-gradient-to-r from-darkblue to-secondary sm:rounded-xl sm:shadow-lg sm:flex sm:gap-x-8 sm:items-center sm:justify-between md:gap-x-10 lg:px-14 xl:text-sm">
                <div className="sm:basis-1/2">
                    <img
                        src="img/contact.svg"
                        alt="contact"
                        className="hidden sm:inline-block sm:w-full lg:w-[90%] xl:w-[85%]"
                    />
                </div>

                <div className="sm:basis-1/2 sm:py-8 sm:text-left lg:py-20">
                    <p className="uppercase text-primary font-bold text-sm lg:text-base">
                        Contact
                    </p>

                    <h2 className="text-darkblue font-bold text-xl mb-8 sm:text-2xl sm:text-white lg:text-3xl lg:mb-10">
                        Yuk kenal lebih dekat
                    </h2>

                    <div className="flex justify-center mb-7 sm:mb-0">
                        <img
                            src="img/contact-m.svg"
                            alt="contact"
                            className="w-full sm:hidden"
                        />
                    </div>

                    <p className="font-normal text-xs  text-slate-400 text-center mb-8 sm:text-lightpurple sm:text-left sm:text-[0.625rem] sm:mb-4 lg:text-xs lg:mb-6 xl:text-sm">
                        Untuk menghubungi bisa menekan ikon sosial media berikut
                    </p>

                    <div className="grid grid-cols-4 gap-4 w-full place-content-between mb-12 sm:mb-4 lg:mb-6">
                        {contactLink.map((data) => {
                            return (
                                <Tooltip
                                    key={data.link}
                                    content={data.desc}
                                    className=""
                                >
                                    <a
                                        href={data.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full h-full px-4 py-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 flex hover:scale-110 transition-all justify-center items-center group delay-100 ease-in-out cursor-pointer sm:px-2 sm:py-4 lg:px-1 lg:py-5"
                                    >
                                        <div className="flex justify-center items-center">
                                            <img
                                                src={data.src}
                                                alt={data.desc}
                                                className="w-1/2 delay-100 ease-in-out sm:w-[60%] lg:w-1/2 xl:w-[45%]"
                                            />
                                        </div>
                                    </a>
                                </Tooltip>
                            );
                        })}
                    </div>

                    <p className="font-normal text-xs  text-slate-400 text-center mb-8 sm:text-lightpurple sm:text-left sm:text-[0.625rem] lg:text-xs lg:mb-10 xl:text-sm">
                        Atau bisa juga langsung lihat CV saya
                    </p>

                    <a
                        href="pdf/Rengga_Rizky_Septian-Front_End_Developer.pdf"
                        download="Rengga Rizky Septian - Front End Developer"
                    >
                        <PrimaryBtn className="w-full sm:w-auto">
                            Download CV
                        </PrimaryBtn>
                    </a>
                </div>
            </div>
        </section>
    );
}
