import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, MapPin, Clock, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { destinations } from '../data/initialData';

export default function Home() {
  const { state } = useApp();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  


  const featuredPackages = state.packages.filter(pkg => pkg.featured);
  const featuredDestinations = destinations.slice(0, 3);
  const featuredBlog = state.blogPosts.filter(post => post.featured).slice(0, 2);

  if (loading) {
    // Simple skeleton loader for the whole page
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-100 flex flex-col items-center justify-center animate-fade-in">
        <div className="w-3/4 max-w-2xl h-32 bg-emerald-100 rounded-2xl mb-8 animate-pulse" />
        <div className="w-2/3 max-w-xl h-8 bg-emerald-100 rounded mb-4 animate-pulse" />
        <div className="w-1/2 max-w-md h-8 bg-emerald-100 rounded mb-8 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-80 bg-emerald-100 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900/70 to-emerald-900/70">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-emerald-900/70" />
        
        <div className="relative text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover
            <span className="text-emerald-400"> Sri Lanka</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Experience the pearl of the Indian Ocean with unforgettable adventures, 
            rich culture, and breathtaking landscapes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tour-packages"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/destinations"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Destinations
            </Link>
          </div>
        </div>
      </section>

      

      {/* Stats Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg">Tour Packages</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-lg">Destinations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5★</div>
              <div className="text-lg">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most breathtaking locations in Sri Lanka, each offering unique experiences and unforgettable memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <div key={destination.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold text-lg"
            >
              View All Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Tour Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully crafted experiences that showcase the best of Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${pkg.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="flex items-center text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.activities.slice(0, 3).map((activity, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {activity}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">4.9 (124 reviews)</span>
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

          <div className="text-center mt-12">
            <Link
              to="/tour-packages"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold text-lg"
            >
              View All Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block text-emerald-400 font-semibold mb-4 tracking-wider">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-300">Planet Holiday</span> Difference
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We're committed to providing exceptional travel experiences with personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Expert Local Guides",
                description: "Our experienced guides share insider knowledge and authentic local experiences",
                bg: "from-purple-500 to-blue-500"
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Customized Itineraries",
                description: "Tailored tours that match your interests, budget, and travel style",
                bg: "from-emerald-500 to-teal-500"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "24/7 Support",
                description: "Round-the-clock assistance to ensure your trip goes smoothly",
                bg: "from-amber-500 to-orange-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10 blur-md group-hover:blur-lg"></div>
                <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300">
                  <div className={`bg-gradient-to-r ${feature.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">{feature.title}</h3>
                  <p className="opacity-90 text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            
          

      {/* Latest Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Travel Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get inspired by our travel guides and insider tips for your Sri Lankan adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBlog.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-emerald-600 font-semibold mb-2">
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold text-lg"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}