import { useState } from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800',
    alt: 'Students collaborating',
    category: 'Academic',
    size: 'large',
  },
  {
    src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
    alt: 'Science lab',
    category: 'Labs',
    size: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=800',
    alt: 'Sports day',
    category: 'Sports',
    size: 'medium',
  },
  {
    src: 'https://images.unsplash.com/photo-1526253038957-bce54e05968e?auto=format&fit=crop&q=80&w=800',
    alt: 'Music performance',
    category: 'Arts',
    size: 'large',
  },
  {
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
    alt: 'Library',
    category: 'Academic',
    size: 'medium',
  },
  {
    src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    alt: 'Art class',
    category: 'Arts',
    size: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800',
    alt: 'Chemistry lab',
    category: 'Labs',
    size: 'medium',
  },
  {
    src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
    alt: 'Classroom discussion',
    category: 'Academic',
    size: 'large',
  },
];

const categories = ['All', 'Academic', 'Sports', 'Arts', 'Labs'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = images.filter(
    (image) => activeCategory === 'All' || image.category === activeCategory
  );

  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Gallery</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Life at Viswam
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our vibrant campus life through these captured moments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`break-inside-avoid relative group cursor-pointer
                ${image.size === 'large' ? 'h-96' : image.size === 'medium' ? 'h-72' : 'h-48'}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <p className="text-lg font-semibold">{image.alt}</p>
                  <p className="text-sm mt-2">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}