import React from 'react';
import { MapPin, Camera, Mountain, Waves, Binary as Binoculars, TreePine } from 'lucide-react';
import { activities } from '../data/initialData';

const iconMap = {
  'wildlife-safari': Binoculars,
  'whale-watching': Waves,
  'hiking': Mountain,
  'cultural-tours': Camera,
};

export default function Activities() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Things to Do</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover amazing activities and adventures that make Sri Lanka an unforgettable destination
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {activities.map((activity) => {
              const IconComponent = iconMap[activity.id as keyof typeof iconMap] || Camera;
              
              return (
                <div key={activity.id} className="group">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-center mb-4">
                        <div className="bg-emerald-600 p-3 rounded-full mr-4">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <h2 className="text-3xl font-bold">{activity.name}</h2>
                      </div>
                      
                      <p className="text-lg mb-6 opacity-90">{activity.description}</p>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-emerald-400">Popular Locations</h3>
                        <div className="flex flex-wrap gap-3">
                          {activity.locations.map((location, idx) => (
                            <div key={idx} className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                              <MapPin className="h-4 w-4 text-emerald-400 mr-2" />
                              <span className="text-sm">{location}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Activities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">More Adventures Await</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sri Lanka offers countless opportunities for adventure and discovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Water Sports</h3>
              <p className="text-gray-600">Surfing, snorkeling, diving, and water skiing along pristine coastlines</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nature Walks</h3>
              <p className="text-gray-600">Guided walks through rainforests, botanical gardens, and nature reserves</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Photography Tours</h3>
              <p className="text-gray-600">Capture stunning landscapes, wildlife, and cultural moments with expert guides</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rock Climbing</h3>
              <p className="text-gray-600">Scale ancient rock formations and cliffs with experienced climbing guides</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Binoculars className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bird Watching</h3>
              <p className="text-gray-600">Spot endemic species and migratory birds in diverse ecosystems</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Spice Gardens</h3>
              <p className="text-gray-600">Learn about Ceylon spices and traditional cultivation methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Adventure?</h2>
          <p className="text-xl mb-8">
            Choose from our curated tour packages or let us create a custom adventure just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tour-packages"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              View Tour Packages
            </a>
            <a
              href="/book-now"
              className="border-2 border-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}