"use client"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion"
import { motion } from "framer-motion";
import AchievementsSection from "@/components/AchievementsSection";
// import dynamic from "next/dynamic";

import ModelViewer from "@/components/box_3d";

const Homepage = () => {
  return (
    // <AnimatePresence>
      <motion.div
        key="home" 
        className="w-full h-full flex flex-col lg:flex-row"
        initial={{ opacity: 0, y:'-200vh' }}
        animate={{ opacity: 1, y:'0' }}
        transition={{ duration: 1 }}
        // exit={{ opacity: 0, duration: 2, y:'-120vh' }}
      >
        {/* IMAGE CONTAINER */}
        <div className="w-full h-2/5 md:w-3/5 md:h-full lg:w-1/2 flex flex-col items-center justify-around">
          <div className="relative w-4/5 h-4/5 md:w-2/3 md:h-2/3">
            {/* <Image 
              src="/BOX4.25.1.png"
              alt="" 
              layout="fill"
              objectFit="contain" // 或者 "cover" 根据你的需求
            /> */}
            <div className="absolute top-0 left-0 m-4">
              {/* 使用img元素显示自定义图标 */}
              <img src="/mouse.png" alt="3D Control" width="40" height="40" />
            </div>
            <ModelViewer
              // scale = initialScale,
              position = {[0,1,0]}
              rotation = {[0.5, 0, -0.2]}
            />
          </div>
        </div>

        {/*TEXT CONTAINER */}
        <div className="w-full h-1/2 md:w-2/5 md:h-full lg:w-1/2 flex flex-col justify-center gap-0 md:gap-16">
          <div className="flex flex-col justify-between gap-8 md:gap-16">
            {/* {Title} */}
            <h1 className="text-2xl md:text-4xl 2xl:text-6xl font-bold px-10 ">
              {/* 企业邮箱全新解决方案 */}
              <TypeAnimation
                sequence={[
                  '企业邮箱全新解决方案', 10000,
                  '', 1000,
                  '企业邮箱全新解决方案', 10000,
                  '', 1000
                ]}
                wrapper="span"
                speed={10}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
                cursor={false}
              />
            </h1>
            {/* DESC */}
            <p className="md:text-l 2xl:text-xl px-10 ">
              {/* 轻松搭建企业邮箱，无限容量、无限账户、无限域名 */}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  '轻松搭建企业邮箱，无限账户、无限扩容、灵活高效',
                  10000, // wait 1s before replacing "Mice" with "Hamsters"
                  '',
                  1000,
                  '轻松搭建企业邮箱，无限账户、无限扩容、灵活高效',
                  10000,
                  '',
                  1000
                ]}
                wrapper="span"
                speed={10}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
                cursor={false}
              />
            </p>
            {/* BUTTONS */}
            <div className="w-full flex gap-12  px-10">
              <button className="p-4 rounded-lg ring-1 ring-green bg-black text-white transition duration-300 ease-in-out hover:shadow-outline"
                whileHover={{
                  cursor: 'pointer', // This does not apply here as Framer Motion does not handle 'cursor' in animation props
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/product">产品详情</Link>
              </button>
              {/* <button className="p-4 rounded-lg ring-1 ring-black"> */}
              <button className="p-4 rounded-lg ring-2 ring-green transition duration-300 ease-in-out hover:shadow-outline"
                whileHover={{
                  cursor: 'pointer', // This does not apply here as Framer Motion does not handle 'cursor' in animation props
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="https://item.taobao.com/item.htm?ft=t&id=771448479530">立即购买</Link>
              </button>
            </div>
          </div>
          <AchievementsSection />
        </div>
      </motion.div>
    // </AnimatePresence>
  );
};

export default Homepage;
