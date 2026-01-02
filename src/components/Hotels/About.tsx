"use client";

import { motion } from "framer-motion";

export default function HotelFAQs() {
  const faqData = [
    {
      q: "How can I book a hotel online?",
      a: "Simply enter your destination, check-in & check-out dates, number of guests and rooms. Compare prices, read reviews, view photos, and book instantly with secure payment options.",
    },
    {
      q: "How do I find cheap hotel deals?",
      a: "Book in advance, travel during off-season or weekdays, use promo codes, and compare rates across multiple properties. Many platforms offer exclusive discounts, last-minute deals, and loyalty rewards.",
    },
    {
      q: "Can I cancel or modify my hotel booking?",
      a: "Yes, most hotels allow free cancellation or modification up to a certain period before check-in. Check the hotel's cancellation policy at the time of booking – some offer full refund, others may charge a fee.",
    },
    {
      q: "What documents do I need for hotel check-in?",
      a: "A valid government-issued photo ID (Aadhaar, Passport, Driving License, Voter ID) is required. For international guests, a passport and valid visa are mandatory.",
    },
    {
      q: "Is breakfast included in the room rate?",
      a: "It depends on the room type and hotel policy. Many hotels offer 'Room Only', 'Breakfast Included', or 'All Meals' options – clearly mentioned during booking.",
    },
    {
      q: "Can I request early check-in or late check-out?",
      a: "Yes, you can request it. Early check-in and late check-out are subject to availability and may incur extra charges depending on the hotel.",
    },
    {
      q: "Are taxes included in the displayed price?",
      a: "Usually, the displayed price includes base room rate and taxes. However, some hotels may show taxes separately – always check the final breakdown before payment.",
    },
    {
      q: "Do hotels provide airport pickup/drop?",
      a: "Many hotels offer paid or complimentary airport transfer services. You can check availability and book it during or after reservation.",
    },
    {
      q: "Can I book extra bed or room for children?",
      a: "Yes, most hotels allow extra beds or accommodate children. Policies vary – some offer free stay for kids below a certain age, others charge extra.",
    },
    {
      q: "What payment methods are accepted for hotel booking?",
      a: "You can pay securely using UPI, debit/credit cards, net banking, digital wallets, and EMI options. Pay at hotel option is also available at select properties.",
    },
  ];

  return (
    <section className="min-h-screen bg-background px-6 py-14">
      {/* Heading */}
      <h2 className="mb-12 text-3xl font-bold text-text text-center md:text-left">
        Hotel Booking FAQs
      </h2>

      {/* FAQ List */}
      <div className="mx-auto max-w-7xl space-y-14">
        {faqData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="grid grid-cols-1 gap-10 border-b border-border pb-10 md:grid-cols-2"
          >
            {/* Question */}
            <div>
              <h3 className="text-2xl font-semibold text-text">
                {item.q}
              </h3>
            </div>

            {/* Answer */}
            <div>
              <p className="text-lg leading-relaxed text-text-secondary">
                {item.a}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}