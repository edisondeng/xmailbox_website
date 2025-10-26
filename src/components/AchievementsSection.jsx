"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from 'react-i18next';
// import AnimatedNumbers from 'react-animated-numbers';
const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);




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
  const { t, i18n } = useTranslation('home');

  const achievementsList = [
    {
      metric: t('achievements.companies'),
      value: "1000",
      postfix: "+",
    },
    {
      metric: t('achievements.domains'),
      value: "1100",
      postfix: "+",
    },
    {
      prefix: "~",
      metric: t('achievements.mailboxes'),
      value: "10000",
    },
  ];

  return (
    <div key={`achievements-${i18n.language}`} className="text-black py-2 px-4 md:px-0 xl:gap-8">
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
