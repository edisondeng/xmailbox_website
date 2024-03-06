"use client"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion"
import { AnimatePresence, motion } from "framer-motion";

const Homepage = () => {
  return (
    // <AnimatePresence>
      <motion.div
        key="home" 
        className="h-full flex flex-col lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48"
        initial={{ opacity: 0, y:'-200vh' }}
        animate={{ opacity: 1, y:'0' }}
        transition={{ duration: 1 }}
        // exit={{ opacity: 0, duration: 2, y:'-120vh' }}
      >
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          {/* <motion.div
            className="w-1/2 h-1/2 rounded flex items-center justify-center"
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          > */}
            <Image src="/BOX4.25.png" alt="" fill className="object-contain"/>
          {/* </motion.div> */}
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/3 lg:h-full lg:w-1/2 flex flex-col gap-8 items-cetner justify-center">
          {/* {Title} */}
          <h1 className="text-2xl md:text-6xl font-bold px-10">
            {/* 企业邮箱全新解决方案 */}
            <TypeAnimation
              sequence={[
                '企业邮箱全新解决方案', 5000,
                '', 1000,
                '企业邮箱全新解决方案', 5000,
                '', 1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          {/* DESC */}
          <p className="md:text-xl px-10">
            {/* 轻松搭建企业邮箱，无限容量、无限账户、无限域名 */}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                '轻松搭建企业邮箱，无限账户、无限扩容、灵活高效',
                5000, // wait 1s before replacing "Mice" with "Hamsters"
                '',
                1000,
                '轻松搭建企业邮箱，无限账户、无限扩容、灵活高效',
                5000,
                '',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
              cursor={false}
            />
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-12  px-10">
            <button className="p-4 rounded-lg ring-1 ring-green bg-black text-white transition duration-300 ease-in-out hover:shadow-outline">
              <Link href="/product">产品详情</Link>
            </button>
            {/* <button className="p-4 rounded-lg ring-1 ring-black"> */}
            <button className="p-4 rounded-lg ring-2 ring-green transition duration-300 ease-in-out hover:shadow-outline">
              <Link href="https://item.taobao.com/item.htm?ft=t&id=771448479530">立即购买</Link>
            </button>
          </div>
        </div>
      </motion.div>
    // </AnimatePresence>
  );
};

export default Homepage;
