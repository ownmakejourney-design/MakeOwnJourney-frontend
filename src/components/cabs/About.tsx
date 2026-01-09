"use client";
import { motion } from "framer-motion";

export default function CabFAQ() {
  const faqData = [
    {
      q: "How can I book a cab online?",
      a: "You can book a cab by entering your pickup and drop location, selecting the cab type, and confirming your ride. Booking is quick, secure, and available 24/7.",
    },
    {
      q: "What types of cabs are available?",
      a: "We offer multiple cab options including hatchback, sedan, SUV, luxury cars, and outstation cabs based on your travel needs.",
    },
    {
      q: "Can I cancel my cab booking?",
      a: "Yes, you can cancel your cab booking. Free cancellation is available within the allowed time window. Cancellation charges may apply afterward.",
    },
    {
      q: "What if my cab doesn’t arrive?",
      a: "If the cab fails to arrive, you will receive a full refund instantly. Our support team also helps arrange an alternate cab if required.",
    },
    {
      q: "Are tolls and parking charges included?",
      a: "Tolls, parking fees, and state taxes may or may not be included depending on the cab type and route. Exact details are shown before booking.",
    },
    {
      q: "Can I book a cab for outstation travel?",
      a: "Yes, you can easily book outstation cabs for one-way or round trips with flexible packages and affordable pricing.",
    },
    {
      q: "Is night-time travel safe?",
      a: "Yes, all our drivers are verified, and rides are GPS-tracked. Emergency support and driver details are shared before the trip.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept UPI, debit cards, credit cards, net banking, wallets, and EMI options for your convenience.",
    },
    {
      q: "Can I schedule a cab in advance?",
      a: "Yes, you can pre-book a cab in advance to ensure availability at your preferred time.",
    },
    {
      q: "Will I get the driver details before pickup?",
      a: "Yes, driver name, contact number, vehicle details, and live tracking are shared once the cab is assigned.",
    },
  ];

  return (
    <section className="min-h-screen bg-background px-6 py-14">
      {/* Heading */}
      <h2 className="mb-12 text-3xl font-bold text-text">
        Cab FAQs
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
              <h2 className="text-2xl font-semibold text-text">
                {item.q}
              </h2>
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
