import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-screen pt-[100px] flex justify-between flex-col">
      <div className=" border-t-2 flex justify-center items-center w-auto  h-full border-b-2 border-b-slate-300 gap-10  border-slate-400">
        <Link href="./arts">Arts</Link>
        <Link href="./arts">Comics & Illustration</Link>
        <Link href="./arts">Design & Tech</Link>
        <Link href="./arts">Food & Craft</Link>
        <Link href="./arts">Games</Link>
        <Link href="./arts">Music</Link>
        <Link href="./arts">Publishing</Link>
      </div>
      <div className="flex justify-center gap-7 items-center pt-10  ">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="font-[500] text-black">ABOUT</h1>
          </div>
          <div className="flex flex-col test-[10px] font-[200]">
            <Link
              href="./aboutus"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              {" "}
              About us
            </Link>
            <Link
              href="./ourcharters"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Our charts
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Stats
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Press
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Jobs{" "}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <div>
            <h1 className="font-[500] text-black">SUPPORT</h1>
          </div>
          <div className="flex flex-col test-[10px] font-[200]">
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Help center
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Our rules
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Creator resources
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Forward refund
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Brand assets
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="font-[500] text-black ">MORE FROM KICKSTARTER</h1>
          </div>
          <div className="flex flex-col text-black test-[10px] font-[200]">
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Newsletters
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Kickstarter Project Updates
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              The Creative Independent
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Mobile apps
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Research
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-center">
        <div className=" flex  pl-10 gap-4">
          <Image src="/k.png" alt="" width={20} height={20} />
          <span>Kickstarter, PBC © 2024</span>
        </div>
        <div className="flex gap-4">
          <Image
            src="/face.png"
            alt=""
            width={20}
            height={20}
            className="hover:bg-green-500 rounded-xl "
          />
          <Image
            src="/insta.png"
            alt=""
            width={20}
            height={20}
            className="hover:bg-green-500 rounded-xl "
          />
          <Image
            src="/twitter.png"
            alt=""
            width={20}
            height={20}
            className="hover:bg-green-500 rounded-xl "
          />
          <Image
            src="/youtube.png"
            alt=""
            width={20}
            height={20}
            className="hover:bg-green-500 rounded-xl "
          />
        </div>
        <div className="language-picker js-language-picker flex gap-6">
         
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 pb-6 border-t-2 border-slate-300">
        <Link
          href="/"
          className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
        >
          Trust & Safety
        </Link>
        <Link
          href="/"
          className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
        >
          Terms of Use
        </Link>
        <Link
          href="/"
          className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
        >
          Privacy Policy
        </Link>
        <Link
          href="/"
          className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
        >
          Do Not Sell My Personal Information
        </Link>
        <Link
          href="/"
          className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
        >
          Accessibility Statement
        </Link>
        <Link
          href="/"
          className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
        >
          CA Notice of Consent
        </Link>
      </div>
    </div>
  );
};

export default Footer;
