"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';  
import { PiAirplaneTilt, PiNotebook } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaBusSolid, LiaCarSolid } from "react-icons/lia";
import { IoMenu, IoClose } from "react-icons/io5";
import { TbBeach } from "react-icons/tb";
import { BsPassport } from "react-icons/bs";
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); 
  const menuItems = [
    { href: "/flights", icon: <PiAirplaneTilt className="w-7 h-7" />, label: "Flights" },
    { href: "/hotels", icon: <HiOutlineBuildingOffice2 className="w-7 h-7" />, label: "Hotels" },
    { href: "/bus", icon: <LiaBusSolid className="w-7 h-7" />, label: "Buses" },
    { href: "/cabs", icon: <LiaCarSolid className="w-7 h-7" />, label: "Cabs" },
    { href: "/visa", icon: <BsPassport className="w-7 h-7" />, label: "Visa" },
    { href: "/travel-insurance", icon: <PiNotebook className="w-7 h-7" />, label: "Travel Insurance" },
    { href: "/holidays-india", icon: <TbBeach className="w-7 h-7" />, label: "Holidays" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md text-text shadow-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo2.png"
                alt="MakeOwnJourney"
                width={44}
                height={54}
                className="object-contain transition-transform group-hover:scale-105"
              />
              <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                MakeOwn Journey
              </span>
              <span className="sm:hidden text-xl font-bold text-primary">MOJ</span>
            </Link>

            
            <div className="hidden lg:flex items-center space-x-8 ">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex flex-col items-center gap-2 py-0 transition-all duration-300
                    ${isActive(item.href) 
                      ? "text-primary font-medium" 
                      : "text-text-secondary hover:text-primary"
                    }`}
                >
                  <div className={`p-3 rounded-xl transition-all duration-300
                    ${isActive(item.href) 
                      ? "bg-primary/10 text-primary" 
                      : "hover:bg-gray-100"
                    }`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                  
                
                  <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform origin-left transition-transform duration-300
                    ${isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                  `} />
                </Link>
              ))}
            </div>

            
            <div className="flex items-center gap-4">
              <Link href="/auth/login">
                <button className="hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300">
                  <span>Login / Sign Up</span>
                </button>
                <button className="sm:hidden bg-primary text-white px-5 py-2 rounded-full text-sm font-medium">
                  Login
                </button>
              </Link>

              
              <button
                onClick={toggleMenu}
                className="lg:hidden text-3xl text-text p-2"
              >
                {isMenuOpen ? <IoClose /> : <IoMenu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

              
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } lg:hidden`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b">
            <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
              <Image src="/logo2.png" alt="Logo" width={44} height={54} className="object-contain" />
              <span className="text-xl font-bold text-primary">MakeOwn Journey</span>
            </Link>
            <button onClick={closeMenu} className="text-3xl text-gray-600">
              <IoClose />
            </button>
          </div>

          <div className="flex-1 py-6 px-5 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`flex items-center gap-5 py-4 px-5 rounded-xl transition-all
                  ${isActive(item.href) 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "hover:bg-gray-100"
                  }`}
              >
                <div className="text-2xl">{item.icon}</div>
                <span className="text-lg">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="p-6 border-t">
            <Link href="/auth/login" onClick={closeMenu}>
              <button className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
                Login / Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={closeMenu} />
      )}
    </>
  );
};

export default Navbar;