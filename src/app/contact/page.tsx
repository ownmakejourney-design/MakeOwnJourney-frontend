"use client";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {  
    const {name,value}=e.target;
    console.log(name,value);
    setContactForm(prevForm => ({ 
      ...contactForm,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    message.success("Form submitted successfully!");
  };


  return (
    <div className="min-h-screen bg-gray-100">
      {/* HERO SECTION */}
      <div className="h-64 md:h-80 bg-black flex items-center justify-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-lg">
          {/* LEFT SIDE – IMAGE + DETAILS */}
          <div
            className="relative bg-cover bg-center p-8 text-white"
            style={{backgroundImage: "url('/contactus.jpg')"}}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
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

          {/* RIGHT SIDE – FORM */}
          <div className="bg-white p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>

            <form className="space-y-4" onSubmit={handleSubmit} >
              <div>
                <label className="block mb-1">Name</label>
                <input type="text" className="w-full border rounded-md p-2"
                onChange={handleChange}
                 />
              </div>

              <div>
                <label className="block mb-1">Email</label>
                <input type="email" className="w-full border rounded-md p-2"
                onChange={handleChange}
                 />
              </div>

              <div>
                <label className="block mb-1">Subject</label>
                <input type="text" className="w-full border rounded-md p-2" 
                onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-1">Message</label>
                <textarea className="w-full border rounded-md p-2" 
                onChange={handleChange}
                ></textarea>
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
