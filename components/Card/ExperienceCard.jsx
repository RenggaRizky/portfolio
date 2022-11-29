import React from "react";
import { Card } from "flowbite-react";

export default function ExperienceCard({
    className,
    logo,
    jobTitle,
    company,
    period,
}) {
    return (
        <div
            className={[
                className,
                "relative grow-0 shrink-0 basis-full ml-3 h-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 sm:basis-1/2 lg:basis-1/3",
            ].join(" ")}
        >
            <div className="">
                <img
                    src={logo}
                    className={[
                        logo === "img/logo-automate.jpg"
                            ? "rounded-full w-1/5 sm:w-1/6 lg:w-3/12"
                            : "w-1/4 sm:1/5 lg:w-1/3",
                        "mb-4 w-full h-full object-cover",
                    ].join(" ")}
                />
                <h5 className="text-lg font-bold tracking-tight text-gray-900 sm:text-base  xl:text-lg">
                    {jobTitle}
                </h5>
                <p className="font-normal text-sm text-gray-700 mb-4 sm:text-xs xl:text-sm">
                    {company}
                </p>
                <p className="font-normal text-xs text-slate-400 uppercase sm:text-[0.625rem] xl:text-xs">
                    {period}
                </p>
            </div>
        </div>
    );
}
