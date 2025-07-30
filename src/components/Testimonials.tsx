import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sampleTestimonials = [
    {
      id: 1,
      name: 'Kishore',
      position: 'Student- Masters.',
      rating: 5,
      text: 'Radhesh delivered an exceptional web application that exceeded our expectations. The project was completed on time and within budget.',
      project: 'Library Management System'
    },
    {
      id: 2,
      name: 'Jonnie Jackson',
      position: 'Content Creator - VoxCrime',
      rating: 5,
      text: 'The logo design that Radhesh created for us perfectly captured our vision. The final result was simple and minimalistic yet captures the essence of our content.',
      project: 'Logo and Brand Identity Design'
    },
    {
      id: 3,
      name: 'Vasanth',
      position: 'Event Co-ordinator',
      rating: 5,
      text: 'Radhesh\'s certificate designs for our recent workshop event were truly exceptional. They added a professional touch, enhances the overall prestige of the event.',
      project: 'Event Certificate Design'
    },
    {
      id: 4,
      name: 'Avinesh',
      position: 'Content Creator',
      rating: 5,
      text: "Radhesh's YouTube thumbnails for my Free Fire tournament practice live streams were phenomenal. He truly understands the pulse of gaming content design!",
      project: 'YouTube Thumbnail Design'
    }
  ];

  useEffect(() => {
    // Initialize testimonials directly from sampleData, no localStorage involved
    setTestimonials(sampleTestimonials);
  }, []); // Empty dependency array means this runs only once on mount

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]); // Re-run if testimonials length changes (e.g., after initial load)

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  if (testimonials.length === 0) {
    return null; // Or a loading spinner
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Client <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700 relative overflow-hidden">
            {/* Background Quote Icon */}
            <div className="absolute top-4 right-4 text-cyan-400/10">
              <Quote size={80} />
            </div>

            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-300 text-center mb-8 leading-relaxed italic">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                {/* Removed the avatar image and its onError fallback */}
                <div className="text-center">
                  <h4 className="text-white font-bold text-lg">{currentTestimonial.name}</h4>
                  <p className="text-gray-400">{currentTestimonial.position}</p>
                  <p className="text-cyan-400 text-sm font-medium">{currentTestimonial.project}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full hover:bg-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full hover:bg-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-400 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;