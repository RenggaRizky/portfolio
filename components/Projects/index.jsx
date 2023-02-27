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
                src: "img/project-1-1.png",
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
        appDesc: "Sistem ini dibuat untuk membantu Toko Aly Jaya Ciomas dalam melakukan manajemen inventory produk yang ada di toko maupun di gudang. Sistem ini dapat melakukan pendataan produk, pendataan merek, pendataan jenis barang, pendataan barang masuk, pendataan barang keluar, pendataan pereturan barang, pendataan supplier, pendataan stok barang, mencetak laporan, pendataan kapasitas dan lokasi rak, serta notifikasi status stok barang",
        toolsDesc: "Berikut merupakan beberapa teknologi yang dipakai untuk membuat sistem: ",
        tools: ["ReactJS", "NodeJS", "ExpressJS", "Moongose", "MongoDB Atlas", "Bootstrap", "axios", "html2canvas", "jsPDF", "moment"],
        code: "https://github.com/RenggaRizky/inventory-management",
    };

    const dataProject2 = {
        title: "Moviearo  Penyedia Informasi Film & Serial TV",
        company: "The Movie Database API",
        img: [
            {
                src: "img/project-2-1.png",
                alt: "Halaman Utama Moviearo",
            },
            {
                src: "img/project-2-2.png",
                alt: "Halaman List Film dan Serial TV",
            },
            {
                src: "img/project-2-3.png",
                alt: "Halaman Film dan Serial TV",
            },
            {
                src: "img/project-2-4.png",
                alt: "Section video",
            },
        ],
        appDesc: "Web yang dibuat untuk menampilkan informasi mengenai film dan serial tv di seluruh dunia dimana data yang diambil berasal dari The  Movie Database API",
        toolsDesc: "Berikut merupakan beberapa teknologi yang dipakai untuk membuat sistem: ",
        tools: ["ReactJS", "Tailwind", "Flowbite Tailwind"],
        code: "https://moviearo.netlify.app/",
    };

    const dataProject3 = {
        title: "Landing Page Echo Manajemen Portofolio Crypto",
        company: "Landing Page",
        img: [
            {
                src: "img/project-3-1.png",
                alt: "Halaman Utama Echo",
            },
            {
                src: "img/project-3-2.png",
                alt: "Modal di Halaman Utama Echo",
            },
            {
                src: "img/project-3-3.png",
                alt: "Section Fitur Echo",
            },
            {
                src: "img/project-3-4.png",
                alt: "Section Keuntungan Echo",
            },
            {
                src: "img/project-3-5.png",
                alt: "Section Blog Echo",
            },
        ],
        appDesc: "Contoh web landing page dari perusahaan manajemen portofolio crypto",
        toolsDesc: "Berikut merupakan beberapa teknologi yang dipakai untuk membuat sistem: ",
        tools: ["HTML", "CSS", "JavaScript"],
        code: "https://renggarizky.github.io/crypto-portfolio-management-landingpage/",
    };

    const project1 = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return <ModalCard onClose={onClose} dataProject={dataProject1} sourceType='code' />;
            },
        });
    };

    const project2 = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return <ModalCard onClose={onClose} dataProject={dataProject2} sourceType='app' />;
            },
        });
    };

    const project3 = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return <ModalCard onClose={onClose} dataProject={dataProject3} sourceType='app' />;
            },
        });
    };

    return (
        <section className='container px-4 mb-16 mx-auto lg:max-w-5xl xl:max-w-7xl pt-4 lg:pt-8' id='projects'>
            <div>
                <p className='uppercase text-primary font-bold text-sm lg:text-base'>Projects</p>

                <h2 className='text-darkblue font-bold text-xl mb-8 sm:text-2xl lg:text-3xl'>Pernah buat apa aja nih??..</h2>
                <div className='grid grid-cols-1 justify-center items-center gap-y-4 px-2 sm:grid-cols-2 sm:gap-x-4 sm:justify-between sm:items-stretch sm:px-5 lg:grid-cols-3'>
                    <div className='sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow-md w-full'>
                        <div>
                            <img className='rounded-t-lg sm:w-full' src='img/project-1-1.png' alt='' />
                        </div>
                        <div className='p-5 sm:flex sm:justify-between sm:flex-col sm:text-xs'>
                            <h5 className='text-lg font-bold tracking-tight text-darkblue mb-4 leading-5 sm:text-base sm:mb-2 md:text-lg'>Sistem Informasi Manajemen Inventory Toko Aly Jaya Ciomas</h5>
                            <p className='mb-10 font-normal text-xs  uppercase text-slate-400 sm:text-[0.625rem] xl:text-xs'>React, NodeJS, ExpressJS, MongoDB</p>
                            <ModalBtn onClick={project1}>Lihat Selengkapnya</ModalBtn>
                        </div>
                    </div>

                    <div className='sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow-md w-full'>
                        <div>
                            <img className='rounded-t-lg sm:w-full' src='img/project-2-1.png' alt='' />
                        </div>
                        <div className='p-5 sm:flex sm:justify-between sm:flex-col sm:text-xs'>
                            <h5 className='text-lg font-bold tracking-tight text-darkblue mb-4 leading-5 sm:text-base sm:mb-2 md:text-lg'>Moviearo Penyedia Informasi Film & Serial TV (The Movie Database API)</h5>
                            <p className='mb-10 font-normal text-xs  uppercase text-slate-400 sm:text-[0.625rem] xl:text-xs'>React, Tailwind</p>
                            <ModalBtn onClick={project2}>Lihat Selengkapnya</ModalBtn>
                        </div>
                    </div>

                    <div className='sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow-md w-full'>
                        <div>
                            <img className='rounded-t-lg sm:w-full' src='img/project-3-1.png' alt='' />
                        </div>
                        <div className='p-5 sm:flex sm:justify-between sm:flex-col sm:text-xs'>
                            <h5 className='text-lg font-bold tracking-tight text-darkblue mb-4 leading-5 sm:text-base sm:mb-2 md:text-lg'>Landing Page Echo Manajemen Portofolio Crypto</h5>
                            <p className='mb-10 font-normal text-xs  uppercase text-slate-400 sm:text-[0.625rem] xl:text-xs'>HTML, CSS, JavaScript</p>
                            <ModalBtn onClick={project3}>Lihat Selengkapnya</ModalBtn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
