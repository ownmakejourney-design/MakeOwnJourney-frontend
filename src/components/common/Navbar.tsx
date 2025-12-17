import Link from 'next/link';
import React from 'react';
import { PiAirplaneTilt, PiNotebook } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaBusSolid, LiaCarSolid } from "react-icons/lia";
import { IoHomeOutline } from "react-icons/io5";
import { TbBeach } from "react-icons/tb";
import { BsPassport } from "react-icons/bs";
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-container text-text shadow-card border-l border-border sticky top-0 z-50">
      <div className="max-w-[1100px] mx-auto px-3 py-2">
        <div className="flex justify-between items-center w-full">

          {/* ✅ Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo2.png"
                alt="MakeOwnJourney Logo"
                width={40}
                height={50}
                className="object-contain"
              />
              <span className="text-[15px] font-semibold text-text hover:text-text-secondary  ml-[1px] leading-none">
                MakeOwn Journey</span>
    
            </Link>
          </div>


          {/* ✅ Navigation Icons */}
          <div className="flex items-center space-x-5 overflow-x-auto scrollbar-hide px-2">
            <Link href="/flights" className="flex flex-col items-center text-[13px] text-text hover:text-text-secondary transition">
            < PiAirplaneTilt className="w-6 h-6 mb-1" /> Flights
            </Link>
            <Link href="/hotels" className="flex flex-col items-center text-[13px] text-text hover:text-text-secondary transition">
              <HiOutlineBuildingOffice2 className="w-6 h-6 mb-1" /> Hotels
            </Link>
            <Link href="/bus" className="flex flex-col items-center text-[13px] text-text hover:text-text-secondary  transition">
              <LiaBusSolid className="w-6 h-6 mb-1" /> Buses
            </Link>
            {/* <Link href="/trains" className="flex flex-col items-cente r text-[13px] text-amber-700 hover:text-amber-900 transition">
              <PiTrain className="w-6 h-6 mb-1" /> Trains
            </Link> */}
            <Link href="/cabs" className="flex flex-col items-center text-[13px] text-text hover:text-text-secondary transition">
              <LiaCarSolid className="w-6 h-6 mb-1" /> Cabs
            </Link>
            <Link href="/homestays" className="flex flex-col items-center text-[13px] text-text hover:text-text-secondary  transition">
              <IoHomeOutline className="w-6 h-6 mb-1" /> Homestays
            </Link>
            <Link href="/visa" className="flex flex-col items-center text-[13px] text-text hover:text-text-secondary transition">
              <BsPassport className="w-6 h-6 mb-1" /> Visa
            </Link>
            <Link href="/travel-insurance" className="flex flex-col items-center text-[13px] text-text hover:text-text-secondary text-center transition">
              <PiNotebook className="w-6 h-6 mb-1" /> Travel Insurance
            </Link>
            <Link href="/holidays-india" className="flex flex-col items-center text-[13px] text-text hover:text-text-secondary text-center transition">
              <TbBeach className="w-6 h-6 mb-1" /> Holiday Packages
            </Link>
          </div>

          {/* ✅ Login Section */}

        <div className="flex items-center gap-2">

          <Link href="/auth/login">
            <button className="text-[15px] border  border-border  px-4 py-2 rounded-md hover:text-button-text hover:bg-secondary transition">
              Login/Sign Up
            </button>
          </Link>

          {/* <Link href="/auth/signup">
            <button className="text-[13px] bg-white border border-amber-700 text-amber-700 px-4 py-1 rounded hover:bg-amber-100 transition">
              Create Account
            </button>
          </Link> */}
       </div>
  </div>
  </div>
    </nav>
  );  
};

export default Navbar;







