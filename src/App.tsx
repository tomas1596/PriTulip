import React, { useState, useEffect } from 'react';
import FloatingParticles from './components/FloatingParticles';
import Grass from './components/Grass';
import Tulip from './components/Tulip';
import Envelope from './components/Envelope';
import Letter from './components/Letter';
import TulipButton from './components/TulipButton';

function App() {
  const [tulipGrown, setTulipGrown] = useState(false);
  const [envelopeVisible, setEnvelopeVisible] = useState(false);
  const [envelopeOpening, setEnvelopeOpening] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);
  const [showTulipButton, setShowTulipButton] = useState(false);

  useEffect(() => {
    // Start growing the tulip after a short delay
    const timer = setTimeout(() => {
      setTulipGrown(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleTulipFullyGrown = () => {
    // Show envelope after tulip is fully grown
    setEnvelopeVisible(true);
    setShowTulipButton(true);
  };

  const handleEnvelopeClick = () => {
    setEnvelopeOpening(true);
    setTimeout(() => {
      setLetterVisible(true);
    }, 1000);
  };

  const handleCloseLetter = () => {
    setLetterVisible(false);
    setEnvelopeOpening(false);
  };

  const handleShowEnvelope = () => {
    setLetterVisible(false);
    setEnvelopeOpening(false);
    // Brief delay to reset envelope animation
    setTimeout(() => {
      setEnvelopeVisible(true);
    }, 300);
  };

  const handleTulipButtonClick = () => {
    if (envelopeVisible && !letterVisible) {
      handleEnvelopeClick();
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background particles */}
      <FloatingParticles />
      
      {/* Romantic message */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h1 
          className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-rose-300 drop-shadow-lg"
          style={{
            textShadow: '0 0 20px rgba(249, 168, 212, 0.3)',
          }}
        >
          Te amo con todo mi corazón Pri,
          <br />
          <span className="text-xl md:text-2xl">por siempre. Tomi</span>
        </h1>
      </div>

      {/* Main scene */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Grass */}
        <Grass />
        
        {/* Tulip */}
        <Tulip 
          isGrown={tulipGrown} 
          onFullyGrown={handleTulipFullyGrown}
        />
        
        {/* Envelope */}
        <Envelope 
          isVisible={envelopeVisible && !letterVisible}
          isOpening={envelopeOpening}
          onOpenEnvelope={handleEnvelopeClick}
        />
        
        {/* Letter */}
        <Letter 
          isVisible={letterVisible}
          isEnvelopeOpen={envelopeOpening}
          onClose={handleCloseLetter}
          onShowEnvelope={handleShowEnvelope}
        />
        
        {/* Tulip button */}
        <TulipButton 
          isVisible={showTulipButton && !letterVisible}
          onClick={handleTulipButtonClick}
        />
      </div>
    </div>
  );
}

export default App;