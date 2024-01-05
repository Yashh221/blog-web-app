import { image1 } from "@/assets";
import { Categories } from "@/constants/Categories";
import Image from "next/image";
import React from "react";
type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="mt-10">
      <div className="text-lg">What's Hot</div>
      <div className="text-2xl font-semibold">Most Popular</div>
      <div className="flex flex-col space-y-8 mt-6">
        <div className="flex flex-col space-y-1">
          <div className="max-w-[100px] w-full rounded-full bg-[#7fb88133] text-sm flex flex-row justify-center items-center">
            Culture
          </div>
          <div className="font-semibold text-base ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-sm">
            John Doe&nbsp;-&nbsp;
            <span className="font-sembold">05.01.2024</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="max-w-[100px] w-full rounded-full bg-[#57c4ff31] text-sm flex flex-row justify-center items-center">
            Style
          </div>
          <div className="font-semibold text-base ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-sm">
            John Doe&nbsp;-&nbsp;
            <span className="font-sembold">05.01.2024</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="max-w-[100px] w-full rounded-full bg-[#5e4fff31] text-sm flex flex-row justify-center items-center">
            Food
          </div>
          <div className="font-semibold text-base ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-sm">
            John Doe&nbsp;-&nbsp;
            <span className="font-sembold">05.01.2024</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="max-w-[100px] w-full rounded-full bg-[#ff795736] text-sm flex flex-row justify-center items-center">
            Coding
          </div>
          <div className="font-semibold text-base ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-sm">
            John Doe&nbsp;-&nbsp;
            <span className="font-sembold">05.01.2024</span>
          </div>
        </div>
        <div className="flex flex-col mt-12">
          <div className="text-lg">Discover by topic</div>
          <div className="text-2xl font-semibold">Categories</div>
          <div className="mt-6">
            <div className="flex flex-row flex-wrap gap-4">
              {Categories.map((category, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: category.color }}
                  className="flex justify-center items-center flex-25 py-3 text-base rounded-xl"
                >
                  {category.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-12">
          <div className="text-lg">Choosen by Editor</div>
          <div className="text-2xl font-semibold">Editor's Pick</div>
          <div className="mt-6 flex flex-col space-y-6">
            <div className="flex flex-row gap-4 items-center">
              <Image
                src={image1}
                alt="hero"
                className="w-[110px] h-[90px] rounded-full overflow-hidden"
              />
              <div className="flex flex-col space-y-1">
                <div className="max-w-[100px] w-full rounded-full bg-[#7fb88133] text-sm flex flex-row justify-center items-center">
                  Culture
                </div>
                <div className="font-semibold text-base ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="text-sm">
                  John Doe&nbsp;-&nbsp;
                  <span className="font-sembold">05.01.2024</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <Image
                src={image1}
                alt="hero"
                className="w-[110px] h-[90px] rounded-full overflow-hidden"
              />
              <div className="flex flex-col space-y-1">
                <div className="max-w-[100px] w-full rounded-full bg-[#7fb88133] text-sm flex flex-row justify-center items-center">
                  Culture
                </div>
                <div className="font-semibold text-base ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="text-sm">
                  John Doe&nbsp;-&nbsp;
                  <span className="font-sembold">05.01.2024</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <Image
                src={image1}
                alt="hero"
                className="w-[110px] h-[90px] rounded-full overflow-hidden"
              />
              <div className="flex flex-col space-y-1">
                <div className="max-w-[100px] w-full rounded-full bg-[#7fb88133] text-sm flex flex-row justify-center items-center">
                  Culture
                </div>
                <div className="font-semibold text-base ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="text-sm">
                  John Doe&nbsp;-&nbsp;
                  <span className="font-sembold">05.01.2024</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <Image
                src={image1}
                alt="hero"
                className="w-[110px] h-[90px] rounded-full overflow-hidden"
              />
              <div className="flex flex-col space-y-1">
                <div className="max-w-[100px] w-full rounded-full bg-[#7fb88133] text-sm flex flex-row justify-center items-center">
                  Culture
                </div>
                <div className="font-semibold text-base ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="text-sm">
                  John Doe&nbsp;-&nbsp;
                  <span className="font-sembold">05.01.2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
