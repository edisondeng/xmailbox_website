"use client"
import Link from "next/link"
import Image from "next/image"
// import {useState} from "react";

import settings from "./constants.jsx";

import NavLink from "./navLink";

const links = [
    {url:"/", title:"首页"},
    {url:"/product", title:"产品详情"},
    {url:"/help", title:"视频教程"},
    // {url:"/contact", title:"联系我们"},
    {url:settings.taobao, title:"立即购买"},
    // {url:"/contact", title:"Contact"},
]

const Navbar = () => {
    // const [open, setOpen] = useState(false);

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-sl sticky">
            <div className="hidden md:flex gap-4 w-1/3 justify-left">
                {links.map((link)=>(
                    <NavLink link={link} key={link.title}/>
                ))}
            </div>

            {/* LOGO */}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                {/* <Link href="/" className="flex items-center justify-center text-sm bg-black rounded-md p-1 font-semibold">
                    <span className="text-white mr-1">Lama</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center">.dev</span>
                </Link> */}
                <Link href="/" >
                    <Image src="/xmailbox.logo.black.png" width="200" height="20" alt="" />
                </Link>
            </div>


            <div className="hidden md:flex gap-4 w-1/3 justify-center">
                <Link href="/"><Image src="/github.png" alt="" width={24} height={24} /></Link>
                <Link href="/"><Image src="/dribbble.png" alt="" width={24} height={24} /></Link>
                <Link href="/"><Image src="/facebook.png" alt="" width={24} height={24} /></Link>
                <Link href="/"><Image src="/instagram.png" alt="" width={24} height={24} /></Link>
                <Link href="/"><Image src="/linkedin.png" alt="" width={24} height={24} /></Link>
                <Link href="/"><Image src="/pinterest.png" alt="" width={24} height={24} /></Link>
            </div>

            {/* REPONSIVE MENU */}
            {/* <div className="md:hidden"> */}
                {/* MENU BUTTON */}
                {/* <button className="w-10 h-8 flex flex-col justify-between z-50 relative"
                    onClick={()=>setOpen((prev)=>!prev)}
                >
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                </button> */}
            {/* </div> */}

            {/* MENU LIST */}
            {/* {open && 
            <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
                {links.map((link)=>(
                    <Link href={link.url} key={link.title}>
                        {link.title}
                    </Link>
                ))}
            </div>} */}

        </div>
    )
}

export default Navbar;
