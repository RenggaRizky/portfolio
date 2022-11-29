import React from "react";
import ExperienceCard from "../Card/ExperienceCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Experiences() {
    const options = { delay: 3000 }; // Options
    const autoplayRoot = (emblaRoot) => emblaRoot.parentElement; // Root node
    const autoplay = Autoplay(options, autoplayRoot);

    const [emblaRef] = useEmblaCarousel(
        {
            loop: false,
            slidesToScroll: 1,
            breakpoints: {
                "(min-width: 640px)": { slidesToScroll: 2 },
                "(min-width: 1024px)": { slidesToScroll: 3 },
            },
        },
        [autoplay]
    );

    const experiences = [
        {
            logo: "img/logo-automate.jpg",
            jobTitle: "Front End Developer",
            company: "CV Solusi Automasi Indonesia (Automate All)",
            period: "September 2021 - Desember 2021",
        },
        {
            logo: "img/logo-up.png",
            jobTitle: "Asisten Praktikum Algoritma Pemrograman",
            company: "Universitas Pancasila",
            period: "November 2020 – Januari 2021",
        },
        {
            logo: "img/logo-up.png",
            jobTitle: "Asisten Praktikum Basis Data",
            company: "Universitas Pancasila",
            period: "November 2020 – Januari 2021",
        },
        {
            logo: "img/logo-up.png",
            jobTitle: "Asisten Praktikum Desain Web",
            company: "Universitas Pancasila",
            period: "November 2020 – Januari 2021",
        },
    ];

    return (
        <section
            className="container px-4 mb-16 lg:max-w-5xl xl:max-w-7xl lg:mx-auto pt-4 lg:pt-8"
            id="experiences"
        >
            <p className="uppercase text-primary font-bold text-sm lg:text-base ">
                Experiences
            </p>

            <h2 className="text-darkblue font-bold text-xl mb-8 sm:text-2xl lg:text-3xl">
                Pengalamannya apa aja sih??..
            </h2>

            <div className="relative ml-auto mr-auto max-w-full p-5">
                <div className="overflow-hidden w-full " ref={emblaRef}>
                    <div className="flex select-none sm:first:ml-3">
                        {experiences.map((data) => {
                            return (
                                <ExperienceCard
                                    className="mb-4"
                                    key={data.jobTitle}
                                    jobTitle={data.jobTitle}
                                    logo={data.logo}
                                    company={data.company}
                                    period={data.period}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
