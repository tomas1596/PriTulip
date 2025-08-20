import React, { useEffect, useRef } from 'react';
import { X, Heart } from 'lucide-react';
import song from '../assets/song.mp3';
import background from '../assets/background.jpg'; // Importa la imagen correctamente

interface LetterProps {
  isVisible: boolean;
  isEnvelopeOpen: boolean;
  onClose: () => void;
  onShowEnvelope: () => void;
}

const Letter: React.FC<LetterProps> = ({ isVisible, isEnvelopeOpen, onClose, onShowEnvelope }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Reproducir la canción cuando se abra la carta
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Volumen al 30%
    }

    if (isVisible && isEnvelopeOpen) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
      if (audioRef.current) audioRef.current.currentTime = 0; // reinicia la canción
    }
  }, [isVisible, isEnvelopeOpen]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <audio ref={audioRef} src={song} />

      {/* Fondo oscuro */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Carta */}
      <div
        className={`relative max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-1000 rounded-lg shadow-2xl border-2 border-pink-200 ${
          isEnvelopeOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
      >

        {/* Contenido de la carta */}
        <div className="relative p-6 rounded-lg">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-pink-400 hover:text-pink-600 transition-colors duration-200 p-1 rounded-full hover:bg-pink-100"
          >
            <X size={20} />
          </button>

          <div className="text-center mb-6">
            <Heart className="mx-auto text-pink-400 mb-3" size={32} />
            <h2 className="text-2xl font-bold text-pink-800 mb-2">Mi gordi</h2>
          </div>

          <div className="text-gray-700 leading-relaxed space-y-4">
            <p className="text-center italic text-pink-700">
              "Como esta flor busca la luz para crecer, <br />
              nosotros también crecemos como personas y como pareja, sosteniendo nuestro amor en cada momento, buenos y malos."
            </p>

            <div className="pl-4 py-3 rounded-r" style={{ color: '#0486a7ff' }}>
              <p>Pri ♥</p>
              <p>No tenés idea de lo que sos para mí… En mis ojos sos la persona más hermosa, no solo por fuera, sino por lo que transmitís, por cómo me mirás, cómo me hablás y cómo me hacés sentir.</p>
              <p>Gracias a vos quiero ser mejor cada día. Me empujás a crecer, a esforzarme, a dar lo mejor de mí. Y aunque no siempre sea fácil, todo vale la pena porque es con vos.</p>
              <p>Sos el amor que siempre soñé, la persona con la que quiero todo. Sos mi vida, mi felicidad, mi inspiración. Y ojalá que todo lo que intento por vos te haga sentir más cerca mío, porque lo único que me importa sos vos y verte sonreír.</p>
              <p>Sos el <span style={{ color: '#FF0000', fontWeight: 'bold' }}>AMOR DE MI VIDA</span>.</p>
            </div>

            <p className="text-center text-pink-600 font-medium text-lg">
              Te amo con el alma, porque es eterna.
            </p>
            <p className="text-right text-pink-500 font-semibold">
              Con amor,<br />
              Tomi ❤️
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={onShowEnvelope}
              className="px-6 py-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Guardar carta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
