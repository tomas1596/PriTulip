import React from 'react';
import { Heart } from 'lucide-react';

interface TulipButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

const TulipButton: React.FC<TulipButtonProps> = ({ isVisible, onClick }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <button
        onClick={onClick}
        className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-400/80 to-rose-400/80 backdrop-blur-sm text-white rounded-full hover:from-pink-500/90 hover:to-rose-500/90 transition-all duration-300 shadow-lg hover:shadow-xl border border-pink-300/30 hover:scale-105"
      >
        <Heart size={18} className="group-hover:animate-pulse" />
        <span className="text-sm font-medium">Lee esta carta Pri </span>
      </button>
    </div>
  );
};

export default TulipButton;