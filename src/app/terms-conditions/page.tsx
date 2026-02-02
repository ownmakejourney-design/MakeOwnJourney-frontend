// app/terms-and-conditions/page.tsx
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | [Your Company Name] - Travel Bookings",
  description:
    "Read our Terms and Conditions for booking hotels, buses, trains, flights, visas, and holiday packages. Understand your rights, responsibilities, cancellations, refunds, and more.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--text))]">
      {/* Header / Hero Section */}
      <header className="bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] border-b border-[hsl(var(--border))]">
        <div className="max-w-4xl mx-auto px-5 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-poppins)] text-[hsl(var(--primary))] mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg md:text-xl text-[hsl(var(--text-secondary))] max-w-3xl mx-auto mb-6">
            Welcome to{" "}
            <span className="font-semibold text-[hsl(var(--primary))]">
              Make Own Journey
            </span>{" "}
            — your trusted partner for seamless travel experiences.
            <br className="hidden sm:block" />
            These Terms and Conditions govern your use of our website, mobile
            app, and all travel services including hotel bookings,
            bus/train/flight tickets, visa assistance, and holiday packages.
          </p>
          <p className="text-sm text-[hsl(var(--text-secondary))]">
            Last Updated: February 02, 2026
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 py-12 md:py-16 prose prose-slate prose-headings:text-[hsl(var(--primary))] prose-a:text-[hsl(var(--primary))] prose-a:no-underline hover:prose-a:underline max-w-none prose-lg leading-relaxed ">
        <p className="lead text-lg text-[hsl(var(--text-secondary))] mb-10 border-l-4 border-[hsl(var(--primary))] pl-5 py-2">
          By accessing, browsing, or booking through our platform, you agree to
          be bound by these Terms and Conditions, our Privacy Policy, and any
          specific service terms. If you do not agree, please do not use our
          services.
        </p>

        <h2 className="border-l-4 border-[hsl(var(--primary))] pl-4 mt-16">
          1. Introduction & Acceptance
        </h2>
        <p>
         Make Own Journey ("we", "us", "our") operates as an online travel
          intermediary facilitating bookings for hotels, buses, trains, flights,
          visa processing assistance, and curated holiday packages. We act
          solely as an agent between you ("User", "you", "your") and third-party
          service providers (airlines, hotels, bus operators, train authorities,
          visa consulates, etc.).
        </p>
        <p>
          These Terms form a legally binding agreement. We may update these
          Terms periodically; continued use after changes constitutes
          acceptance. It is your responsibility to review them regularly.
        </p>

        <h2 className="border-l-4 border-[hsl(var(--primary))] pl-4 mt-16">
          2. Eligibility
        </h2>
        <p>
          You must be at least 18 years old and legally capable of entering
          contracts to use our services. By booking, you represent that you have
          the authority to bind all travelers in your booking.
        </p>

        <h2 className="border-l-4 border-[hsl(var(--primary))] pl-4 mt-16">
          3. Booking Process & Confirmation
        </h2>
        <p>
          All bookings are subject to availability and third-party supplier
          confirmation. A booking is confirmed only upon receipt of full payment
          (or as per agreed schedule) and issuance of a confirmation
          voucher/e-ticket via email/SMS.
        </p>
        <ul>
          <li>
            You must provide accurate, complete information during booking.
          </li>
          <li>
            Any discrepancy in name, date of birth, passport details, etc., may
            lead to denial of service without refund.
          </li>
          <li>We are not liable for errors in information provided by you.</li>
        </ul>

        <h2 className="border-l-4 border-[hsl(var(--primary))] pl-4 mt-16">
          4. Payments & Fees
        </h2>
        <p>
          Payments are processed through secure third-party gateways. We do not
          store card details. Full payment is required at booking unless
          installment options are explicitly offered.
        </p>
        <ul>
          <li>
            Service fees, convenience charges, or platform fees are
            non-refundable.
          </li>
          <li>GST and other taxes are extra as applicable.</li>
          <li>
            Currency fluctuations or bank charges are your responsibility.
          </li>
        </ul>

        <h2 className="border-l-4 border-[hsl(var(--primary))] pl-4 mt-16">
          5. Cancellations, Refunds & Changes
        </h2>
        <p>
          Cancellation policies vary by service provider (airline, hotel, bus
          operator, etc.) and are displayed during booking. Our platform fee is
          always non-refundable.
        </p>
        <ul>
          <li>
            <strong>Flights/Non-refundable fares:</strong> Usually 100%
            cancellation charge.
          </li>
          <li>
            <strong>Hotels:</strong> Free cancellation until policy deadline;
            post-deadline = 1–100% charge.
          </li>
          <li>
            <strong>Buses/Trains:</strong> As per operator rules; IRCTC/train
            tickets have strict rules.
          </li>
          <li>
            <strong>Holiday Packages/Visa Assistance:</strong> 30–90 days prior
            = 10–25% deduction; closer to departure = higher or no refund.
          </li>
          <li>
            Refunds (when applicable) processed within 7–30 working days to
            original payment method.
          </li>
          <li>No-show or partial usage = no refund.</li>
        </ul>
        <p className="bg-[hsl(var(--hover-container))] p-6 rounded-xl my-8 border border-[hsl(var(--border))]">
          Changes (date, name, route) are subject to availability and supplier
          fees + our processing charge. Name changes are often not permitted on
          airline tickets.
        </p>

        <h2 className="border-l-4 border-[hsl(var(--primary))] pl-4 mt-16">
          6. User Responsibilities
        </h2>
        <ul>
          <li>
            Carry valid ID, passport (valid 6+ months for international), visas,
            tickets.
          </li>
          <li>
            Comply with all supplier rules (baggage, check-in time, prohibited
            items).
          </li>
          <li>
            Inform us of special needs (disability, meals, etc.) at booking
            time.
          </li>
          <li>
            Travel insurance is strongly recommended — we are not liable for
            uncovered losses.
          </li>
        </ul>

        <h2 className="border-l-4 border-[hsl(var(--primary))] pl-4 mt-16">
          7. Visa & Documentation Assistance
        </h2>
        <p>
          We provide visa application guidance and document collection as a
          facilitation service only. Final visa approval/rejection is solely at
          the discretion of the embassy/consulate.
        </p>
        <ul>
          <li>
            We are not responsible for visa denial, delays, or additional costs
            incurred.
          </li>
          <li>Visa fees are non-refundable even if application is rejected.</li>
        </ul>

        <h2 className="border-l-4 border-[hsl(var(--primary))] pl-4 mt-16">
          8. Liability & Disclaimers
        </h2>
        <p>We act only as an intermediary. We are not liable for:</p>
        <ul>
          <li>
            Acts/omissions of third-party suppliers (delays, cancellations,
            overbooking, poor service, accidents).
          </li>
          <li>
            Force majeure events (weather, strikes, natural disasters,
            pandemics, war, government orders).
          </li>
          <li>Indirect, consequential, or punitive damages.</li>
          <li>
            Loss of enjoyment, business opportunity, or personal injury (unless
            caused by our gross negligence).
          </li>
        </ul>
        <p>
          Our maximum liability shall not exceed the booking amount paid to us
          (excluding third-party charges).
        </p>

        <h2 className="border-l-4 border-[hsl(var(--primary))] pl-4 mt-16">
          9. Force Majeure
        </h2>
        <p>
          Neither party is liable for failure/delay due to events beyond
          reasonable control including acts of God, government restrictions,
          pandemics, terrorism, riots, or technical failures.
        </p>

        <h2 className="border-l-4 border-[hsl(var(--primary))] pl-4 mt-16">
          10. Intellectual Property & Website Use
        </h2>
        <p>
          All content (text, images, logos) is our property or licensed to us.
          You may not copy, reproduce, or use commercially without permission.
        </p>
        <p>
          Prohibited: misuse, hacking, spamming, uploading viruses, or posting
          unlawful content.
        </p>

        <h2 className="border-l-4 border-[hsl(var(--primary))] pl-4 mt-16">
          11. Governing Law & Dispute Resolution
        </h2>
        <p>
          These Terms are governed by the laws of India. Disputes shall be
          subject to exclusive jurisdiction of courts in Delhi, India.
        </p>
        <p>
          Any complaints must be raised within 30 days of travel completion.
        </p>

        <h2 className="border-l-4 border-[hsl(var(--primary))] pl-4 mt-16">
          12. Miscellaneous
        </h2>
        <ul>
          <li>Severability: Invalid provisions do not affect others.</li>
          <li>
            Assignment: We may assign rights; you may not without consent.
          </li>
          <li>Entire Agreement: These Terms supersede prior agreements.</li>
          <li>
            Contact: For queries — support@makeownjourneycom | +91-8750610304
          </li>
        </ul>

        {/* Contact Box */}
        <div className="my-16 p-8 bg-[hsl(var(--container))] shadow-[var(--shadow)] rounded-2xl border border-[hsl(var(--border))] text-center">
          <h3 className="text-2xl font-bold text-[hsl(var(--primary))] mb-6 font-[var(--font-poppins)]">
            Questions or Concerns?
          </h3>
          <div className="space-y-4 text-[hsl(var(--text-secondary))]">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@yourcompany.com"
                className="text-[hsl(var(--primary))] hover:underline"
              >
                support@makeownjourney.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> +91-8750610304
            </p>
            <p>
              <strong>Address: </strong>Make Own Journey, India
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
