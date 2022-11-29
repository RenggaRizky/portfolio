import React from "react";

export default function PrimaryBtn({ children, className }) {
    return (
        <div className="group">
            <button
                type="button"
                className={[
                    className,
                    "text-darkblue bg-primary border border-solid border-darkblue focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-full text-sm px-5 py-3.5 text-center transition-all group-hover:rounded-md group-hover:delay-200 group-hover:ease-in-out sm:text-xs sm:py-3 lg:text-sm",
                ].join(" ")}
            >
                {children}
            </button>
        </div>
    );
}
