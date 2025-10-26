"use client"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion"
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import AchievementsSection from "@/components/AchievementsSection";
// import dynamic from "next/dynamic";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

import ModelViewer from "@/components/box_3d";

const Homepage = () => {
  const { t, i18n } = useTranslation('home');

  return (
    <>
    {/* <AnimatePresence> */}
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
                key={`title-${i18n.language}`}
                sequence={[
                  t('heroTitle'), 10000,
                  '', 1000,
                  t('heroTitle'), 10000,
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
                key={`subtitle-${i18n.language}`}
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  t('heroSubtitle'),
                  10000, // wait 1s before replacing "Mice" with "Hamsters"
                  '',
                  1000,
                  t('heroSubtitle'),
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
                <Link href="/product">{t('productDetails')}</Link>
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
                <Link href="https://item.taobao.com/item.htm?ft=t&id=771448479530">{t('buyNow')}</Link>
              </button>
            </div>
          </div>
          <AchievementsSection />
        </div>
        <footer className="w-full absolute bottom-0">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm">

              {/* 左侧：Logo + 公司全称 */}
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <a
                    href="https://www.xtell.cn/"
                    className="flex items-center gap-1 hover:text-green-500 transition-colors duration-200 font-medium"
                  >
                    <img src="/xtell_logo_en.svg" alt="XTell Logo" className="h-8 w-auto" />
                  </a>
                  <a
                    href="https://www.xtell.cn/"
                    className="flex items-center gap-1 hover:text-green-500 transition-colors duration-200 font-medium"
                  >
                    <div className="text-gray-600">
                      © 2025 {true ? t('company') : ''}
                    </div>
                  </a>
                </div>
              </div>

              {/* 右侧*/}
              <div className="flex flex-col items-center gap-4">
                <div className="text-ls text-gray-600">
                  {true ? t('supportEmail') : ''}
                </div>
                <a href="https://beian.miit.gov.cn" className="text-xs text-gray-600">
                  【粤ICP备16055860号】
                </a>
              </div>
            </div>
          </div>
        </footer>
      </motion.div>
      {/* </AnimatePresence> */}
    </>
  );
};

export default Homepage;
