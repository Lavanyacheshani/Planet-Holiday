import React from 'react';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../data/initialData';

export default function Reviews() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Customer Reviews</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Hear from travelers who have experienced the magic of Sri Lanka with Planet Holiday
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl shadow-lg p-8 relative">
                <Quote className="h-8 w-8 text-emerald-600 mb-4" />
                
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  "{review.comment}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-gray-600 text-sm">{review.country}</p>
                    <p className="text-gray-500 text-xs">{new Date(review.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Reviews */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">More Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read what our customers say about their unforgettable Sri Lankan adventures
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-600">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                "Planet Holiday exceeded our expectations in every way. The cultural triangle tour was perfectly organized, and our guide Kamal was incredibly knowledgeable. We saw amazing wildlife, learned about Sri Lankan history, and made memories that will last a lifetime."
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 font-bold text-xl">JD</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">John & Diana Roberts</h4>
                  <p className="text-gray-600">Canada • Cultural Triangle Explorer Package</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                "As a solo female traveler, I felt completely safe and well-cared for throughout my Sri Lankan adventure. The hill country package was absolutely magical - the tea plantations, train rides, and hiking were incredible. Planet Holiday's attention to detail is outstanding."
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-xl">AL</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Anna Lopez</h4>
                  <p className="text-gray-600">Spain • Hill Country Adventure Package</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                "Our family vacation to Sri Lanka was absolutely perfect! Planet Holiday arranged everything flawlessly - from comfortable accommodations to exciting wildlife safaris. Our kids loved seeing elephants and leopards, and we appreciated the cultural experiences. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-xl">MF</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">The Martinez Family</h4>
                  <p className="text-gray-600">USA • Wildlife Safari Package</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Own Story?</h2>
          <p className="text-xl mb-8">
            Join hundreds of satisfied travelers and experience the magic of Sri Lanka with Planet Holiday
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tour-packages"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              View Packages
            </a>
            <a
              href="/book-now"
              className="border-2 border-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Book Your Trip
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}