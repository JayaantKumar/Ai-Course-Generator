'use client';

import React from "react";
import Image from "next/image";
import { IoHome, IoShieldCheckmark } from "react-icons/io5";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { BiLogOutCircle } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";


const SideBar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <IoHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <IoShieldCheckmark />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <BiLogOutCircle />,
      path: "/dashboard/logout",
    },
  ];
  const path = usePathname();  //it will tell us about the current path in which we are.

  return (
    <div className=" fixed h-full md:w-64 p-5 shadow-md">
      <Image src={"/file.svg"} width={80} height={100} alt="logo" />
      <hr className=" my-5"/>

      <ul>
  {Menu.map((item) => (
    <Link href={item.path} key={item.id} className="block">
      <div
        className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3xs
        ${item.path === path ? 'bg-gray-100 text-black' : ''}`}
      >
        <div className="text-2xl">{item.icon}</div>
        <h2>{item.name}</h2>
      </div>
    </Link>
  ))}
</ul>
<div className=" absolute bottom-10 w-[80%] ">
    <Progress value={33}/>
    <h2 className=" text-sm my-2">3 Out of 5 Course created</h2>
    <h2 className=" text-xs text-gray-500">Upgrade your plan for unlimeted course generation</h2>
</div>
    </div>
  );
};

export default SideBar;
