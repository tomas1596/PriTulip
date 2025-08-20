import React from 'react';

const FloatingParticles: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${4 + Math.random() * 2}s`,
          }}
        >
          <div 
            className="w-2 h-2 bg-pink-300 rounded-full blur-sm"
            style={{
              boxShadow: '0 0 8px #f9a8d4, 0 0 16px #f9a8d4',
            }}
          />
        </div>
      ))}
      {[...Array(15)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          <div className="w-1 h-1 bg-pink-200 rounded-full opacity-40" />
        </div>
      ))}
    </div>
  );
};

export default FloatingParticles;