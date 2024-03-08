"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
// import AnimatedNumbers from 'react-animated-numbers';
const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);


const achievementsList = [
  {
    metric: "企业数",
    value: "1000",
    postfix: "+",
  },
  {
    metric: "域名数",
    value: "1100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "邮箱数",
    value: "10000",
  },
  // {
  //   metric: "Awards",
  //   value: "7",
  // },
  // {
  //   metric: "Years",
  //   value: "5",
  // },
];


function DelayedAnimationComponent({ achievement, locale, className, configs }) {
  const [animateNumber, setAnimateNumber] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateNumber(parseInt(achievement.value));
    }, 1000); // 3000毫秒后开始动画

    return () => clearTimeout(timer);
  }, [achievement.value]);

  return (
    <AnimatedNumbers
      includeComma
      animateToNumber={animateNumber}
      locale={locale}
      className={className}
      configs={configs}
    />
  );
}

const AchievementsSection = () => {
  return (
    <div className="text-black py-2 px-4 md:px-0 xl:gap-8">
      <div className="rounded-md py-2 px-2 md:px-0 flex flex-row justify-around">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center my-4 sm:my-0"
            >
              <h2 className="text-2xl font-bold flex flex-row">
                {achievement.prefix}
                <DelayedAnimationComponent
                // <AnimatedNumbers
                  includeComma
                  // animateToNumber={parseInt(achievement.value)}
                  achievement={achievement}
                  locale="en-US"
                  className="text-2xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#000000] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
