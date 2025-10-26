import React from "react";
import Image from "next/image"
// import Link from "next/link"
// import { TypeAnimation } from "react-type-animation";
// import { AnimatePresence, easeInOut, motion, useInView } from "framer-motion";



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// import Typography from '@mui/material/Typography';

function VideoCard({ num, title, imgUrl }) {
    return (
        <div 
        // className="border border-gray-200 bg-blue-100 rounded-lg shadow-md p-3 m-2"
        // className="border border-gray-200 bg-blue-50 rounded-lg shadow-md p-3 m-3 sd:w-4/5 lg:w-3/4 lg:h-[250px] opacity-80 hover:opacity-100 hover:bg-white"
            className="border border-gray-200 bg-blue-50 rounded-lg shadow-md p-3 m-3 2xl:w-[400px] 2xl:h-[300px] opacity-80 hover:opacity-100 hover:bg-white"
        // onClick = {onClicked}
        >
            <div className="flex flex-row gap-4 opacity-100">
                <div className="flex justify-center items-center w-12 h-12 bg-blue-500 rounded-lg text-center text-white font-bold mb-2">
                    {num}
                </div>
                <h3 className="text-lg font-bold mb-2">
                    {title}
                </h3>
            </div>
            <div className="relative xl:w-[250px] xl:h-[120px] 2xl:w-[380px] 2xl:h-[220px]">
                <Image src={imgUrl} fill alt=""/>
            </div>
        </div>
    );
}

export default VideoCard;
