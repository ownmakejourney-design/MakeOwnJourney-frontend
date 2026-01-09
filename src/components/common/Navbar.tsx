"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";

// ICON IMAGES
import AirplaneIcon from "../../../public/Navicon/airplane.png";
import HotelIcon from "../../../public/Navicon/hotel.png";
import BusIcon from "../../../public/Navicon/bus.png";
import CarIcon from "../../../public/Navicon/car.png";
import VisaIcon from "../../../public/Navicon/visa.png";
import InsuranceIcon from "../../../public/Navicon/Insurance.png";
import PackagesIcon from "../../../public/Navicon/Packages.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: "/flights", icon: <Image src={AirplaneIcon} alt="Flights" width={32} height={32} />, label: "Flights" },
    { href: "/hotels", icon: <Image src={HotelIcon} alt="Hotels" width={32} height={32} />, label: "Hotels" },
    { href: "/bus", icon: <Image src={BusIcon} alt="Buses" width={32} height={32} />, label: "Buses" },
    { href: "/cabs", icon: <Image src={CarIcon} alt="Cabs" width={32} height={32} />, label: "Cabs" },
    { href: "/visa", icon: <Image src={VisaIcon} alt="Visa" width={32} height={32} />, label: "Visa" },
    { href: "/travel-insurance", icon: <Image src={InsuranceIcon} alt="Insurance" width={32} height={32} />, label: "Insurance" },
    { href: "/holidays-india", icon: <Image src={PackagesIcon} alt="Packages" width={32} height={32} />, label: "Packages" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-18">

            {/* LOGO + BRAND TEXT */}
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo2.png" alt="Logo" width={44} height={54} />

              {/* DESKTOP */}
              <span className="hidden sm:block text-xl font-bold tracking-wide">
                <span className="text-orange-500">Make Own</span>{" "}
                <span className="text-blue-600">Journey</span>
              </span>

              {/* MOBILE */}
              <span className="sm:hidden font-bold text-lg">
                <span className="text-orange-500">Make Own</span>{" "}
                <span className="text-blue-600">Journey</span>
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center gap-2 ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl transition ${
                      isActive(item.href)
                        ? "bg-primary/10 scale-110"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              <Link href="/auth/login">
                <button className="hidden sm:block bg-primary text-white px-6 py-2 rounded-full">
                  Login / Sign Up
                </button>
              </Link>

              <button onClick={toggleMenu} className="lg:hidden text-3xl">
                {isMenuOpen ? <IoClose /> : <IoMenu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-white transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="p-6 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`flex items-center gap-4 p-4 rounded-xl ${
                isActive(item.href)
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span className="text-lg">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {isMenuOpen && (  
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
