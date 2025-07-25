import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sampleTestimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Radhesh delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise are remarkable. The project was completed on time and within budget.',
      project: 'E-commerce Platform'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Founder, AppVenture',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Working with Radhesh was a game-changer for our mobile app development. His innovative approach and problem-solving skills helped us create a user-friendly application that our customers love.',
      project: 'Mobile App Development'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director, CreativeFlow',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The logo and brand identity design that Radhesh created for us perfectly captured our vision. His creative process is collaborative and the final result was beyond what we imagined.',
      project: 'Brand Identity Design'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Small Business Owner',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Radhesh transformed our social media presence with stunning Instagram post designs. Our engagement rates increased by 300% after implementing his creative solutions.',
      project: 'Social Media Design'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Content Creator',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The YouTube thumbnails Radhesh designed for my channel significantly improved my click-through rates. His understanding of visual psychology and design trends is impressive.',
      project: 'YouTube Thumbnail Design'
    }
  ];

  useEffect(() => {
    // Load testimonials from localStorage or use sample data
    const savedTestimonials = localStorage.getItem('portfolioTestimonials');
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    } else {
      setTestimonials(sampleTestimonials);
      localStorage.setItem('portfolioTestimonials', JSON.stringify(sampleTestimonials));
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  if (testimonials.length === 0) {
    return null;
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
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                />
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