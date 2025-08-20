import React from 'react';

interface TulipProps {
  isGrown: boolean;
  onFullyGrown: () => void;
}

const Tulip: React.FC<TulipProps> = ({ isGrown, onFullyGrown }) => {
  React.useEffect(() => {
    if (isGrown) {
      const timer = setTimeout(onFullyGrown, 1000);
      return () => clearTimeout(timer);
    }
  }, [isGrown, onFullyGrown]);

  return (
    <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
      {/* Stem */}
      <div 
        className={`relative bg-gradient-to-b from-green-500 to-green-700 transition-all duration-4000 ease-out ${
          isGrown ? 'h-40 w-2' : 'h-0 w-2'
        }`}
        style={{
          borderRadius: '0 0 4px 4px',
          transformOrigin: 'bottom center',
        }}
      />
      
      {/* Leaves */}
      <div 
        className={`absolute bottom-16 -left-4 w-8 h-12 bg-gradient-to-br from-green-400 to-green-600 transition-all duration-2500 delay-1500 ${
          isGrown ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
        style={{
          clipPath: 'ellipse(40% 80% at 50% 100%)',
          transform: 'rotate(-20deg)',
          transformOrigin: 'bottom center',
        }}
      />
      
      <div 
        className={`absolute bottom-20 -right-3 w-6 h-10 bg-gradient-to-bl from-green-400 to-green-600 transition-all duration-2500 delay-2000 ${
          isGrown ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
        style={{
          clipPath: 'ellipse(40% 80% at 50% 100%)',
          transform: 'rotate(15deg)',
          transformOrigin: 'bottom center',
        }}
      />
      
      {/* Flower head */}
      <div 
        className={`absolute -top-12 -left-6 transition-all duration-3000 delay-3000 ${
          isGrown ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
        style={{ transformOrigin: 'bottom center' }}
      >
        {/* Tulip flower - realistic cup shape */}
        <div className="relative w-12 h-14">
          {/* Outer petals - back layer */}
          <div 
            className={`absolute top-2 left-0 w-8 h-12 bg-gradient-to-b from-pink-200 to-pink-400 transition-all duration-2000 delay-4000 ${
              isGrown ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              clipPath: 'ellipse(45% 85% at 50% 100%)',
              transform: 'rotate(-25deg)',
              transformOrigin: 'bottom center'
            }}
          />
          <div 
            className={`absolute top-2 right-0 w-8 h-12 bg-gradient-to-b from-pink-200 to-pink-400 transition-all duration-2000 delay-4000 ${
              isGrown ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              clipPath: 'ellipse(45% 85% at 50% 100%)',
              transform: 'rotate(25deg)',
              transformOrigin: 'bottom center'
            }}
          />
          
          {/* Middle petals */}
          <div 
            className={`absolute top-1 left-1 w-7 h-11 bg-gradient-to-b from-pink-100 to-pink-300 transition-all duration-2000 delay-4200 ${
              isGrown ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              clipPath: 'ellipse(45% 85% at 50% 100%)',
              transform: 'rotate(-12deg)',
              transformOrigin: 'bottom center'
            }}
          />
          <div 
            className={`absolute top-1 right-1 w-7 h-11 bg-gradient-to-b from-pink-100 to-pink-300 transition-all duration-2000 delay-4200 ${
              isGrown ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              clipPath: 'ellipse(45% 85% at 50% 100%)',
              transform: 'rotate(12deg)',
              transformOrigin: 'bottom center'
            }}
          />
          
          {/* Front center petal */}
          <div 
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-10 bg-gradient-to-b from-pink-50 to-pink-200 transition-all duration-2000 delay-4400 ${
              isGrown ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              clipPath: 'ellipse(45% 85% at 50% 100%)',
              transformOrigin: 'bottom center'
            }}
          />
          
          {/* Inner center - pistil and stamens */}
          <div 
            className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-full transition-all duration-1000 delay-4600 ${
              isGrown ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          />
          
          {/* Subtle inner glow */}
          <div 
            className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gradient-radial from-pink-50/60 to-transparent rounded-full transition-all duration-1500 delay-4800 ${
              isGrown ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Tulip;