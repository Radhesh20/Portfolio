import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';


const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const nameRef = useRef(null);
  const words = ['Full-Stack Developer', 'Mobile App Engineer', 'UI/UX Designer', 'Problem Solver'];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 20 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 300);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  // GSAP-like animations
useEffect(() => {
  const animateElements = () => {
    if (nameRef.current) {
      const letters = nameRef.current.querySelectorAll('.letter');
      letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`;
        letter.classList.add('animate-letter-in');
      });
    }
  };
  animateElements();
}, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/5 to-pink-500/10"></div>
    {/* Animated Grid */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0" style={{
      backgroundImage: `
        linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
      animation: 'pulse 4s ease-in-out infinite'
    }}></div>
  </div>
  {/* Floating Elements */}
  <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-float opacity-60"></div>
  <div className="absolute top-40 right-32 w-3 h-3 bg-pink-500 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
  <div className="absolute bottom-32 left-32 w-5 h-5 bg-purple-400 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
  <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-300 rounded-full animate-float opacity-70" style={{ animationDelay: '0.5s' }}></div>
                
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-cyan-400/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-pink-500/30 rotate-12 animate-spin" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-purple-400/20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-cyan-300/30 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold whitespace-nowrap">
            <span ref={nameRef} className="text-white tracking-tight">
              {'RADHESH'.split('').map((letter, index) => (
                <span 
                  key={index} 
                  className="letter cursor-pointer"
                  style={{ 
                    letterSpacing: '0.1em'
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
            {' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight gradient-text">
  {'KUMAR'.split('').map((letter, index) => {
    const letterClasses = [
      'kumar-entrance-k kumar-k',
      'kumar-entrance-u kumar-u', 
      'kumar-entrance-m kumar-m',
      'kumar-entrance-a kumar-a',
      'kumar-entrance-r kumar-r'
    ];
    
    return (
      <span 
        key={index} 
        className={`kumar-letter ${letterClasses[index]}`}
        style={{ 
          letterSpacing: '0.1em'
        }}
      >
        {letter}
      </span>
    );
  })}
</span>
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
              <span className="border-r-2 border-cyan-400 pr-1 animate-pulse">
                {text}
              </span>
            </p>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences through innovative web development, 
            mobile applications, and creative design solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Explore My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-cyan-400 transition-colors duration-200"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;