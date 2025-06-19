import React from 'react';
import { MapPin, Camera, Mountain, Waves } from 'lucide-react';
import { destinations } from '../data/initialData';

export default function Destinations() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Discover Sri Lanka</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            From ancient kingdoms to pristine beaches, explore the diverse landscapes and rich culture of the Pearl of the Indian Ocean
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {destinations.map((destination) => (
              <div key={destination.id} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center mb-3">
                      <MapPin className="h-5 w-5 text-emerald-400 mr-2" />
                      <h2 className="text-3xl font-bold">{destination.name}</h2>
                    </div>
                    <p className="text-lg mb-6 opacity-90">{destination.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-emerald-400">Popular Activities</h3>
                      <div className="flex flex-wrap gap-2">
                        {destination.activities.map((activity, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-emerald-400">Must-Visit Highlights</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {destination.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center">
                            <Camera className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">More Amazing Places</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sri Lanka is full of incredible destinations waiting to be explored
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg"
                alt="Yala National Park"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Yala National Park</h3>
                <p className="text-gray-600 mb-4">Home to the highest concentration of leopards in the world</p>
                <div className="flex items-center text-emerald-600">
                  <Mountain className="h-4 w-4 mr-2" />
                  <span className="text-sm font-semibold">Wildlife Safari</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg"
                alt="Mirissa Beach"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mirissa Beach</h3>
                <p className="text-gray-600 mb-4">Perfect for whale watching and pristine beach relaxation</p>
                <div className="flex items-center text-blue-600">
                  <Waves className="h-4 w-4 mr-2" />
                  <span className="text-sm font-semibold">Beach & Marine Life</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg"
                alt="Adam's Peak"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Adam's Peak</h3>
                <p className="text-gray-600 mb-4">Sacred mountain with breathtaking sunrise views</p>
                <div className="flex items-center text-orange-600">
                  <Mountain className="h-4 w-4 mr-2" />
                  <span className="text-sm font-semibold">Pilgrimage & Hiking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Your Visit */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let us help you plan the perfect itinerary to experience the best of Sri Lanka's destinations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tour-packages"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              View Tour Packages
            </a>
            <a
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Plan Custom Trip
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}