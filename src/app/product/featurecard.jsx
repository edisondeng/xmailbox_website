import React from "react";
import Image from "next/image"

import { useMounted } from "@/lib/useMounted";

function FeatureCard({ num, title, description, icon }) {
    const mounted = useMounted();
    return (
        <div
            className="flex flex-col gap-0 p-3 2xl:p-3 w-4/5 border border-gray-200 bg-blue-50 rounded-xl shadow-md opacity-80 hover:opacity-100 hover:bg-white h-full"
            // className="border border-gray-200 bg-blue-50 rounded-lg shadow-md p-3 m-3 md:h-[250px] lg:w-3/4 lg:h-[250px] opacity-80 hover:opacity-100 hover:bg-white"
        >
            <div className="flex flex-row 2xl:flex-col gap-2 opacity-100 justify-between">
                <div className="flex flex-row justify-between gap-6 items-center">
                    <div className="flex justify-center items-center w-12 h-12 bg-blue-500 rounded-lg text-center text-white font-bold mb-2">
                        {num}
                    </div>
                    <Image width={50} height={50} src={icon} alt="" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                    {mounted ? title : ''}
                </h3>
            </div>
            <p className="text-base font-normal opacity-100">
                {mounted ? description : ''}
            </p>
            <p className="text-base font-normal mt-3 mr-3 text-blue-600 flex flex-row justify-end opacity-100">
                {mounted ? '了解更多' : ''}
            </p>
        </div>
    );
}

export default FeatureCard;
