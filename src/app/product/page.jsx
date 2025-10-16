
"use client"

import React, { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

import FeatureCard from "./featurecard.jsx"
import Feature_detail from "./featuredetail.jsx"

import settings from "@/components/constants.jsx";

const easyMgnIcon = "/management.ok.png";
const safeIcon = "/safe.ok.png";
const storageIcon = "/storage.ok.png";
const flexibleIcon = "/flexible_efficient.ok.png";
const saveMoneyIcon = "/save.money.ok.png";
const cooperateIcon = "/cooperate.ok.png";




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
  const { t, i18n } = useTranslation('product');
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  // const isInView = useInView(ref, { once: true });
  const [activeFeature, setActiveFeature] = useState(-1);

  const [clickedPos, setClickedPos] = useState(null);

  // Dynamic features based on current language
  const features = [
    [1, t('features.unlimitedAccounts.title'), t('features.unlimitedAccounts.description'), easyMgnIcon, t('features.unlimitedAccounts.detail')],
    [2, t('features.unlimitedStorage.title'), t('features.unlimitedStorage.description'), storageIcon, t('features.unlimitedStorage.detail')],
    [3, t('features.flexible.title'), t('features.flexible.description'), flexibleIcon, t('features.flexible.detail')],
    [4, t('features.costEffective.title'), t('features.costEffective.description'), saveMoneyIcon, t('features.costEffective.detail')],
    [5, t('features.secure.title'), t('features.secure.description'), safeIcon, t('features.secure.detail')],
    [6, t('features.collaboration.title'), t('features.collaboration.description'), cooperateIcon, t('features.collaboration.detail')],
  ];

  // Detailed descriptions for modal view
  const feature_detail_desc = [
    t('features.unlimitedAccounts.detail'),
    t('features.unlimitedStorage.detail'),
    t('features.flexible.detail'),
    t('features.costEffective.detail'),
    t('features.secure.detail'),
    t('features.collaboration.detail'),
  ];

  // const cardVariants = {
  //   initial: { y: 50, opacity: 0 },
  //   animate: { y: 0, opacity: 1 },
  // };

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
      key={`product-${i18n.language}`}
      className="h-full w-full flex flex-row lg:flex-row px-4 items-cetner justify-center wavy-background"
      // className="flex flex-col md:flex-row items-center justify-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >

    {/* TEXT CONTAINER */}
    {/* <div className="h-1/2 lg:h-full lg:w-full flex flex-col gap-8 items-cetner justify-center"> */}
    <div className="mt-4 xl:p-24 2xl=48 lg:mt-0 h-1/2 lg:h-full w-full flex flex-col gap-2 2xl:gap-8 items-center lg:justify-center">
      {/* {Title} */}
      <h1 className="text-2xl 2xl:text-4xl font-bold">
        {t('heroTitle')}
      </h1>
      {/* DESC */}
      <p className="md:text-xl">
        {t('heroSubtitle')}
      </p>

      <ul className="grid md:grid-cols-3 w-full 2xl:w-3/4 gap-8 2xl:gap-16">
        {features.map((feature, index) => (
          <motion.li
            className="flex flex-row items-center justify-center"
            key={index}
            // variants={cardVariants}
            // initial="initial"
            // animate={isInView ? "animate" : "initial"}
            initial={{y:-20}}
            animate = {{y:0, opacity: 1}}
            transition={{ 
              y:{duration: 1, delay: index * 0.2 },
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
          <Link href={settings.taobao}>{t('buyNow')}</Link>
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
              // description={"XMAILBOX 不限邮箱数量、不限域名绑定数量、不限别名邮箱数量。企业管理员可以根据需要随意增删邮箱。"}
              description={feature_detail_desc[0]}
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

                {t('videoUnsupported')}
              </video>
            </Feature_detail>
          </AnimatedFeature>
        }
        {activeFeature===1 && 
          <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}>
            <Feature_detail onClose={()=>setActiveFeature(-1)}
              num={features[1][0]} 
              title={features[1][1]}
              // description={"XMAILBOX 邮箱盒子内置10G存储空间，同时支持SSD硬盘拓展，用户可以自行插入一块SSD硬盘扩容，真正实现无限容量。"}
              description={feature_detail_desc[1]}
              icon={features[1][3]}
              next={features[2][1]}
              previous={features[0][1]}
              onNextClicked={()=>{
                console.log("activeFeature=", activeFeature);
                setActiveFeature((activeFeature+1)%6);
              }}
              onPreviousClicked={()=>setActiveFeature((activeFeature-1)<0?5:(activeFeature-1))}
            >
              <div className="w-full h-full">
                <Image alt="" className="rounded-lg shadow-xl" src="/unlimited_storage1.jpg" width={800} height={600}/>
              </div>
            </Feature_detail>
          </AnimatedFeature>
        }
        {activeFeature===2 && 
          <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}>
            <Feature_detail onClose={()=>setActiveFeature(-1)}
              num={features[2][0]} 
              title={features[2][1]}
              // description={"XMAILBOX 邮箱盒子支持SMTP协议、IMAPs、POP3s等多种标准邮件协议。用户可以使用WebMail、 PC邮件客户端、手机邮件客户端随时随地访问自己信箱。"}
              // description={"XMAILBOX 邮箱盒子不仅仅是一个邮箱服务，它是您全方位通讯解决方案的核心。我们深知在不同设备上随时随地访问电子邮件的重要性，因此，XMAILBOX 支持SMTP协议、IMAPs、POP3s等众多标准邮件协议，确保您无论使用WebMail、PC邮件客户端还是手机邮件客户端，都能体验到流畅、可靠的邮件接收和发送服务。立即加入XMAILBOX，享受极致的邮件管理自由。无论您身处何地，无论使用何种设备，XMAILBOX 为您提供强大的兼容性和灵活性，让您的每一次沟通都无比顺畅。选择XMAILBOX，让我们一起重塑邮件通讯的未来。"}
              description={feature_detail_desc[2]}
              icon={features[2][3]} 
              next={features[3][1]}
              previous={features[1][1]}
              onNextClicked={()=>{
                console.log("activeFeature=", activeFeature);
                setActiveFeature((activeFeature+1)%6);
              }}
              onPreviousClicked={()=>setActiveFeature((activeFeature-1)<0?5:(activeFeature-1))}
            >
              <div className="w-full h-full flex items-center">
                <Image alt="" className="rounded-lg shadow-xl" src="/flexible.png" width={800} height={600}/>
              </div>
            </Feature_detail>
          </AnimatedFeature>
        }
        {activeFeature===3 &&
          <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}>
            <Feature_detail onClose={()=>setActiveFeature(-1)}
              num={features[3][0]} 
              title={features[3][1]}
              // description={"XMAILBOX 邮箱盒子支持SMTP协议、IMAPs、POP3s等多种标准邮件协议。用户可以使用WebMail、 PC邮件客户端、手机邮件客户端随时随地访问自己信箱。"}              
              description={feature_detail_desc[3]}
              icon={features[3][3]} 
              next={features[4][1]}
              previous={features[2][1]}
              onNextClicked={()=>{
                console.log("activeFeature=", activeFeature);
                setActiveFeature((activeFeature+1)%6);
              }}
              onPreviousClicked={()=>setActiveFeature((activeFeature-1)<0?5:(activeFeature-1))}            
            >
              <div className="w-full h-full flex items-center">
                <Image alt="" className="rounded-lg shadow-xl" src="/price.png" width={800} height={600}/>
              </div>              
            </Feature_detail>
          </AnimatedFeature>
        }

        {activeFeature===4 &&
          <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}>
            <Feature_detail onClose={()=>setActiveFeature(-1)}
              num={features[4][0]} 
              title={features[4][1]}
              // description={"相比云邮箱，每年"}
              description={feature_detail_desc[4]}
              icon={features[4][3]} 
              next={features[5][1]}
              previous={features[3][1]}
              onNextClicked={()=>{
                console.log("activeFeature=", activeFeature);
                setActiveFeature((activeFeature+1)%6);
              }}
              onPreviousClicked={()=>setActiveFeature((activeFeature-1)<0?5:(activeFeature-1))}                 
            >
              <div className="w-full h-full flex items-center">
                <Image alt="" className="rounded-lg shadow-xl" src="/save.jpg" width={800} height={600}/>
              </div>  
            </Feature_detail>
          </AnimatedFeature>
        }

        {activeFeature===5 &&
          <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}>
            <Feature_detail onClose={()=>setActiveFeature(-1)}
              num={features[5][0]} 
              title={features[5][1]}
              description={feature_detail_desc[5]}
              icon={features[5][3]} 
              next={features[0][1]}
              previous={features[4][1]}
              onNextClicked={()=>{
                console.log("activeFeature=", activeFeature);
                setActiveFeature((activeFeature+1)%6);
              }}
              onPreviousClicked={()=>setActiveFeature((activeFeature-1)<0?5:(activeFeature-1))}                 
            >
              <div className="w-full h-full flex items-center">
                <Image alt="" className="rounded-lg shadow-xl" src="/feature_6.jpg" width={800} height={600}/>
              </div>  
            </Feature_detail>
          </AnimatedFeature>
        }

      </AnimatePresence>
    </div>
  </motion.div>
  );
}

export default ProductPage;
