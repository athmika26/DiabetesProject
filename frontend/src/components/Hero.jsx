import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="h-screen w-screen pt-[70px] bg-bgimg bg-center bg-no-repeat bg-cover">
            <div className="h-full w-screen bg-primary opacity-90 flex flex-col items-center justify-center">
                <div>
                    <p className="mx-4 sm:mx-12 md:mx-40 pb-20 sm:py-40 text-4xl sm:text-7xl leading-[3rem] text-white text-center ">Tool that utilizes Advanced <span className="highlight">Machine Learning</span> Models to predict the likelihood of developing <span className="highlight">Diabetes</span>.</p>
                </div>
                <Link
                    to="/predict"
                    className="w-full flex justify-center">
                    <button className="bg-white py-2 px-4 rounded-[10px] sm:rounded-[15px] font-medium text-2xl hover:scale-110 w-1/2 sm:w-1/3 md:w-1/6 flex justify-between items-center">
                        TRY NOW
                        <ArrowForwardIosIcon className="animated-icon"/>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Hero;