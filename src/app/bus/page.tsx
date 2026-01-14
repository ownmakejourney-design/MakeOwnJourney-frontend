'use client';

import { useState } from 'react';
import { ArrowLeftRight, Calendar, Shield, Tag, X } from 'lucide-react';
import About from '@/components/bus/About';

export default function BusBooking() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: new Date().toISOString().split('T')[0]
  });

  const [showCalendar, setShowCalendar] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<'feature' | 'submitted'>('feature');

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // API call structure (ready for future implementation)
    try {
      // const response = await fetch('/api/bus/search', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // const data = await response.json();
      
      setPopupType('submitted');
      setShowPopup(true);
      console.log('Booking Data:', formData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      date: e.target.value
    });
  };

  const handleSwap = () => {
    setFormData({
      ...formData,
      from: formData.to,
      to: formData.from
    });
  };

  const handleQuickDateSelect = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    setFormData({
      ...formData,
      date: date.toISOString().split('T')[0]
    });
  };

  const handleCardClick = () => {
    setPopupType('feature');
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full">
              <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                {/* FROM Field */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-2 uppercase">
                    From
                  </label>
                  <input
                    type="text"
                    name="from"
                    value={formData.from}
                    onChange={handleInputChange}
                    placeholder="Enter Source"
                    className="w-full px-4 py-3 text-lg font-semibold border-b-2 border-gray-300 focus:border-orange-500 focus:outline-none placeholder-gray-400"
                    required
                  />
                </div>

                {/* Swap Button */}
                <div className="flex justify-center -my-3">
                  <button
                    type="button"
                    onClick={handleSwap}
                    className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors"
                  >
                    <ArrowLeftRight size={20} className="text-gray-600" />
                  </button>
                </div>

                {/* TO Field */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-2 uppercase">
                    To
                  </label>
                  <input
                    type="text"
                    name="to"
                    value={formData.to}
                    onChange={handleInputChange}
                    placeholder="Enter Destination"
                    className="w-full px-4 py-3 text-lg font-semibold border-b-2 border-gray-300 focus:border-orange-500 focus:outline-none placeholder-gray-400"
                    required
                  />
                </div>

            
                <div className="flex-grow">
                  <label className="block text-xs font-medium text-gray-500 mb-2">
                    Travel Date
                  </label>
                  
                  
                  <div className="text-xl font-bold text-gray-800 mb-3">
                    {formatDate(formData.date)}
                  </div>
                  
                 
                  <div className="flex gap-3 mb-3">
                    <button
                      type="button"
                      onClick={() => handleQuickDateSelect(0)}
                      className={`flex-1 px-4 py-2 rounded-lg border-2 transition-all ${
                        formData.date === new Date().toISOString().split('T')[0]
                          ? 'border-orange-500 bg-orange-50 text-orange-600 font-semibold'
                          : 'border-gray-300 text-gray-700 hover:border-orange-300'
                      }`}
                    >
                      Today
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickDateSelect(1)}
                      className={`flex-1 px-4 py-2 rounded-lg border-2 transition-all ${
                        formData.date === new Date(Date.now() + 86400000).toISOString().split('T')[0]
                          ? 'border-orange-500 bg-orange-50 text-orange-600 font-semibold'
                          : 'border-gray-300 text-gray-700 hover:border-orange-300'
                      }`}
                    >
                      Tomorrow
                    </button>
                  </div>

                  {/* Calendar Input */}
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleDateChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none cursor-pointer"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-full transition-colors shadow-lg uppercase tracking-wide mt-auto"
                >
                  Search Bus
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Promotional Cards */}
          <div className="lg:col-span-1 space-y-6 flex flex-col">
            {/* goSafe Card */}
            <div 
              onClick={handleCardClick}
              className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 lg:p-8 text-white cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 lg:gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 lg:p-4 flex-shrink-0">
                  <Shield size={40} className="text-white lg:w-12 lg:h-12" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-3">Travel safely with goSafe</h2>
                  <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                    Get assured safety environment & practices along safety guidelines. choose from a wide selection and ensure safety
                  </p>
                </div>
              </div>
            </div>

            {/* Promotional Banners */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              {/* Sale Banner */}
              <div 
                onClick={handleCardClick}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="relative h-48 bg-gradient-to-r from-blue-400 to-blue-500 flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=200&fit=crop"
                    alt="Bus"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-500 text-white px-6 py-3 rounded-lg transform -rotate-3">
                      <div className="text-xs font-bold">Akhad Bakhad</div>
                      <div className="text-2xl font-black">GHUMAKKAD</div>
                      <div className="text-lg font-bold">SALE</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    Craziest Price Drop Ever: Buses starting @ ₹99!
                  </h3>
                  <p className="text-sm text-gray-500">Valid till: 26th Jan'26</p>
                </div>
              </div>

              {/* Assured Ride Banner */}
              <div 
                onClick={handleCardClick}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="relative h-48 bg-gradient-to-r from-orange-400 to-orange-500 flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=200&fit=crop"
                    alt="Assured"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-4xl font-black">
                      go<span className="text-red-500">ASSURED</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    Get Assured Bus Ride or 2x Refund.
                  </h3>
                  <p className="text-sm text-gray-500">Valid till: Limited Period</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            {popupType === 'feature' ? (
              // Feature Unlock Popup
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={40} className="text-orange-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Feature Coming Soon!
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    This feature will be unlocked soon. Stay tuned for exciting updates!
                  </p>
                </div>
                <button
                  onClick={closePopup}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Got It
                </button>
              </div>
            ) : (
             
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg 
                      className="w-10 h-10 text-yellow-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Under Maintenance
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    We have received your details. Our team will contact you as soon as possible.
                  </p>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700">
                      <strong>From:</strong> {formData.from}<br />
                      <strong>To:</strong> {formData.to}<br />
                      <strong>Date:</strong> {formatDate(formData.date)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closePopup}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    <About/>
    </>
  );
}