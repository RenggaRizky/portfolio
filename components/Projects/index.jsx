import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import PrimaryBtn from "../Button/Primary";
import ModalBtn from "../Button/Modal";
import ModalCard from "../Card/ModalCard";

export default function Projects() {
    const dataProject1 = {
        title: "Sistem Informasi Manajemen Inventory",
        company: "Toko Aly Jaya Ciomas",
        img: [
            {
                src: "img/project-1-1.svg",
                alt: "Dashboard Sistem Informasi Manajemen Inventory",
            },
            {
                src: "img/project-1-2.png",
                alt: "Sistem Informasi Manajemen Inventory Halaman Produk",
            },
            {
                src: "img/project-1-3.png",
                alt: "Sistem Informasi Manajemen Inventory Halaman Stok",
            },
            {
                src: "img/project-1-4.png",
                alt: "Sistem Informasi Manajemen Inventory Halaman Rak",
            },
        ],
        appDesc:
            "Sistem ini dibuat untuk membantu Toko Aly Jaya Ciomas dalam melakukan manajemen inventory produk yang ada di toko maupun di gudang. Sistem ini dapat melakukan pendataan produk, pendataan merek, pendataan jenis barang, pendataan barang masuk, pendataan barang keluar, pendataan pereturan barang, pendataan supplier, pendataan stok barang, mencetak laporan, pendataan kapasitas dan lokasi rak, serta notifikasi status stok barang",
        toolsDesc:
            "Berikut merupakan beberapa teknologi yang dipakai untuk membuat sistem: ",
        tools: [
            "ReactJS",
            "NodeJS",
            "ExpressJS",
            "Moongose",
            "MongoDB Atlas",
            "Bootstrap",
            "axios",
            "html2canvas",
            "jsPDF",
            "moment",
        ],
        code: "https://github.com/RenggaRizky/inventory-management",
    };

    const dataProject2 = {
        title: "Web Pendataan Kasus COVID 19",
        company: "",
        img: [
            {
                src: "img/project-2-1.png",
                alt: "Web Pendataan Kasus COVID 19",
            },
            {
                src: "img/project-2-2.png",
                alt: "Web Pendataan Kasus COVID 19",
            },
            {
                src: "img/project-2-3.png",
                alt: "Web Pendataan Kasus COVID 19",
            },
        ],
        appDesc:
            "Web ini mampu mengetahui data terkini mengenai COVID 19 di berbagai negara seperti jumlah pendududuk yang terinfeksi, jumlah penduduk yang meninggal, jumlah penduduk yang sembuh, dan jumlah penduduk yang masih menderita virus COVID 19",
        toolsDesc:
            "Berikut merupakan beberapa teknologi yang dipakai untuk membuat sistem: ",
        tools: ["HTML", "SCSS", "JavaScript", "Bootstrap", "Axios"],
        code: "https://github.com/RenggaRizky/web-pendataan-kasus-covid-19",
    };

    const project1 = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <ModalCard onClose={onClose} dataProject={dataProject1} />
                );
            },
        });
    };

    const project2 = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <ModalCard onClose={onClose} dataProject={dataProject2} />
                );
            },
        });
    };

    return (
        <section
            className="container px-4 mb-16 mx-auto lg:max-w-5xl xl:max-w-7xl pt-4 lg:pt-8"
            id="projects"
        >
            <div>
                <p className="uppercase text-primary font-bold text-sm lg:text-base">
                    Projects
                </p>

                <h2 className="text-darkblue font-bold text-xl mb-8 sm:text-2xl lg:text-3xl">
                    Pernah buat apa aja nih??..
                </h2>

                <div className="flex flex-col justify-center items-center gap-y-4 sm:flex-row sm:gap-y-0 sm:gap-x-4 sm:items-stretch sm:justify-evenly sm:px-5 lg:justify-center xl:justify-start">
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                        <a href="#">
                            <img
                                className="rounded-t-lg sm:w-full"
                                src="img/project-1-1.svg"
                                alt=""
                            />
                        </a>
                        <div className="p-5 sm:flex sm:justify-between sm:flex-col sm:text-xs">
                            <a href="#">
                                <h5 className="text-lg font-bold tracking-tight text-darkblue mb-4 leading-5 sm:text-base sm:mb-2 md:text-lg">
                                    Sistem Informasi Manajemen Inventory
                                </h5>
                            </a>
                            <p className="mb-10 font-normal text-xs  uppercase text-slate-400 sm:text-[0.625rem] xl:text-xs">
                                toko aly jaya ciomas
                            </p>
                            <ModalBtn onClick={project1}>
                                Lihat Selengkapnya
                            </ModalBtn>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                        <a href="#">
                            <img
                                className="rounded-t-lg sm:bg-cover"
                                src="img/project-2.svg"
                                alt=""
                            />
                        </a>
                        <div className="p-5 sm:flex sm:justify-between sm:flex-col sm:text-xs">
                            <a href="#">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-darkblue leading-5 sm:text-base sm:mb-2 md:mb-10 md:text-lg">
                                    Web Pendataan Kasus COVID 19
                                </h5>
                            </a>
                            <p className="mb-10 font-normal text-xs  uppercase text-slate-400 sm:mb-[4.5rem] sm:flex sm:justify-between sm:flex-col sm:text-xs xl:text-xs"></p>
                            <ModalBtn onClick={project2}>
                                Lihat Selengkapnya
                            </ModalBtn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
