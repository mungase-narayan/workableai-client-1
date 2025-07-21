import TextType from '@/components/shared/text-type';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='flex flex-col items-center justify-center min-h-screen text-center max-w-6xl mx-auto'>

          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-semibold mb-4 leading-tight font-heading'>
              <span className='text-white block'>We make you sure you become</span>
              <TextType
                text={["Frontend Developer", "Backend Developer"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="_"
                useGradient={true}
              />
            </h1>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className='text-lg md:text-md text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light font-body'>
              Connect with top-tier projects, build your portfolio with real-world experience,
              and master the skills that prepare you for professional development success.
            </p>
          </div>

          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className='flex flex-col sm:flex-row gap-3 justify-center'>

              <button className='group relative cursor-pointer px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/25 font-cta'>
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' />
                  </svg>
                  Start Learning
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
              </button>

              <button className='group cursor-pointer px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg transform transition-all duration-300 hover:border-gray-400 hover:text-white hover:scale-105 font-cta'>
                <span className='flex items-center justify-center gap-2'>
                  View Projects
                  <svg className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                  </svg>
                </span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;