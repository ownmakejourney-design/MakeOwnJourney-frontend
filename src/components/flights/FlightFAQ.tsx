"use client";

const faqs = [
  {
    q: "How can I cancel my flight ticket?",
    a: "You can cancel your ticket from the bookings page. Refund depends on airline policy.",
  },
  {
    q: "How long does refund take?",
    a: "Refunds are usually processed within 5–7 working days.",
  },
  {
    q: "Is ID proof mandatory at airport?",
    a: "Yes, a valid government-issued photo ID is required.",
  },
];

export default function FlightFAQ() {
  return (
    <section className="mb-16 mt-6">
      <h3 className="text-xl font-semibold mb-4">
        Frequently Asked Questions
      </h3>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="rounded-lg border border-border  p-4"
          >
            <summary className="cursor-pointer font-medium">
              {faq.q}
            </summary>
            <p className="mt-2 text-sm text-text-secondary">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
