
import React from "react";
// import Image from "next/image"
// import Link from "next/link"
// import { TypeAnimation } from "react-type-animation";
// import { AnimatePresence, easeInOut, motion, useInView } from "framer-motion";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import Typography from '@mui/material/Typography';

function Video_detail({onClose, num, title, video, description}){
  return (
    <div className="">
      <motion.div className="flex items-center justify-center w-screen h-screen"
        key={num}
        initial={{x:0, y:0, width:10, height:10}}
        animate={{
          x: 0,
          y: 0,
          width: "100vw",
          height: "100vh",
          opacity: 1
        }}
        exit={{
          // width: "0vw",
          // height: "0vh",
          opacity: 0
        }}
        // transition={{ 
        //   duration: 1
        // }}
        transition={{ 
          // y:{duration: 3 },
          opacity: { duration: 2 }
        }}
      >
        <div className="w-3/5 h-5/6 flex flex-col rounded-lg bg-gradient-to-b from-blue-50 to-blue-100 p-2 mx-auto shadow-2xl">
          <div className="flex flex-row items-center gap-5 justify-between">
            <div className="flex flex-row gap-5 items-center">
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center w-16 h-16 bg-blue-500 rounded-lg text-center text-white font-bold mb-2">
                  {num}
                </div>
              </div>
              <div>
              <h3 className="text-2xl font-bold mb-2">
                {title}
              </h3>
                {description}
              </div>
            </div>
            <FontAwesomeIcon icon={faTimes} className="text-2xl -mt-9 hover:ring-blue-300 rounded-full cursor-pointer" 
              onClick={onClose}
            />
          </div>

          <div className="flex flex-row w-full h-full items-center">
            <video 
              className="rounded-lg shadow-xl w-full h-full p-2"
              autoPlay
              loop
              controls
            >
              <source src={video} type="video/mp4" />                
              您的浏览器不支持Video标签。
            </video>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


export default Video_detail;
