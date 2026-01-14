'use client';

import { useState } from 'react';
import { Globe, Send, Check, ChevronDown, ChevronUp, MapPin, Clock, DollarSign, FileText } from 'lucide-react';

export default function VisaApplicationPage() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    visaType: '',
    travelDate: '',
    message: ''
  });

  // Popular Countries with Visa Information
  const countries = [
    {
      name: 'United States',
      flag: '🇺🇸',
      types: ['Tourist (B1/B2)', 'Student (F1)', 'Work (H1B)', 'Business'],
      processingTime: '10-15 days',
      price: '$160 - $190',
      popular: true,
      requirements: ['Valid Passport', 'DS-160 Form', 'Interview', 'Photo', 'Financial Proof']
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      types: ['Tourist', 'Student', 'Work Permit', 'Express Entry'],
      processingTime: '15-30 days',
      price: 'CAD $100 - $150',
      popular: true,
      requirements: ['Valid Passport', 'Biometrics', 'Financial Proof', 'Travel History']
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      types: ['Standard Visitor', 'Student', 'Work', 'Business'],
      processingTime: '15-20 days',
      price: '£95 - £200',
      popular: true,
      requirements: ['Valid Passport', 'Financial Proof', 'Accommodation', 'Travel Insurance']
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      types: ['Tourist (600)', 'Student (500)', 'Skilled Work', 'Business'],
      processingTime: '15-30 days',
      price: 'AUD $145 - $285',
      popular: true,
      requirements: ['Valid Passport', 'Health Insurance', 'Financial Proof', 'English Proficiency']
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      types: ['Schengen Tourist', 'Student', 'Work', 'Job Seeker'],
      processingTime: '10-15 days',
      price: '€80 - €100',
      popular: true,
      requirements: ['Valid Passport', 'Travel Insurance', 'Hotel Booking', 'Financial Proof']
    },
    {
      name: 'Dubai (UAE)',
      flag: '🇦🇪',
      types: ['Tourist', 'Business', 'Transit', 'Visit'],
      processingTime: '3-5 days',
      price: 'AED 250 - 350',
      popular: true,
      requirements: ['Valid Passport', 'Photo', 'Hotel Booking', 'Return Ticket']
    },
    {
      name: 'Singapore',
      flag: '🇸🇬',
      types: ['Tourist', 'Business', 'Student', 'Work'],
      processingTime: '3-5 days',
      price: 'SGD $30 - $50',
      popular: false,
      requirements: ['Valid Passport', 'Photo', 'Financial Proof', 'Travel Itinerary']
    },
    {
      name: 'Japan',
      flag: '🇯🇵',
      types: ['Tourist', 'Business', 'Student', 'Work'],
      processingTime: '5-7 days',
      price: '¥3000 - ¥6000',
      popular: false,
      requirements: ['Valid Passport', 'Application Form', 'Photo', 'Financial Proof']
    },
    {
      name: 'France',
      flag: '🇫🇷',
      types: ['Schengen Tourist', 'Student', 'Work', 'Business'],
      processingTime: '10-15 days',
      price: '€80 - €100',
      popular: false,
      requirements: ['Valid Passport', 'Travel Insurance', 'Hotel Proof', 'Financial Documents']
    },
    {
      name: 'New Zealand',
      flag: '🇳🇿',
      types: ['Visitor', 'Student', 'Work', 'Residence'],
      processingTime: '15-20 days',
      price: 'NZD $165 - $245',
      popular: false,
      requirements: ['Valid Passport', 'Health Declaration', 'Financial Proof', 'Character Certificate']
    },
    {
      name: 'Switzerland',
      flag: '🇨🇭',
      types: ['Schengen Tourist', 'Student', 'Work', 'Business'],
      processingTime: '10-15 days',
      price: 'CHF 60 - 90',
      popular: false,
      requirements: ['Valid Passport', 'Travel Insurance', 'Accommodation Proof', 'Financial Proof']
    },
    {
      name: 'South Korea',
      flag: '🇰🇷',
      types: ['Tourist', 'Business', 'Student', 'Work'],
      processingTime: '5-10 days',
      price: '₩80,000 - ₩120,000',
      popular: false,
      requirements: ['Valid Passport', 'Application Form', 'Photo', 'Financial Proof']
    }
  ];

  const faqData = [
    {
      q: "How long does the visa application process take?",
      a: "The processing time varies by country and visa type. Tourist visas typically take 5-15 days, while student and work visas may take 15-60 days. We provide expedited services for urgent applications."
    },
    {
      q: "What documents are required for a visa application?",
      a: "Common requirements include a valid passport (6+ months validity), completed application form, recent photographs, financial proof, travel insurance, hotel bookings, and return tickets. Requirements vary by country and visa type."
    },
    {
      q: "Can I track my visa application status?",
      a: "Yes, once you submit your application, we provide a tracking number. You can check your application status online through our portal or contact our support team for updates."
    },
    {
      q: "What if my visa application gets rejected?",
      a: "If your application is rejected, we provide a detailed explanation of the reason. You can reapply after addressing the issues, or we can help you with the appeal process depending on the country's regulations."
    },
    {
      q: "Do I need travel insurance for my visa?",
      a: "Many countries, especially Schengen countries, require travel insurance as a mandatory document. We recommend getting comprehensive travel insurance that covers medical emergencies, trip cancellation, and lost baggage."
    },
    {
      q: "Can I apply for multiple country visas at once?",
      a: "Yes, you can apply for multiple visas simultaneously. However, each application is processed separately and has individual fees and requirements. We can help you manage multiple applications efficiently."
    },
    {
      q: "What is the validity period of a tourist visa?",
      a: "Tourist visa validity varies by country. Common durations are 30 days, 90 days, 6 months, or 1 year. Some countries offer multiple-entry visas valid for several years."
    },
    {
      q: "Are visa fees refundable if denied?",
      a: "Unfortunately, visa application fees are generally non-refundable, even if the application is denied. However, our service fees may be partially refundable depending on the stage of processing."
    }
  ];

  const handleCountrySelect = (countryName: string) => {
    setSelectedCountry(countryName);
    setFormData({ ...formData, country: countryName });
    setShowForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // API call structure
    try {
      // const response = await fetch('/api/visa/apply', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      alert('Your visa application has been submitted! Our team will contact you soon.');
      console.log('Form Data:', formData);

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        visaType: '',
        travelDate: '',
        message: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <Globe className="mx-auto mb-6" size={64} />
          <h1 className="text-5xl font-bold mb-4">Visa Application Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get your visa approved hassle-free. We provide comprehensive visa assistance for all major countries worldwide.
          </p>
        </div>
      </section>

      {/* Popular Countries Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Popular Visa Destinations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.filter(c => c.popular).map((country, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer transform hover:-translate-y-1"
                onClick={() => handleCountrySelect(country.name)}
              >
                <div className="bg-gradient-to-r from-orange-500 to-gray-800 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-5xl">{country.flag}</span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{country.name}</h3>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-2">
                    <FileText className="text-blue-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold mb-1">Visa Types</p>
                      <p className="text-sm text-gray-700">{country.types.slice(0, 2).join(', ')}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="text-green-500" size={18} />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">Processing Time</p>
                      <p className="text-sm text-gray-700">{country.processingTime}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <DollarSign className="text-orange-500" size={18} />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">Starting Price</p>
                      <p className="text-sm font-bold text-gray-800">{country.price}</p>
                    </div>
                  </div>

                  <button
                    className="w-full bg-gradient-to-r from-orange-500 to-white text-black font-semibold py-2 rounded-lg mt-4 transition-all duration-300 hover:from-orange-700 hover:to-orange-400 hover:text-white hover:shadow-lg"
                    onClick={() => handleCountrySelect(country.name)}
                  >
                    Apply Now
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Countries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Other Countries
          </h2>


          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {countries.filter(c => !c.popular).map((country, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 p-6 text-center cursor-pointer border border-gray-100 hover:border-blue-300"
                onClick={() => handleCountrySelect(country.name)}
              >
                <span className="text-4xl mb-3 block">{country.flag}</span>
                <h3 className="font-bold text-gray-800 mb-2">{country.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{country.processingTime}</p>
                <button
                  className="
    text-sm
    bg-gradient-to-r from-orange-500 to-white
    text-gray-
    px-4 py-2
    rounded-full
    font-semibold
    transition-all duration-300
    hover:from-orange-700 hover:to-orange-400
    hover:text-white
    hover:shadow-lg
  "
                >
                  Apply
                </button>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {showForm && (
        <section className="py-16" id="application-form">
          <div className="container mx-auto px-4 max-w-3xl ">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12   ">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center ">
                Visa Application Form
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Fill in your details below and our team will contact you shortly
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 1234567890"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    required
                  >
                    <option value="">Choose a country</option>
                    {countries.map((country, idx) => (
                      <option key={idx} value={country.name}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Visa Type *
                  </label>
                  <select
                    name="visaType"
                    value={formData.visaType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    required
                  >
                    <option value="">Select visa type</option>
                    {formData.country && countries.find(c => c.name === formData.country)?.types.map((type, idx) => (
                      <option key={idx} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Intended Travel Date *
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any specific requirements or questions..."
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-gray-800 text-white hover:from-orange-700 hover:to-gray-300 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqData.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {item.q}
                  </h3>
                  {expandedFAQ === i ? (
                    <ChevronUp className="text-blue-500 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                  )}
                </button>

                {expandedFAQ === i && (
                  <div className="px-6 pb-6">
                    <p className="text-base leading-relaxed text-gray-600">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us help you get your visa approved quickly and hassle-free
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-orange-500 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg text-lg"
          >
            Apply for Visa Now
          </button>
        </div>
      </section>
    </div>
  );
} 