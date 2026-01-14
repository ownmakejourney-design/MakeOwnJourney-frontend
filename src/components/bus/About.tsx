"use client";
import { motion } from "framer-motion";

export default function CabFAQ() {
  const faqData = [
  {
    q: "How can I book a bus ticket online?",
    a: "You can book a bus ticket by selecting your source and destination, choosing the travel date, picking a bus and seat, and completing the payment. The process is fast, secure, and available 24/7.",
  },
  {
    q: "What types of buses are available?",
    a: "We offer a wide range of buses including AC, Non-AC, Sleeper, Seater, Volvo, and luxury buses depending on the route and operator.",
  },
  {
    q: "Can I cancel my bus ticket?",
    a: "Yes, you can cancel your bus ticket as per the operator’s cancellation policy. Refunds are processed automatically after cancellation.",
  },
  {
    q: "What if the bus is delayed or cancelled?",
    a: "In case of bus delay or cancellation, you will be notified in advance. Refunds or alternative options are provided based on the operator’s policy.",
  },
  {
    q: "Are taxes and service charges included in the fare?",
    a: "All applicable taxes and service charges are clearly shown during the booking process before you make the payment.",
  },
  {
    q: "Can I book bus tickets for outstation travel?",
    a: "Yes, you can book bus tickets for both short-distance and long-distance outstation routes across multiple cities.",
  },
  {
    q: "Is night bus travel safe?",
    a: "Yes, we work with verified bus operators. Bus details, boarding points, and support information are shared to ensure a safe journey.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept UPI, debit cards, credit cards, net banking, wallets, and EMI options for hassle-free payments.",
  },
  {
    q: "Can I choose my seat while booking?",
    a: "Yes, you can select your preferred seat using the interactive seat layout available during booking.",
  },
  {
    q: "Will I get my bus ticket after booking?",
    a: "Yes, your e-ticket is sent instantly via SMS and email. You can also view and download it from your account.",
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
