// app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Make Own Journey - Trusted Travel Partner",
  description:
    "Learn how Make Own Journey collects, uses, and protects your personal information when you book hotels, buses, trains, visas, and holiday packages.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header / Hero */}
      <header className="bg-gradient-to-br from-blue-100 via-white to-blue-50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-5 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-6">
            At <span className="font-semibold text-blue-700">Make Own Journey</span>, your trust matters most.
            <br className="hidden sm:block" />
            We are committed to protecting your personal information while you plan and enjoy your journeys — hotels, buses, trains, visas & dream holidays.
          </p>
          <p className="text-sm text-slate-500">
            Last Updated: [Insert Date — e.g. February 2, 2026]
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 py-12 md:py-16 prose prose-slate prose-headings:text-blue-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-li:my-1.5">
        <p className="lead text-lg text-slate-700 mb-10">
          By using our website, mobile apps, or services, you agree to the practices described in this Privacy Policy.
        </p>

        <h2 className="border-l-4 border-blue-500 pl-4 mt-16">1. Information We Collect</h2>
        <p>We collect only what’s necessary to deliver great travel experiences.</p>

        <h3>1.1 Personal Information</h3>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Date of birth</li>
          <li>Gender</li>
          <li>Address and nationality</li>
          <li>Passport details (for international travel & visa)</li>
          <li>Government-issued ID (where legally required)</li>
        </ul>

        <h3>1.2 Booking & Travel Details</h3>
        <ul>
          <li>Hotel, bus, train, flight bookings</li>
          <li>Travel dates & destinations</li>
          <li>Holiday package preferences</li>
          <li>Visa application documents</li>
          <li>Special requests (meals, accessibility, etc.)</li>
        </ul>

        <h3>1.3 Payment Information</h3>
        <p className="text-red-600 font-medium text-sm italic mb-4">
          ⚠️ We do <strong>not</strong> store your card details. Payments go through secure third-party gateways.
        </p>
        <ul>
          <li>Payment method type</li>
          <li>Transaction reference / ID</li>
          <li>Billing name & address</li>
        </ul>

        <h3>1.4 Technical & Usage Data</h3>
        <ul>
          <li>IP address</li>
          <li>Browser & device type</li>
          <li>Pages visited & session duration</li>
          <li>Cookies & similar tracking technologies</li>
        </ul>

        <h2 className="border-l-4 border-blue-500 pl-4 mt-16">2. How We Use Your Information</h2>
        <ul>
          <li>Process & confirm your bookings (hotels, transport, visas, packages)</li>
          <li>Send booking confirmations, reminders & travel updates</li>
          <li>Provide customer support & resolve issues</li>
          <li>Personalize your travel recommendations</li>
          <li>Comply with legal, visa & regulatory obligations</li>
          <li>Improve our website, app & services</li>
          <li>Send promotional offers & newsletters <em>(only if you opt-in)</em></li>
        </ul>

        <h2 className="border-l-4 border-blue-500 pl-4 mt-16">3. Cookies & Tracking Technologies</h2>
        <p>
          We use cookies to enhance performance, remember preferences, analyze traffic, and show relevant content.
        </p>
        <p className="text-sm text-slate-600">
          You can manage or disable cookies via your browser settings (some features may not work optimally if disabled).
        </p>

        <h2 className="border-l-4 border-blue-500 pl-4 mt-16">4. Sharing of Information</h2>
        <p className="font-medium">We do <strong>not</strong> sell your personal data.</p>

        <h3>With Service Partners</h3>
        <p className="text-sm">
          Limited data shared only with:
        </p>
        <ul className="text-sm">
          <li>Hotels & accommodation providers</li>
          <li>Bus, train, flight operators</li>
          <li>Visa processing authorities</li>
          <li>Payment gateway providers</li>
        </ul>

        <h3>Legal Obligations</h3>
        <p>When required by law, court order, or international travel compliance.</p>

        <div className="my-10 p-6 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-blue-800 font-medium">
            We share only the minimum information required to complete your travel service.
          </p>
        </div>

        <h2 className="border-l-4 border-blue-500 pl-4 mt-16">5. Data Security</h2>
        <ul>
          <li>HTTPS encryption for all data in transit</li>
          <li>Secure servers & restricted access</li>
          <li>Regular security monitoring & updates</li>
        </ul>
        <p className="text-sm italic text-slate-600 mt-4">
          While we use best practices, no method of electronic transmission is 100% secure.
        </p>

        <h2 className="border-l-4 border-blue-500 pl-4 mt-16">6. Your Rights</h2>
        <p>You may:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion (subject to legal obligations)</li>
          <li>Withdraw marketing consent</li>
          <li>Request data portability</li>
        </ul>
        <p className="mt-4">
          Contact us at the details below to exercise these rights.
        </p>

        {/* Contact Section */}
        <div className="my-16 p-8 bg-white shadow-lg rounded-2xl border border-blue-100 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Us</h3>
          <div className="space-y-4 text-slate-700">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@makeownjourney.com" className="text-blue-600 hover:underline">
                support@makeownjourney.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> +91-8750610304
            </p>
            <p>
              <strong>Address:</strong> Make Own Journey, India
            </p>
          </div>
        </div>

        <p className="text-center text-slate-500 mt-20 text-sm">
          © {new Date().getFullYear()} Make Own Journey. All rights reserved.
        </p>
      </main>
    </div>
  );
}