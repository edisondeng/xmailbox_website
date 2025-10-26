"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"
import { useMounted } from "@/lib/useMounted";

const NavLink = ({link}) =>{
    const pathName = usePathname();
    const mounted = useMounted();
    // console.log(pathName);
    return (
        <Link className={`rounded p-1 ${pathName===link.url && "bg-black text-white"}`}
            href={link.url}
        >
            {mounted ? link.title : ''}
        </Link>
    )
}

export default NavLink;
