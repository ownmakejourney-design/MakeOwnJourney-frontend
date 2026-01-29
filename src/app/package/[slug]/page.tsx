"use client";

import { packages } from "@/data/package";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { CiLocationOn } from "react-icons/ci";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiAlarmClock } from "react-icons/gi";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { TiTickOutline } from "react-icons/ti";
import "swiper/css";
import "swiper/css/pagination";
import FAQSection from "@/components/package/FAQSection";
import { faqs } from "@/data/faq";
import TermsSection from "@/components/package/TermsSection";
import { termsAndConditions } from "@/data/terms";
import PackageCard from "@/components/package/Package";

export default function PackageDetail() {
    const { slug } = useParams<{ slug: string }>();

    const pkg = packages.find((p) => p.slug === slug);

    if (!pkg) {
        return notFound();
    }

    return (
        <div className="max-w-7xl mx-auto  py-6 space-y-12">
            {/* ================= TITLE & LOCATION ================= */}
            <div>
                <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                    {pkg.title}
                </h1>
                <p className="text-gray-500 text-lg cursor-pointer hover:text-gray-800">
                    <CiLocationOn className="text-2xl inline-block mr-1" /> {pkg.location}
                </p>
            </div>

            {/* ================= IMAGE GALLERY ================= */}
            <Swiper
                modules={[Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                spaceBetween={16}
                className="w-full h-[550px] rounded-lg overflow-hidden "
            >
                {pkg.images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[600px]">
                            <Image
                                src={img}
                                alt={`${pkg.title} image ${index + 1}`}
                                fill
                                className="object-cover "
                                priority={index === 0}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* ================= DESCRIPTION ================= */}
            <div className="max-w-4xl">
                <h2 className="text-2xl font-bold mb-3">About This Package</h2>
                <p className="text-gray-700 leading-relaxed">
                    {pkg.description}
                </p>
            </div>

            {/* ================= PACKAGE INFO ================= */}
            <div className="grid md:grid-cols-3 gap-6 ">
                <div className="rounded-xl p-6  shadow hover:shadow-md transition hover:shadow-gray-500 border border-gray-400 hover:border-blue-500">
                    <h3 className="font-semibold text-lg mb-2 align-middle"><GiAlarmClock className="inline-block text-center text-2xl" /> Duration</h3>
                    <p className="text-gray-500 hover:text-gray-800 cursor-pointer">{pkg.duration}</p>
                </div>

                <div className="rounded-xl p-6  shadow hover:shadow-md transition hover:shadow-gray-500 border border-gray-400 hover:border-blue-500">
                    <h3 className="font-semibold text-lg mb-2"><LiaRupeeSignSolid className="inline-block text-center text-2xl" /> Price</h3>
                    <p className="text-gray-500 hover:text-gray-800 cursor-pointer">
                        <LiaRupeeSignSolid className="inline-block text-center text-2xl" />{pkg.price}/-
                    </p>
                </div>

                <div className="rounded-xl p-6  shadow hover:shadow-md transition hover:shadow-gray-500 border border-gray-400 hover:border-blue-500">
                    <h3 className="font-semibold text-lg mb-2"><CiLocationOn className="inline-block text-center text-2xl" /> Location</h3>
                    <p className="text-gray-500 hover:text-gray-800 cursor-pointer">{pkg.location}</p>
                </div>
            </div>

            {/* ================= HIGHLIGHTS ================= */}
            <div className="max-w-4xl">
                <h2 className="text-2xl font-bold mb-4">
                    Package Highlights
                </h2>
                <ul className="grid md:grid-cols-2 gap-3">
                    {pkg.highlights.map((item, index) => (
                        <li
                            key={index}
                            className="bg-white shadow rounded-lg px-4 py-3 flex items-center gap-2 hover:shadow-md transition cursor-pointer border border-gray-300 hover:border-blue-500"
                        >
                            <TiTickOutline className=" text-3xl" /> {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* ================= CTA ================= */}
            <div className="bg-black text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-2xl font-bold">
                        Ready to Book This Trip?
                    </h3>
                    <p className="text-gray-300">
                        Best price guaranteed. Limited seats available.
                    </p>
                </div>

                <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
                    Book Now
                </button>
            </div>
            <FAQSection faqs={faqs} />

            <TermsSection terms={termsAndConditions} />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-5">
                {packages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </div>
    );
}
