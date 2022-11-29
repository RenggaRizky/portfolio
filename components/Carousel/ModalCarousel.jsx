import React from "react";

export default function ModalCarousel({ src, alt }) {
    return (
        <div className="relative grow-0 shrink-0 p-1 mx-1 bg-white border border-gray-300 rounded-lg basis-full  xl:basis-10/12 xl:mx-10">
            <img src={src} alt={alt} className="w-full" />
        </div>
    );
}
