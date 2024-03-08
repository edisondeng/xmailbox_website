"use client"
import { AnimatePresence } from "framer-motion";
// import {usePathname} from "next/navigation"
import Navbar from "@/components/navbar";

const TransitionProvider = ({children}) =>{
    // const pathName = usePathname();
    return (
        <AnimatePresence>
            <div className="lg:w-screen lg:h-screen bg-gradient-to-b from-blue-50 to-blue-300">
                <div className="h-16">
                    <Navbar />
                </div>
                <div className="w-full h-[calc(100vh-4rem)] z-40">
                    {children}
                </div>
            </div>
        </AnimatePresence>
    );
};

export default TransitionProvider;
