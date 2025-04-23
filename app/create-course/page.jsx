import React from "react";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { HiLightBulb } from "react-icons/hi";
import { HiClipboardDocumentCheck } from "react-icons/hi2";

const CreateCourse = () => {
  const StepperOptions = [
    {
      id: 1,
      name: "Category",
      icon: <HiMiniSquares2X2 />,
    },
    {
      id: 2,
      name: "Topic & Desc",
      icon: <HiLightBulb />,
    },
    {
      id: 3,
      name: "Options",
      icon: <HiClipboardDocumentCheck />,
    },
  ];

  return (
    <div>
      {/* Stepper */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-purple-400 font-medium">Create Course</h2>
        <div className="flex">
          {StepperOptions.map((item, index) => (
            <div className="flex items-center">
              <div className="flex flex-col items-center w-[50px] md:w-[100px] ">
                <div className="bg-gray-200 p-3 rounded-full text-white">
                  {item.icon}
                </div>
                <h2 className="hidden md:block md:text-sm ">{item.name}</h2>
              </div>
              <div className="h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300">

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Components */}

      {/* Next Previous Button */}
    </div>
  );
};

export default CreateCourse;
