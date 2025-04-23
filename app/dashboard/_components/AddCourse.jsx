"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AddCourse = () => {
  // getting username after login with help of useUser function
  const { user } = useUser(); // clerk gives direct acces or authorized user
  return (
    <div className=" flex items-center justify-between">
      <div>
        <h2 className=" text-3xl">
          Hello,
          <span className=" font-bold">{user?.fullName}</span>{" "}
        </h2>
        <p className=" text-sm text-gray-500">
          Create new course with AI, Share with frineds and earn with it.
        </p>
      </div>
      <Link href={"/create-course"}>
        <Button>+ Create AI Course</Button>
      </Link>
    </div>
  );
};

export default AddCourse;
