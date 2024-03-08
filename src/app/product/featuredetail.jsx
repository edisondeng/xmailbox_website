
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation";
import { AnimatePresence, easeInOut, motion, useInView } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight,faTimes } from '@fortawesome/free-solid-svg-icons';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Typography from '@mui/material/Typography';

function Feature_detail({onClose, num, title, description, icon, next, previous, onNextClicked, onPreviousClicked, children}){
  return (
    <div className="">
      {/* <Image src="/easymgn.1.png" width="1200" height="500" alt=""/> */}
      {/* <video src="/add_email.mp4" autoPlay/> */}
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
          opacity: { duration: 3 }
        }}
      >
        <div className="w-full h-5/6 md:w-3/5 md:h-4/5 flex flex-col rounded-lg bg-gradient-to-b from-blue-50 to-blue-100 p-3 mx-auto shadow-2xl">
          <div className="flex flex-row items-center gap=1 md:gap-10 justify-between">
            <div className="flex flex-row gap-2 md:gap-10 items-center">
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center w-16 h-16 bg-blue-500 rounded-lg text-center text-white font-bold mb-2">
                  {num}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {title}
              </h3>
              <Image width={50} height={50} src={icon} alt="" />
            </div>
            <FontAwesomeIcon icon={faTimes} className="text-2xl -mt-9 hover:ring-blue-300 rounded-full cursor-pointer" 
              onClick={onClose}
            />
          </div>

          <div className="flex flex-col md:flex-row h-full mt-1 md:mt-6 gap-8 md:gap-10 items-start justify-aroun">
            {/*动画文字*/}
            {/* <div className="md:text-xl mt-6 px-10 w-1/3 h-full flex flex-col items-start bg-[url('/BOX.bg.png')] bg-cover"> */}
            <div className="md:text-xl mt-6 px-10 w-full h-1/3 md:w-1/3 md:h-full flex flex-col items-start wavy-background-small">
              <TypeAnimation
                sequence={[
                  description,
                  10000,
                  // '',
                  // 1000,
                  // description,
                  // 10000,
                  // '',
                  // 1000
                ]}
                wrapper="span"
                speed={1}
                style={{ fontSize: '1em', display: 'inline-block' }}
                // repeat={Infinity}
                cursor={true}
              />
              {/* <Image width={50} height={50} src={"next"} alt="" /> */}
            </div>

            {/*主体*/}
            <div className="w-full md:w-2/3">{children}</div>
      
          </div>

          <div className="flex flex-row justify-between gap-4 mt-4 animate-bounce"> {/* 为图标添加 margin-top */}
            {/* <FontAwesomeIcon icon={faArrowLeft} className="text-black text-2xl hover:ring-2 hover:ring-blue-300 rounded-full" />
            <FontAwesomeIcon icon={faArrowRight} className="text-black text-2xl hover:ring-2 hover:ring-blue-300 rounded-full" /> */}
            <div className="group"
              onClick={(e)=>{
                onPreviousClicked();
                e.stopPropagation();
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-2xl hover:ring-blue-300 rounded-full cursor-pointer"/>
              <span className="absolute right-full ml-2 w-auto p-2 m-2 min-w-max text-sm text-white bg-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
                {previous}
              </span>
            </div>
            <div className="group"
              onClick={(e)=>{
                onNextClicked();
                e.stopPropagation();
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} className="text-2xl hover:ring-blue-300 rounded-full cursor-pointer" />
              <span className="absolute left-full ml-2 w-auto p-2 m-2 min-w-max text-sm text-white bg-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
                {next}
              </span>
            </div>
          </div>
        </div>


      </motion.div>

      {/* <div 
        className="absolute top-0 right-0 m-2 cursor-pointer"
        onClick={onClose}
        style={{ width: '30px', height: '30px', backgroundColor: 'white' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div> */}

    </div>
  );
}


export default Feature_detail;
