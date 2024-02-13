"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ConnectWallet , ThirdwebProvider } from "@thirdweb-dev/react"

const Navbar = () => {
  return (
    <ThirdwebProvider>
       <nav className="flex justify-center md:flex flex-col sm:flex-col items-center overflow-hidden">
      {/*logo  */}
      <div className="h-[100px] sm:flex  flex md:hidden  w-screen justify-center items-center">
        <Link href="/">
          <Image src="/kick.png" alt="" width={250} height={150} />
        </Link>
      </div>
      <div className="flex p-7   items-center border-[1px]sm:border-[1px] sm:border-slate-400 border-[1px] w-screen h-10 justify-between">
        <div className="flex md:justify-between gap-8">
          <Link href="./discover" className="hover:text-green-800">
            Discover
          </Link>
          <Link href="./startProject" className="hover:text-green-800">
            Start a Project
          </Link>
        </div>
        <div className="md:flex sm:hidden hidden justify-center items-center ">
          <Link href="/">
            <Image src="/kick.png" alt="" width={250} height={250} />
          </Link>
        </div>
        <div className="flex  gap-[30px] items-center">
          <div>
            <button className="flex items-center gap-1 hover:text-green-800">
              <span className="md:flex sm:hidden hidden "> Search </span>
              <Image src="/search.png" alt="" width={15} height={15} />
            </button>
          </div>
          <div className="w-auto">

            <ConnectWallet 
            theme="light"/>

          </div>
        </div>
      </div>
          
    </nav>
    </ThirdwebProvider>
   
  );
};

export default Navbar;
