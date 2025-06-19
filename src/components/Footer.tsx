import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold">Planet Holiday</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for unforgettable Sri Lankan adventures. Discover the pearl of the Indian Ocean with us.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-emerald-400 transition-colors">Destinations</Link></li>
              <li><Link to="/tour-packages" className="text-gray-300 hover:text-emerald-400 transition-colors">Tour Packages</Link></li>
              <li><Link to="/activities" className="text-gray-300 hover:text-emerald-400 transition-colors">Activities</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors">Travel Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-emerald-400 transition-colors">FAQ</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-emerald-400 transition-colors">Reviews</Link></li>
              <li><Link to="/book-now" className="text-gray-300 hover:text-emerald-400 transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">123 Galle Road, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">+94 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">info@planetholiday.lk</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Planet Holiday. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-300 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-300 hover:text-emerald-400 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}