"use client";

import api from "@/server/api";
import {message} from "antd";
import {useState} from "react";

const ContactPage = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = e.target;
    console.log(name, value);
    setContactForm({ ...contactForm,[name]: value});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Form Data:", contactForm);
      const res = await api.post("/contact", contactForm);
      console.log("Response:", res.data);
    } catch (error) {
      message.error("Failed to submit form.");
    }
    message.success("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100"> 
      <div className="h-64 md:h-80 bg-black flex items-center justify-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-lg">
  
          <div
            className="relative bg-cover bg-center p-8 text-white"
            style={{backgroundImage: "url('/contactus.jpg')"}}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-6">
                We’re here to help you connect, ask questions, and build
                meaningful journeys together with trusted support.
              </p>

              <ul className="space-y-4">
                <li>
                  <strong>Email:</strong> support@yourwebsite.com
                </li>
                <li>
                  <strong>Phone:</strong> +91 98765 43210
                </li>
                <li>
                  <strong>Address:</strong> Your City, India
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    className="w-full border rounded-md p-2"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactForm.phone}
                    className="w-full border rounded-md p-2"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  className="w-full border rounded-md p-2"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  Subject
                </label>
                <select
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                >
                  <option value="">-- Select Subject --</option>
                  <option value="PACKAGE_RELATED">Package Related</option>
                  <option value="VISA_ENQUIRY">Visa Enquiry</option>
                  <option value="INSURANCE_ENQUIRY">Insurance Enquiry</option>
                  <option value="TICKET_BOOKING">Ticket Booking</option>
                  <option value="REFUND_POLICY">Refund & Policy</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  rows={4}
                  className="w-full border rounded-md p-2 resize-none"
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
