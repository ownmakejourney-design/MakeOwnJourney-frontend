"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-container border-t border-border shadow-card">
      {/* Main Footer */}
      <div className="max-w-screen mx-auto px-4  sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-primary font-poppins">
              MakeOwnJourney
            </h2>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              Book flights, hotels, buses and cabs with ease.  
              Travel smarter with trusted prices and seamless experience.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-md font-semibold text-text mb-3">
              Products
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="/flights" className="hover:text-primary transition">
                  Flights
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="hover:text-primary transition">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/buses" className="hover:text-primary transition">
                  Buses
                </Link>
              </li>
              <li>
                <Link href="/cabs" className="hover:text-primary transition">
                  Cabs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-md font-semibold text-text mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-md font-semibold text-text mb-3">
              Support
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Email: support@makeownjourney.com</li>
              <li>Phone: +91 8750610304</li>
              <li>Location: India</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-center text-sm text-text-secondary">
          © {new Date().getFullYear()} MakeOwnJourney. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
