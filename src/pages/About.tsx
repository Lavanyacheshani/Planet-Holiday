import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Planet Holiday</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted partner for unforgettable Sri Lankan adventures since 2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Planet Holiday was born from a passion for sharing the incredible beauty and rich culture of Sri Lanka with the world. Founded by a team of local travel enthusiasts, we understand the island like no one else.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we've welcomed thousands of travelers from around the globe, each leaving with memories that last a lifetime. Our commitment to authentic experiences and exceptional service has made us one of Sri Lanka's most trusted travel partners.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe travel should be transformative, connecting you with new cultures, landscapes, and perspectives while creating lasting friendships along the way.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg"
                alt="Sri Lankan landscape"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create extraordinary travel experiences that showcase the authentic beauty, culture, and warmth of Sri Lanka while supporting local communities and preserving our natural heritage.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading sustainable tourism company in Sri Lanka, recognized for exceptional service, authentic experiences, and positive impact on local communities and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Planet Holiday?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a travel agency – we're your gateway to authentic Sri Lankan experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">Born and raised in Sri Lanka, we know every hidden gem and secret spot</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Award Winning</h3>
              <p className="text-gray-600">Recognized for excellence in tourism and customer service</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Care</h3>
              <p className="text-gray-600">Every itinerary is crafted with your interests and preferences in mind</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Tourism</h3>
              <p className="text-gray-600">Committed to responsible travel that benefits local communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate travel experts dedicated to making your Sri Lankan adventure unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="Rajesh Perera"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rajesh Perera</h3>
              <p className="text-emerald-600 font-semibold mb-4">Founder & CEO</p>
              <p className="text-gray-600">With 15+ years in tourism, Rajesh is passionate about showcasing Sri Lanka's hidden treasures.</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                alt="Priya Silva"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Priya Silva</h3>
              <p className="text-emerald-600 font-semibold mb-4">Operations Manager</p>
              <p className="text-gray-600">Priya ensures every detail of your journey is perfectly planned and executed.</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                alt="Kamal Fernando"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kamal Fernando</h3>
              <p className="text-emerald-600 font-semibold mb-4">Head Guide</p>
              <p className="text-gray-600">Kamal's encyclopedic knowledge of Sri Lankan history and culture enriches every tour.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Authenticity</h3>
              <p className="opacity-90">We provide genuine, unfiltered experiences that showcase the real Sri Lanka</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="opacity-90">We strive for perfection in every aspect of your travel experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="opacity-90">We're committed to responsible tourism that preserves Sri Lanka for future generations</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="opacity-90">We support local communities and contribute to their economic development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}