import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ModalCarousel from "../Carousel/ModalCarousel";
import PrimaryBtn from "../Button/Primary";

export default function ModalCard({ onClose, dataProject, sourceType }) {
    const options = { delay: 3000 }; // Options
    const autoplayRoot = (emblaRoot) => emblaRoot.parentElement; // Root node
    const autoplay = Autoplay(options, autoplayRoot);

    const [emblaRef] = useEmblaCarousel({ loop: false, slidesToScroll: 1 }, [autoplay]);

    return (
        <div className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 px-4 py-4 w-full h-full bg-gray-800 bg-opacity-40'>
            <div className='relative w-full max-w-2xl h-full md:h-auto md:max-w-3xl md:mx-auto lg:max-w-5xl'>
                <div className='relative bg-white rounded-lg shadow'>
                    {/* <!-- Modal header --> */}
                    <div className='flex justify-between items-start p-4 rounded-t  '>
                        <button onClick={onClose} type='button' className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center '>
                            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                                <path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd'></path>
                            </svg>
                        </button>
                    </div>

                    {/* <!-- Modal body --> */}
                    <div className='p-6 space-y-6 font-poppins md:space-y-4 md:p-8 xl:max-w-6xl'>
                        <div className=''>
                            <h5 className='text-xl font-bold tracking-tight text-darkblue md:text-2xl lg:text-3xl lg:mb-4'>{dataProject.title}</h5>
                            <p className='mb-10 font-normal text-xs text-primary uppercase sm:text-base'>{dataProject.company}</p>
                        </div>

                        <div className='relative ml-auto mr-auto max-w-full xl:basis-1/2'>
                            <div className='overflow-hidden w-full ' ref={emblaRef}>
                                <div className='flex select-none'>
                                    {dataProject.img.map((data) => {
                                        return <ModalCarousel key={data.alt} src={data.src} alt={data.alt} />;
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <p className='font-normal text-xs text-slate-400 text-left mb-2 md:text-sm'>{dataProject.appDesc}</p>

                            <p className='font-normal text-xs text-slate-400 text-left md:text-sm'>{dataProject.toolsDesc}</p>

                            <ul className='list-disc pl-4'>
                                {dataProject.tools.map((data) => {
                                    return (
                                        <li key={data} className='font-normal text-xs text-slate-400 md:text-sm'>
                                            {data}
                                        </li>
                                    );
                                })}
                            </ul>

                            <a href={dataProject.code} target='_blank' rel='noreferrer' className='md:flex md:justify-end'>
                                <PrimaryBtn className='w-full my-8 md:text-base md:w-auto md:mt-10 md:mb-8'>{sourceType === "code" ? "Lihat Source Code" : "Kunjungi Aplikasi"}</PrimaryBtn>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
