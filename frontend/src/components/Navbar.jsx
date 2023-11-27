import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

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
                <Link
                    to="/predict"
                >
                    <button className="bg-white py-1 px-4 rounded-[10px] sm:rounded-[15px] font-medium text-2xl hover:scale-110">
                        TRY IT!
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;