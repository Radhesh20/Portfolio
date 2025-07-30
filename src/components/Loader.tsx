import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING...');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        
        if (newProgress >= 100) {
          setLoadingText('WELCOME');
          clearInterval(interval);
        } else if (newProgress >= 80) {
          setLoadingText('ALMOST READY...');
        } else if (newProgress >= 50) {
          setLoadingText('LOADING ASSETS...');
        }
        
        return newProgress;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        {/*[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))*/}
      </div>
      
      <div className="relative z-10 text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 border-4 border-transparent border-t-cyan-400 border-b-pink-500 rounded-full animate-spin mx-auto">
            <div className="absolute inset-2 border-4 border-transparent border-t-pink-500 border-b-cyan-400 rounded-full animate-spin animation-direction-reverse"></div>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="w-64 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <p className="text-white text-xl font-light tracking-widest animate-pulse">
          {loadingText}
        </p>
        
        <div className="mt-4 text-cyan-400 text-sm font-mono">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Loader;