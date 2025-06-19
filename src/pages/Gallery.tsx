import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
    title: 'Sigiriya Rock Fortress',
    category: 'Cultural Sites',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg',
    title: 'Tea Plantations in Ella',
    category: 'Landscapes',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
    title: 'Galle Fort Coastline',
    category: 'Beaches',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg',
    title: 'Leopard in Yala National Park',
    category: 'Wildlife',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg',
    title: 'Whale Watching in Mirissa',
    category: 'Wildlife',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    title: 'Traditional Sri Lankan Cuisine',
    category: 'Culture',
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/5219513/pexels-photo-5219513.jpeg',
    title: 'Colombo City Skyline',
    category: 'Cities',
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
    title: 'Temple of the Tooth, Kandy',
    category: 'Cultural Sites',
  },
];

const categories = ['All', 'Cultural Sites', 'Landscapes', 'Beaches', 'Wildlife', 'Culture', 'Cities'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = filteredImages.find(img => img.id === selectedImage);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore the breathtaking beauty of Sri Lanka through our curated collection of images
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            {/* Image */}
            <img
              src={selectedImageData.src}
              alt={selectedImageData.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 text-white bg-black/50 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-bold text-xl">{selectedImageData.title}</h3>
              <p className="text-gray-300">{selectedImageData.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Own Memories?</h2>
          <p className="text-xl mb-8">
            Join us on an unforgettable journey through Sri Lanka's most spectacular destinations
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