import { facebook, google, instagram, logo, x } from "../../../public";
import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-row p-12 gap-x-28 items-center">
      <div className="flex flex-col space-y-6 items-start">
        <div className="flex flex-row gap-3 justify-center items-center">
          <Image
            src={logo}
            alt="logo"
            className="w-[60px] h-[60px] rounded-full overflow-hidden"
          />
          <div className="font-semibold text-xl">boogieblogs</div>
        </div>
        <div className="flex flex-row flex-wrap max-w-[800px] w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          alias, cupiditate soluta eaque quo dicta minus, at debitis nam
          deserunt quasi recusandae, minima eum ut ipsum. Mollitia reiciendis
          earum neque molestias consectetur impedit soluta totam distinctio.
        </div>
        <div className="flex flex-row justify-between items-start gap-x-3">
          <Image
            src={facebook}
            alt="faceboook"
            className="w-[25px] h-[25px] mt-2"
          />
          <Image src={google} alt="google" className="w-[35px] h-[40px] mt-1" />
          <Image
            src={instagram}
            alt="instagram"
            className="w-[30px] h-[30px] mt-2"
          />
          <Image src={x} alt="x" className="w-[20px] h-[20px] mt-3" />
        </div>
      </div>
      <div className="flex flex-col space-y-4 ">
        <div className="font-semibold text-base">
          Links
        </div>
        <div className="text-sm">Homepage</div>
        <div className="text-sm">Blog</div>
        <div className="text-sm">Contact</div>
        <div className="text-sm">About</div>
      </div>
      <div className="flex flex-col space-y-4 ">
        <div className="font-semibold text-base">
          Tags
        </div>
        <div className="text-sm">Style</div>
        <div className="text-sm">Fashion</div>
        <div className="text-sm">Coding</div>
        <div className="text-sm">Travel</div>
      </div>
      <div className="flex flex-col space-y-4 ">
        <div className="font-semibold text-base">
          Social
        </div>
        <div className="text-sm">Facebook</div>
        <div className="text-sm">Google</div>
        <div className="text-sm">Instagram</div>
        <div className="text-sm">X</div>
      </div>
    </div>
  );
};

export default Footer;
