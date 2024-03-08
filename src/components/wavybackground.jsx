import { motion } from 'framer-motion';

const WavyBackground = () => {
  // 定义动画变体
  const variants = {
    animate: {
      translateY: [-20, 20, -20], // 上下移动10单位
      transition: {
        duration: 5, // 动画持续时间
        ease: "easeInOut", // 缓动函数
        repeat: Infinity, // 重复次数，Infinity为无限次
      },
    },
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 to-blue-300"
      variants={variants}
      initial="animate"
      animate="animate"
      style={{ 
        backgroundImage: "url('/BOX.bg.1.png')",
        backgroundSize: 'cover', // 确保背景图片覆盖整个div
        backgroundPosition: 'center', // 使背景图片居中
      }}
    ></motion.div>
  );
};

export default WavyBackground;
