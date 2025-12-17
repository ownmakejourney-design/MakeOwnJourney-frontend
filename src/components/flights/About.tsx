"use client";
import { motion } from "framer-motion";

export default function About() {
  const faqData = [
    {
      q: "How can I book flight tickets online?",
      a: "You can easily book flights by entering your travel details, comparing fares across airlines, and selecting the best option. Online platforms provide instant booking, multiple payment options, and fast confirmation.",
    },
    {
      q: "How can I find cheap flight tickets?",
      a: "Compare fares across multiple airlines, travel on weekdays, book early, and use promo codes. Many platforms also offer last-minute deals, seasonal discounts, and student/senior concession fares.",
    },
    {
      q: "Can I cancel or reschedule my flight?",
      a: "Yes, most airlines allow both cancellation and rescheduling. Charges may apply depending on the airline policy, fare type, and time left before departure.",
    },
    {
      q: "What documents do I need for air travel?",
      a: "A valid government photo ID is required. For international flights, a valid passport and visa are mandatory.",
    },
    {
      q: "What happens if my flight gets delayed or cancelled?",
      a: "Airlines usually offer alternatives such as free rescheduling, refunds, or the next available flight. Compensation depends on airline policies and delay duration.",
    },
    {
      q: "Cab doesn't show up?",
      a: "If the cab fails to arrive, you get a full refund immediately. We also coordinate with the provider to arrange an alternate cab.",
    },
    {
      q: "How do I check-in for a flight?",
      a: "You can do web check-in 24–48 hours before departure on the airline’s website or app.",
    },
    {
      q: "Can I book seats in advance?",
      a: "Yes, most airlines allow advance seat selection during booking or check-in. Some seats may require an additional fee.",
    },
    {
      q: "Are meals included in flight booking?",
      a: "It depends on the airline and fare type. Some airlines offer complimentary meals, others allow paid selection.",
    },
    {
      q: "What payment methods are accepted?",
      a: "You can pay using UPI, debit/credit cards, net banking, wallets, and EMI options.",
    },
  ];

  return (
    <section className="min-h-screen bg-background px-6 py-14">
      {/* Heading */}
      <h2 className="mb-12 text-3xl font-bold text-text">
        FAQs
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
