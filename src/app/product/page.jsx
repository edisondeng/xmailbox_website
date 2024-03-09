
"use client"

import React, { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion";


import FeatureCard from "./featurecard.jsx"
import Feature_detail from "./featuredetail.jsx"

import settings from "@/components/constants.jsx";

const easyMgnIcon = "/management.ok.png";
const safeIcon = "/safe.ok.png";
const storageIcon = "/storage.ok.png";
const flexibleIcon = "/flexible_efficient.ok.png";
const saveMoneyIcon = "/save.money.ok.png";
const cooperateIcon = "/cooperate.ok.png";


const features = [
  [1, "无限账户", "邮箱盒子支持无限邮箱、无限别名。实现轻松管理多个域名的邮箱账号。", easyMgnIcon],
  [2, "无限扩容", "邮箱盒子支持SSD硬盘扩容，用户可以自行插入一个SSD硬盘，彻底打破云邮箱服务容量限制。", storageIcon],
  [3, "灵活高效", "支持WebMail、PC端、手机端，不论在公司内还是在公司外都可以直接访问自己的邮箱。", flexibleIcon],
  [4, "高性价比", "即刻省去高昂的年费，不再需要为额外的域名、额外的邮件账户数、超额邮箱空间支付费用。", saveMoneyIcon],
  [5, "安全可靠", "所有邮件数据都保存在邮箱盒子里，邮箱盒子存放在您自己办公室里，确保核心数据不会外泄。", safeIcon],
  [6, "无缝协作", "邮箱盒子同时提供文件共享功能，便于局域网PC之间传递与共享文件，从而实现无缝协作。", cooperateIcon],
]

const feature_detail_desc=[
  "XMAILBOX 邮箱盒子重新定义邮箱管理的自由和灵活性。我们特别设计了无限制的服务特性：不设限的邮箱数量、域名绑定，以及别名邮箱数量，全面满足您的所有需求。企业管理员更是拥有前所未有的灵活性，可以根据业务需求或团队变动，随时增加或删除邮箱账户，确保通信渠道的及时更新与优化。立刻加入XMAILBOX，让我们助您打造最具弹性的邮件通信环境。",
  "XMAILBOX 邮箱盒子将存储革命带入您的手中，通过支持SSD硬盘扩容的先进功能，让您轻松突破传统云邮箱服务的存储界限。现在，您可以直接插入一个SSD硬盘，按需扩展存储空间，无需担心文件大小或邮箱容量的限制。这不仅意味着更快的数据访问速度和更高的存储效率，也意味着您完全掌控自己的数据和资源。",
  "无论您身处何地，不论是在公司内部还是在旅途中，XMAILBOX 邮箱盒子都确保您能够无缝接入自己的邮箱。我们全面支持WebMail、PC邮件客户端、以及手机邮件客户端，我们支持SMTP、IMAPs、POP3s等各种标准邮件协议。XMAILBOX 让每一次邮箱访问都变得异常轻松。",
  "XMAILBOX 邮箱盒子让您从年费的负担中解放出来，彻底摆脱了对额外域名、邮件账户以及超额邮箱空间的额外支付。选择XMAILBOX，意味着您将享受到超高的经济效益，一次性投资，终身受益。立即加入XMAILBOX，开启您高效、节约的邮箱管理新篇章。",
  "所有邮件数据安全地存储在您的办公室里的 XMAILBOX 邮箱盒子中，确保您的宝贵信息永远在您的控制之下。您拥有对数据的完全所有权和控制权，无需担心外部干扰或数据泄露的风险。同时 XMAILBOX 引入了业界领先的安全协议——https, IMAPs, POP3s, 以及 SMTP SASL，为您的邮件传输过程提供银行级别的安全保护，有效防止黑客攻击和数据窃取，确保每一封邮件的安全和私密性。",
  "XMAILBOX 邮箱盒子打破传统边界，加入了创新的文件共享功能。使得局域网内的PC间文件传输与共享变得轻而易举，无论是文档、表格还是演示文稿，都可以在团队成员之间迅速而安全地流转。借助XMAILBOX，您的团队可以体验到真正意义上的无缝协作，都能即刻同步工作进度，加速决策流程，确保每个项目都能够高效推进。选择XMAILBOX，开启智能高效的工作方式，让每一次合作都充满无限可能。"
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
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  // const isInView = useInView(ref, { once: true });
  const [activeFeature, setActiveFeature] = useState(-1);

  const [clickedPos, setClickedPos] = useState(null);

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
      key="product" 
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
        轻松搭建企业邮箱
      </h1>
      {/* DESC */}
      <p className="md:text-xl">
        中小企业最佳选择
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
          <Link href={settings.taobao}>立即购买</Link>
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
