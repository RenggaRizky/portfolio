import React from "react";
import PrimaryBtn from "../Button/Primary";

export default function Hero() {
    return (
        <section className="mt-8 mb-16 sm:mx-auto sm:max-w-2xl sm:px-4 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="container px-4 sm:bg-gradient-to-r from-darkblue to-secondary sm:rounded-xl sm:flex sm:justify-between sm:gap-x-8 sm:shadow-lg lg:px-16 xl:gap-x-10">
                <div className="flex justify-center sm:hidden">
                    <img src="img/hero-m.svg" alt="hero" className="w-full" />
                </div>

                <div className="px-2 sm:basis-1/2 sm:self-center sm:py-8 lg:py-20">
                    <p className="uppercase text-primary font-bold text-sm mt-16 sm:mb-3 sm:mt-0 lg:text-base lg:mb-4">
                        Halo, nama saya
                    </p>

                    <h1 className="uppercase text-2xl font-bold sm:text-white sm:text-3xl lg:text-5xl lg:mb-4 xl:text-6xl xl:mb-8">
                        Rengga Rizky Septian
                    </h1>

                    <p className="font-normal text-xs text-slate-400 text-justify mt-2 sm:text-lightpurple sm:text-left sm:text-[0.625rem] xl:text-sm">
                        Lulusan Universitas Pancasila dari jurusan Teknik
                        Informatika yang memiliki ketertarikan dan minat yang
                        tinggi untuk berkarir di bidang pengembangan web,
                        khususnya di posisi Front End Developer.
                    </p>

                    <a href="#experiences">
                        <PrimaryBtn className="mt-20 w-full flex justify-center items-center sm:w-auto sm:mt-10 lg:mt-12 xl:mt-20">
                            Lihat selengkapnya
                            <span className="rounded-full bg-darkblue px-2 py-1 ml-6 sm:ml-3 lg:ml-6">
                                <i className="fa-solid fa-arrow-down text-primary"></i>
                            </span>
                        </PrimaryBtn>
                    </a>
                </div>

                <div className="sm:w-full sm:basis-1/2 sm:self-end">
                    <img
                        src="img/hero.png"
                        alt="hero"
                        className="hidden sm:inline-block sm:w-full "
                    />
                </div>
            </div>
        </section>
    );
}
