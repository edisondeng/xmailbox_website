
"use client"

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation";
import { AnimatePresence, easeInOut, motion, useInView } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Typography from '@mui/material/Typography';


const easyMgnIcon = "/management.ok.png";
const safeIcon = "/safe.ok.png";
const storageIcon = "/storage.ok.png";
const flexibleIcon = "/flexible_efficient.ok.png";
const saveMoneyIcon = "/save.money.ok.png";
const cooperateIcon = "/cooperate.ok.png";


function FeatureCard({ num, title, description, icon }) {
  return (
    <div 
      // className="border border-gray-200 bg-blue-100 rounded-lg shadow-md p-3 m-2"
      className="border border-gray-200 bg-blue-50 rounded-lg shadow-md p-3 m-3 sd:w-4/5 lg:w-3/4 lg:h-[250px]"
      // onClick = {onClicked}
    >
      <div className="flex flex-row lg:flex-col gap-4">
        <div className="flex justify-between items-center">
          <div
            className="flex justify-center items-center w-12 h-12 bg-blue-500 rounded-lg text-center text-white font-bold mb-2"
          >
            {num}
          </div>
          <Image width={50} height={50} src={icon} alt="" />
        </div>

        <h3 className="text-lg font-bold mb-2">
          {title}
        </h3>
      </div>
      <p className="text-base font-normal">
        {description}
      </p>
      <p className="text-base font-normal mt-3 mr-3 text-blue-600 flex flex-row justify-end">
        了解更多
      </p>
    </div>
  );
}

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
        <div className="w-3/5 h-4/5 flex flex-col rounded-lg bg-gradient-to-b from-blue-50 to-blue-100 p-3 mx-auto shadow-2xl">
          <div className="flex flex-row items-center gap-10 justify-between">
            <div className="flex flex-row gap-10 items-center">
              <div className="flex justify-between items-center">
                <div
                  className="flex justify-center items-center w-16 h-16 bg-blue-500 rounded-lg text-center text-white font-bold mb-2"
                >
                  {num}
                </div>
                {/* <img className="w-15 h-15" src={icon} alt="" /> */}
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {title}
              </h3>
            </div>
            <Image width={50} height={50} src={icon} alt="" />
          </div>

          <div className="flex flex-row h-full mt-6 gap-10 items-start justify-aroun">
            {/* <p className="text-lg font-normal">               */}
            <div className="md:text-xl mt-6 px-10 w-1/3 h-full flex flex-col items-start">
              <TypeAnimation
                className="h-2/4"
                sequence={[
                  description,
                  10000,
                  '',
                  1000,
                  description,
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
              {/* <Image width={50} height={50} src={"next"} alt="" /> */}
            </div>
            <div className="w-2/3">{children}</div>
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

      <div 
        className="absolute top-0 right-0 m-2 cursor-pointer"
        onClick={onClose}
        style={{ width: '30px', height: '30px', backgroundColor: 'white' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

    </div>
  );
}

const features = [
  [1, "无限账户", "邮箱盒子支持无限邮箱、无限别名。实现轻松管理多个域名的邮箱账号。", easyMgnIcon],
  [2, "无限扩容", "邮箱盒子支持SSD硬盘扩容，用户可以自行插入一个SSD硬盘，彻底打破云邮箱服务容量限制。", storageIcon],
  [3, "灵活高效", "支持WebMail、PC端、手机端，不论在公司内还是在公司外都可以直接访问自己的邮箱。", flexibleIcon],
  [4, "高性价比", "即刻省去高昂的年费，不再需要为额外的域名、额外的邮件账户数、超额邮箱空间支付费用。", saveMoneyIcon],
  [5, "安全可靠", "所有邮件数据都保存在邮箱盒子里，邮箱盒子存放在您自己办公室里，确保核心数据不会外泄。", safeIcon],
  [6, "无缝协作", "邮箱盒子同时提供文件共享功能，便于局域网PC之间传递与共享文件，从而实现无缝协作。", cooperateIcon],
]


function AnimatedFeature({clickedPos, children, onClose}){
  return (
    <motion.div 
      key="feature_1"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-70" // Additional classes for modal behavior
      onClick={onClose}

      initial={{
        x: clickedPos.left,// + window.scrollX,
        y: clickedPos.top,// + window.scrollY,
        width: clickedPos.width,
        height: clickedPos.height,
        opacity: 0
      }}
      animate={{
        x: 0,
        y: 0,
        width: "100vw",
        height: "100vh",
        opacity: 1
      }}
      exit={{
        x: clickedPos.left, // + window.scrollX,
        y: clickedPos.top, // + window.scrollY,
        width: clickedPos.width,
        height: clickedPos.height,
        opacity: 0
      }}

      transition={{duration:1, ease:"easeInOut"}}
    >
      {children}
    </motion.div>
  );
}




function ProductPage() {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  const isInView = useInView(ref, { once: true });
  const [activeFeature, setActiveFeature] = useState(-1);

  const [clickedPos, setClickedPos] = useState(null);


  // const videoRef = useRef(null); // 创建ref来引用视频元素

  // useEffect(() => {
  //   // 页面加载时设置视频播放速度为0.5倍速
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 0.5;
  //   }
  // }, []); // 空依赖数组表示这个effect只在组件挂载时运行一次


  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const onFeatureClicked = function(index, event){
    // console.log(event);
    const rect = event.currentTarget.getBoundingClientRect();
    console.log(rect);
    setClickedPos({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    });

    setActiveFeature(index);
  }

  return (
    <motion.div
      key="product" 
      className="h-full w-full flex flex-row lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48 items-cetner justify-center"
      // className="flex flex-col md:flex-row items-center justify-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >

    {/* TEXT CONTAINER */}
    {/* <div className="h-1/2 lg:h-full lg:w-full flex flex-col gap-8 items-cetner justify-center"> */}
    <div className="mt-10 lg:mt-0 h-1/2 lg:h-full lg:w-full flex flex-col gap-8 items-center lg:justify-center">
      {/* {Title} */}
      <h1 className="text-2xl md:text-4xl font-bold">
        轻松搭建企业邮箱
      </h1>
      {/* DESC */}
      <p className="md:text-xl">
        中小企业最佳选择
      </p>

      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            // variants={cardVariants}
            // initial="initial"
            // animate={isInView ? "animate" : "initial"}
            initial={{y:-20}}
            animate = {{y:0, opacity: 1}}
            transition={{ 
              y:{duration: 0.3, delay: index * 0.1 },
              scale: { duration: 0.2 }
            }}
            whileHover={{
              cursor: 'pointer', // This does not apply here as Framer Motion does not handle 'cursor' in animation props
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.95 }}
            onClick = {(e)=>{
              onFeatureClicked(index,e);
            }}
          >
            <FeatureCard
              num={feature[0]}
              title={feature[1]}
              description={feature[2]}
              icon={feature[3]}
            />
          </motion.li>
        ))}
      </ul>

      {/* BUTTONS */}
      <div className="w-full flex gap-12 p-3 items-center justify-center">
        <button className="p-4 rounded-lg ring-1 ring-green bg-black text-white transition duration-300 ease-in-out hover:shadow-outline">
          <Link href="/shopnow">立即购买</Link>
        </button>
      </div>

      {/* <div>
      </div> */}

      <AnimatePresence>
        {activeFeature===0 && 
          <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}>
            <Feature_detail onClose={()=>setActiveFeature(-1)} 
              num={features[0][0]} 
              title={features[0][1]}
              description={"XMAILBOX 不限邮箱数量、不限域名绑定数量、不限别名邮箱数量。企业管理员可以根据需要随意增删邮箱。"}
              icon={features[0][3]}
              next={features[1][1]}
              previous={features[5][1]}
              onNextClicked={()=>setActiveFeature((activeFeature+1)%6)}
              onPreviousClicked={()=>setActiveFeature((activeFeature-1)<0?5:(activeFeature-1))}
            >
              <video 
                className="rounded-lg shadow-xl"
                autoPlay
                loop
                onLoadedMetadata={(e) => e.currentTarget.playbackRate = 0.5}
              >
                {/* <source src="/unlimited_account1.mp4" type="video/mp4" /> */}
                <source src="/add_email.mp4" type="video/mp4" />
                
                您的浏览器不支持Video标签。
              </video>
            </Feature_detail>
          </AnimatedFeature>
        }
        {activeFeature===1 && 
          <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}>
            <Feature_detail onClose={()=>setActiveFeature(-1)}
              num={features[1][0]} 
              title={features[1][1]}
              description={"XMAILBOX 邮箱盒子内置10G存储空间，同时支持SSD硬盘拓展，用户可以自行插入一块SSD硬盘扩容，真正实现无限容量。"}
              icon={features[1][3]} 
              next={features[2][1]}
              previous={features[0][1]}
              onNextClicked={()=>{
                console.log("activeFeature=", activeFeature);
                setActiveFeature((activeFeature+1)%6);
              }}
              onPreviousClicked={()=>setActiveFeature((activeFeature-1)<0?5:(activeFeature-1))}
            >
              <Image className="rounded-lg shadow-xl"
                src="/unlimited_storage.jpg" width={600} height={600}/>
            </Feature_detail>
          </AnimatedFeature>}
      {/*  {activeFeature===2 && <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}><Feature_1 onClose={()=>setActiveFeature(-1)}/></AnimatedFeature>}
        {activeFeature===3 && <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}><Feature_1 onClose={()=>setActiveFeature(-1)}/></AnimatedFeature>}
        {activeFeature===4 && <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}><Feature_1 onClose={()=>setActiveFeature(-1)}/></AnimatedFeature>}
        {activeFeature===5 && <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}><Feature_1 onClose={()=>setActiveFeature(-1)}/></AnimatedFeature>} */}
      </AnimatePresence>
    </div>
  </motion.div>
  );
}

export default ProductPage;
