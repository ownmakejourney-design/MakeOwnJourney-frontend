"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useRouter } from "next/navigation";

type Step =
  | "welcome"
  | "services"
  | "thanks"
  | "choice"
  | "product"
  | "service"
  | "policy"
  | "refundForm"
  | "refundSuccess"
  | "faq"
  | "booking";

export default function FaqBot() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("welcome");
  const [service, setService] = useState("");
  const [policyAccepted, setPolicyAccepted] = useState(false);

  /* 🔥 Auto open on website visit */
  useEffect(() => {
    setOpen(true);
  }, []);

  const selectService = (name: string) => {
    setService(name);
    setStep("thanks");
    setTimeout(() => setStep("choice"), 1200);
  };

  const goToBooking = () => {
    router.push(`/${service.toLowerCase()}/book`);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-amber-600 text-white p-4 rounded-full shadow-lg"
        >
          <MessageCircle size={26} />
        </button>
      )}

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-xl shadow-2xl border overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-semibold">Travel Assistant</span>
            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 text-sm max-h-96 overflow-y-auto">

            {/* Welcome */}
            {step === "welcome" && (
              <>
                <div className="bg-orange-50 p-3 rounded-lg">
                  👋 Hello! Welcome to our travel support.
                </div>
                <button
                  onClick={() => setStep("services")}
                  className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold"
                >
                  Start Chat
                </button>
              </>
            )}

            {/* Services */}
            {step === "services" && (
              <>
                <div className="bg-orange-50 p-3 rounded-lg">
                  Please select your query 👇
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {["Flight", "Bus", "Cab", "Package", "Visa", "Insurance"].map(
                    (item) => (
                      <button
                        key={item}
                        onClick={() => selectService(item)}
                        className="border rounded-lg px-3 py-2 hover:bg-orange-50"
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </>
            )}

            {/* Thanks */}
            {step === "thanks" && (
              <>
                <div className="bg-green-50 p-3 rounded-lg">
                  ✅ Thanks for clearing your doubts about <b>{service}</b>.
                </div>
                <BookingCTA service={service} onBook={goToBooking} />
              </>
            )}

            {/* Choice */}
            {step === "choice" && (
              <>
                <div className="bg-orange-50 p-3 rounded-lg">
                  What would you like to do next?
                </div>

                <button onClick={() => setStep("faq")} className="w-full border py-2 rounded-lg">
                  ❓ FAQs
                </button>

                <button onClick={() => setStep("booking")} className="w-full border py-2 rounded-lg">
                  📄 Booking Details
                </button>

                <button onClick={() => setStep("policy")} className="w-full border py-2 rounded-lg">
                  🔁 Payment / Refund Policy
                </button>

                <button
                  onClick={() => setStep("service")}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-2 rounded-lg font-semibold"
                >
                  🧑‍💼 I need service
                </button>

                <BookingCTA service={service} onBook={goToBooking} />
              </>
            )}

            {/* FAQ */}
            {step === "faq" && (
              <>
                <div className="bg-orange-50 p-3 rounded-lg">
                  ❓ Common FAQs for <b>{service}</b>
                  <br />• Booking process
                  <br />• Cancellation rules
                  <br />• Refund timelines
                </div>
                <BookingCTA service={service} onBook={goToBooking} />
              </>
            )}

            {/* Booking info */}
            {step === "booking" && (
              <>
                <div className="bg-orange-50 p-3 rounded-lg">
                  📄 No booking record found.
                  <br />You can make a new booking easily 👇
                </div>
                <BookingCTA service={service} onBook={goToBooking} />
              </>
            )}

            {/* Policy */}
            {step === "policy" && (
              <>
                <div className="bg-orange-50 p-3 rounded-lg">
                  🔁 Our refund policy depends on service type & cancellation time.
                </div>

                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={policyAccepted}
                    onChange={(e) => setPolicyAccepted(e.target.checked)}
                  />
                  I accept the refund policy
                </label>

                <button
                  disabled={!policyAccepted}
                  onClick={() => setStep("refundForm")}
                  className="w-full bg-orange-500 disabled:bg-gray-300 text-white py-2 rounded-lg"
                >
                  Request Refund
                </button>

                <BookingCTA service={service} onBook={goToBooking} />
              </>
            )}

            {/* Refund Form */}
            {step === "refundForm" && (
              <>
                <input className="w-full border p-2 rounded" placeholder="Booking ID" />
                <input className="w-full border p-2 rounded" placeholder="Phone / Email" />

                <button
                  onClick={() => setStep("refundSuccess")}
                  className="w-full bg-orange-600 text-white py-2 rounded-lg"
                >
                  Submit Refund Request
                </button>

                <BookingCTA service={service} onBook={goToBooking} />
              </>
            )}

            {/* Refund Success */}
            {step === "refundSuccess" && (
              <>
                <div className="bg-green-50 p-3 rounded-lg">
                  ✅ Thank you! Our team will contact you shortly.
                </div>
                <BookingCTA service={service} onBook={goToBooking} />
              </>
            )}

            {/* Service Redirect */}
            {step === "service" && (
              <>
                <div className="bg-orange-50 p-3 rounded-lg">
                  Redirecting you to our help page for <b>{service}</b>
                </div>

                <button
                  onClick={() => router.push(`/help/${service.toLowerCase()}`)}
                  className="w-full bg-orange-600 text-white py-2 rounded-lg"
                >
                  Go to Help Page
                </button>

                <BookingCTA service={service} onBook={goToBooking} />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

/* 🔔 Reusable Booking CTA */
function BookingCTA({
  service,
  onBook,
}: {
  service: string;
  onBook: () => void;
}) {
  if (!service) return null;

  return (
    <button
      onClick={onBook}
      className="w-full mt-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white py-2 rounded-lg font-semibold hover:shadow-md transition"
    >
      🧾 Book {service} Now
    </button>
  );
}
