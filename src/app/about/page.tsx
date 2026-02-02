// app/about-us/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | MakeOwnJourney - Your Travel Partner",
  description:
    "Learn about MakeOwnJourney – your trusted platform for hotel bookings, flights, buses, trains, visa assistance, and custom holiday packages across India and worldwide.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-gray-200 to-gray-400 text-white overflow-hidden">
        {/* Optional subtle pattern – you can replace with real image */}
        <div
          className="absolute inset-0 opacity-8 bg-cover bg-block pointer-events-none"
          style={{ backgroundImage: "url('/contactUs.jpg')" }}
        ></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            About MakeOwnJourney
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 text-gray-800">
            Making Your Journey Truly Yours Since [Year Started]
          </p>
          <p className="mt-6 text-lg md:text-xl font-light max-w-3xl mx-auto">
            From the vibrant streets of Delhi to hidden gems across India and dream destinations worldwide — we help you travel smarter, easier, and more memorably.
          </p>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              MakeOwnJourney was born in Delhi with one clear goal: to take the hassle out of travel planning so you can focus on the joy of exploring.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              What began as a passion project to help friends and family discover affordable, reliable travel options has grown into a full-service platform loved by thousands. We specialize in:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-6">
              <li>Domestic & international hotel bookings</li>
              <li>Flight, bus & train tickets</li>
              <li>Visa application support</li>
              <li>Custom holiday packages (family, adventure, honeymoon, pilgrimage & more)</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700">
              Today, MakeOwnJourney stands for transparent pricing, real support, and journeys tailored to your style — because every traveler deserves a trip that feels personal.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            {/* Replace with real image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center text-white text-2xl font-bold bg-cover bg-block pointer-events-none "
             style={{ backgroundImage: "url('/travel.png')" }}
            >
            
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
            Our Mission & Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">You Come First</h3>
              <p className="text-gray-600 leading-relaxed">
                Honest prices, no hidden fees, 24/7 human support — we put your comfort and satisfaction above everything.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Trust & Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                Verified partners, secure payments, instant confirmations — travel with peace of mind every step of the way.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Passion to Explore</h3>
              <p className="text-gray-600 leading-relaxed">
                We curate experiences — from offbeat Indian escapes to global adventures — because travel should inspire and excite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
          Why Travelers Love MakeOwnJourney
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Best Price Promise", desc: "We match or beat prices — guaranteed savings on hotels, flights, buses & packages." },
            { title: "Round-the-Clock Support", desc: "Real people ready via call, chat, WhatsApp — anytime you need help." },
            { title: "Smooth Visa Help", desc: "Expert checklist, document guidance, and appointment support for stress-free visas." },
            { title: "Personalized Packages", desc: "Tailor-made holidays for every type — family, solo, couple, group, spiritual." },
            { title: "100% Secure Booking", desc: "Encrypted payments, instant e-tickets, no surprises — travel worry-free." },
            { title: "Delhi Roots, Global Reach", desc: "Proudly based in Delhi, serving travelers across India and the world." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Make Your Own Journey?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Whether it's a quick city escape, mountain retreat, beach getaway, or international dream trip — let MakeOwnJourney plan it perfectly for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Get in Touch
            </a>
            <a
              href="/package"
              className="border-2 border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-white hover:text-blue-700 transition duration-300"
            >
              View Holiday Packages
            </a>
          </div>

          <div className="mt-12 text-sm opacity-80">
            <p>support@makeownjourney.com | +91-8750610304</p>
            <p className="mt-2">[Your Full Address], India</p>
          </div>
        </div>
      </section>
    </div>
  );
}