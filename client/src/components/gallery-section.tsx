export default function GallerySection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Makeup transformation"
    },
    {
      src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Bridal hairstyle"
    },
    {
      src: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Hair coloring"
    },
    {
      src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Facial treatment"
    },
    {
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Nail art"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Beauty academy training"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600">
            Discover our artistry through these stunning transformations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group-hover:scale-105 transform transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
