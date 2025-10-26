"use client"

import React, { useState } from "react";
// import Image from "next/image"
// import Link from "next/link"
// import { TypeAnimation } from "react-type-animation";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useMounted } from "@/lib/useMounted";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// import Typography from '@mui/material/Typography';

import VideoCard from "./videocard.jsx"
import Video_detail from "./videodetail.jsx"

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
  const { t, i18n } = useTranslation('help');
  const mounted = useMounted();
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  // const isInView = useInView(ref, { once: true });
  const [activeFeature, setActiveFeature] = useState(-1);

  const [clickedPos, setClickedPos] = useState(null);

  // Dynamic video data based on current language
  const videoData = [
    {
      id: 1,
      title: t('title'),
      description: t('description'),
      image: "/videos/01.openbox.jpg",
      video: "/videos/01.openbox.mp4",
    },
    {
      id: 2,
      title: t('networkConfig.title'),
      description: t('networkConfig.description'),
      image: "/videos/02.ip_settings.jpg",
      video: "/videos/02.ip_settings.mp4",
    },
    {
      id: 3,
      title: t('domainEmail.title'),
      description: t('domainEmail.description'),
      image: "/videos/03.domain_email.jpg",
      video: "/videos/03.domain_email.mp4",
    },
    {
      id: 4,
      title: t('pcClient.title'),
      description: t('pcClient.description'),
      image: "/videos/04.config_pc_client.jpg",
      video: "/videos/04.config_pc_client.mp4",
      // tag: ["All", "Mobile"],
      // gitUrl: "/",
      // previewUrl: "/",
    },
    {
      id: 5,
      title: t('mobileClient.title'),
      description: t('mobileClient.description'),
      image: "/videos/05.config_mobile_client.jpg",
      video: "/videos/05.config_mobile_client.2.mp4",
    },
    {
      id: 6,
      title: t('fileSharing.title'),
      description: t('fileSharing.description'),
      image: "/videos/06.SAMBA.jpg",
      video: "/videos/06.SAMBA.mp4",
    },
    {
      id: 7,
      title: t('reset.title'),
      description: t('reset.description'),
      image: "/videos/07.reset_machine.jpg",
      video: "/videos/07.reset_machine.mp4",
    },
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
      key={`help-${i18n.language}`}
      className="h-full w-full px-8 wavy-background flex items-center justify-center"
      // className="flex flex-col md:flex-row items-center justify-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >

    {/* TEXT CONTAINER */}
    <div className="mt-10 lg:mt-0 w-full h-full flex flex-col gap-1 items-center justify-center">
      {/* <ul className="grid md:grid-cols-3 gap-1 md:gap-1"> */}
      <ul className="flex flex-row flex-wrap md:gap-6 items-center justify-center">
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
    </div>
  </motion.div>
  );
}

export default ProductPage;