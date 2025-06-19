import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function TourPackages() {
  const { state } = useApp();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Tour Packages</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Carefully crafted experiences that showcase the best of Sri Lanka's culture, nature, and adventure
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {state.packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                    ${pkg.price}
                  </div>
                  {pkg.featured && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="flex items-center text-gray-500 mb-6">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="font-medium">{pkg.duration}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Included Activities:</h4>
                    <div className="space-y-2">
                      {pkg.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">(124 reviews)</span>
                    </div>
                    <Link
                      to="/book-now"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Package?</h2>
          <p className="text-xl mb-8">
            Can't find exactly what you're looking for? Let us create a personalized itinerary just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/activities"
              className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Browse Activities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}