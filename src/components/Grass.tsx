import React from 'react';

const Grass: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
      {/* Base grass layer */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-green-800 via-green-700 to-green-600" />
      
      {/* Grass blades */}
      <div className="absolute bottom-0 w-full h-full">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 bg-gradient-to-t from-green-800 to-green-500 animate-sway"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${20 + Math.random() * 15}px`,
              transform: `rotate(${-5 + Math.random() * 10}deg)`,
              borderRadius: '2px 2px 0 0',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Grass texture overlay */}
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-green-900/20 to-transparent" />
    </div>
  );
};

export default Grass;