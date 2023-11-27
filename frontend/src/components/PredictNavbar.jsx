import React from "react";
import { Link } from "react-router-dom";

const PredictNavbar = () => {

    return (
        <nav className="w-full px-6 md:px-16 lg:px-28 flex items-center py-5 sm:py-10 fixed top-0 z-20 bg-primary">
            <div className="w-full flex justify-between items-center mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className="text-[30px] font-medium cursor-pointer text-secondary font-Bakbak">GlucoWise</p>
                </Link>
            </div>
        </nav>
    )
}

export default PredictNavbar;