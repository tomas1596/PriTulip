import React from 'react';
import { Mail } from 'lucide-react';

interface EnvelopeProps {
  isVisible: boolean;
  isOpening: boolean;
  onOpenEnvelope: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ isVisible, isOpening, onOpenEnvelope }) => {
  if (!isVisible) return null;

  return (
    <div 
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-1000 hover:scale-105 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      onClick={onOpenEnvelope}
      style={{
        transformOrigin: 'center center',
      }}
    >
      {/* Envelope body */}
      <div className="relative w-24 h-16 bg-gradient-to-br from-pink-100 to-rose-200 rounded-sm shadow-xl border border-pink-200">
        {/* Envelope flap */}
        <div 
          className={`absolute -top-4 left-0 right-0 h-8 bg-gradient-to-b from-pink-200 to-rose-300 transition-transform duration-1000 border border-pink-200 ${
            isOpening ? 'transform rotate-180 origin-bottom' : ''
          }`}
          style={{
            clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
            transformOrigin: 'bottom center',
          }}
        />
        
        {/* Envelope seal */}
        {!isOpening && (
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full border-2 border-pink-200 flex items-center justify-center">
            <Heart className="text-white" size={8} />
          </div>
        )}
        
        {/* Mail icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Mail className="text-pink-400" size={20} />
        </div>
        
        {/* Floating animation */}
        <div className="absolute -inset-2 rounded-lg opacity-20 bg-pink-200 animate-pulse" />
      </div>
      
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-lg opacity-30 animate-pulse"
        style={{
          boxShadow: '0 0 20px #f9a8d4, 0 0 40px #f9a8d4',
        }}
      />
    </div>
  );
};

const Heart: React.FC<{ className?: string; size?: number }> = ({ className, size = 16 }) => (
  <svg 
    className={className}
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

export default Envelope;