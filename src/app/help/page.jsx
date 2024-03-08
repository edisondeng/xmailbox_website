
"use client"

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation";
import { AnimatePresence, easeInOut, motion, useInView } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Typography from '@mui/material/Typography';

import VideoCard from "./videocard.jsx"
import Video_detail from "./videodetail.jsx"


const videoData = [
  {
    id: 1,
    title: "开箱视频",
    description: "XMAILBOX邮箱盒子随货提供一根TYPE-C电源线、一根网线。",
    image: "/videos/01.openbox.jpg",
    video: "/videos/01.openbox.mp4",
  },
  {
    id: 2,
    title: "网络配置",
    description: "XMAILBOX邮箱盒子出厂默认IP地址为192.168.6.250",
    image: "/videos/02.ip_settings.jpg",
    video: "/videos/02.ip_settings.mp4",
  },
  {
    id: 3,
    title: "域名与信箱",
    description: "XMAILBOX邮箱盒子管理界面网址默认为 https://192.168.6.250/admin/",
    image: "/videos/03.domain_email.jpg",
    video: "/videos/03.domain_email.mp4",
  },
  {
    id: 4,
    title: "配置PC邮件客户端",
    description: "XMAILBOX邮箱盒子支持 PC 邮件客户端，请参考视频教程设置您的 PC 邮件客户端。",
    image: "/videos/04.config_pc_client.jpg",
    video: "/videos/04.config_pc_client.mp4",
    // tag: ["All", "Mobile"],
    // gitUrl: "/",
    // previewUrl: "/",
  },
  {
    id: 5,
    title: "配置手机邮件客户端",
    description: "XMAILBOX邮箱盒子支持手机邮件客户端，请参考视频教程设置您的手机邮件客户端。",
    image: "/videos/05.config_mobile_client.jpg",
    video: "/videos/05.config_mobile_client.2.mp4",
  },
  {
    id: 6,
    title: "WINDOWS文件共享",
    description: "XMAILBOX邮箱盒子具备文件共享功能，请参考视频。",
    image: "/videos/06.SAMBA.jpg",
    video: "/videos/06.SAMBA.mp4",
  },
  {
    id: 7,
    title: "重置邮箱盒子",
    description: "如果你忘记了盒子的IP地址又或者忘记了您设置的管理员用户名与密码，请参考此视频重置。",
    image: "/videos/07.reset_machine.jpg",
    video: "/videos/07.reset_machine.mp4",
  },
];

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
      className="h-full w-full flex flex-row lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48 items-cetner justify-center wavy-background"
      // className="flex flex-col md:flex-row items-center justify-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >

    {/* TEXT CONTAINER */}
    <div className="mt-10 lg:mt-0 h-1/2 lg:h-full lg:w-full flex flex-col gap-1 items-center lg:justify-center">
      {/* <ul className="grid md:grid-cols-3 gap-1 md:gap-1"> */}
      <ul className="flex flex-row md:gap-1">
        {videoData.map((feature, index) => (
          <motion.li
            key={index}
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
            <VideoCard
              num={feature.id}
              title={feature.title}
              imgUrl={feature.image}
              videoUrL={feature.video}
            />
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {videoData.map((videoClip, index) => (
          activeFeature === index ? (
            <AnimatedFeature key={videoClip.id} clickedPos={clickedPos} onClose={() => setActiveFeature(-1)}>
              <Video_detail 
                onClose={() => setActiveFeature(-1)}
                num={videoClip.id} 
                title={videoClip.title}
                description={videoClip.description}
                video={videoClip.video}
              />
            </AnimatedFeature>
          ) : null
        ))}
      </AnimatePresence>
{/* 
      <AnimatePresence>
        {activeFeature===0 && 
          <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}>
            <Video_detail onClose={()=>setActiveFeature(-1)} 
              num={videoData[0].id} 
              title={videoData[0].title}
              video={videoData[0].video}
              next={videoData[1].title}
              previous={videoData[6].title}
              onNextClicked={()=>setActiveFeature((activeFeature+1)%6)}
              onPreviousClicked={()=>setActiveFeature((activeFeature-1)<0?5:(activeFeature-1))}
            >
            </Video_detail>
          </AnimatedFeature>
        }
        {activeFeature===1 && 
          <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}>
            <Video_detail onClose={()=>setActiveFeature(-1)}
              num={features[1][0]} 
              title={features[1][1]}
              // description={"XMAILBOX 邮箱盒子内置10G存储空间，同时支持SSD硬盘拓展，用户可以自行插入一块SSD硬盘扩容，真正实现无限容量。"}
              // description={Video_detail_desc[1]}
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
                <Image className="rounded-lg shadow-xl" src="/unlimited_storage1.jpg" width={800} height={600}/>
              </div>
            </Video_detail>
          </AnimatedFeature>
        }
        {activeFeature===2 && 
          <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}>
            <Video_detail onClose={()=>setActiveFeature(-1)}
              num={features[2][0]} 
              title={features[2][1]}
              description={Video_detail_desc[2]}
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
                <Image className="rounded-lg shadow-xl" src="/flexible.png" width={800} height={600}/>
              </div>
            </Video_detail>
          </AnimatedFeature>
        }
        {activeFeature===3 &&
          <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}>
            <Video_detail onClose={()=>setActiveFeature(-1)}
              num={features[3][0]} 
              title={features[3][1]}
              // description={"XMAILBOX 邮箱盒子支持SMTP协议、IMAPs、POP3s等多种标准邮件协议。用户可以使用WebMail、 PC邮件客户端、手机邮件客户端随时随地访问自己信箱。"}              
              description={Video_detail_desc[3]}
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
                <Image className="rounded-lg shadow-xl" src="/price.png" width={800} height={600}/>
              </div>              
            </Video_detail>
          </AnimatedFeature>
        }

        {activeFeature===4 &&
          <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}>
            <Video_detail onClose={()=>setActiveFeature(-1)}
              num={features[4][0]} 
              title={features[4][1]}
              // description={"相比云邮箱，每年"}
              description={Video_detail_desc[4]}
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
                <Image className="rounded-lg shadow-xl" src="/save.jpg" width={800} height={600}/>
              </div>  
            </Video_detail>
          </AnimatedFeature>
        }

        {activeFeature===5 &&
          <AnimatedFeature clickedPos={clickedPos} onClose={()=>setActiveFeature(-1)}>
            <Video_detail onClose={()=>setActiveFeature(-1)}
              num={features[5][0]} 
              title={features[5][1]}
              description={Video_detail_desc[5]}
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
                <Image className="rounded-lg shadow-xl" src="/feature_6.jpg" width={800} height={600}/>
              </div>  
            </Video_detail>
          </AnimatedFeature>
        }

      </AnimatePresence> */}
    </div>
  </motion.div>
  );
}

export default ProductPage;
