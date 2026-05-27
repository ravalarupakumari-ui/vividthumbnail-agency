import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// Injecting custom CSS keyframes into the head document dynamically for deep animations
const styleEl = document.createElement('style');
styleEl.innerHTML = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes pulseGlow {
    0%, 100% { filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.4)); }
    50% { filter: drop-shadow(0 0 20px rgba(249, 115, 22, 0.7)); }
  }
  .animate-gradient-shimmer {
    background-size: 200% 200%;
    animation: gradientShift 4s ease infinite;
  }
  .animate-title-glow {
    animation: pulseGlow 3s ease-in-out infinite;
  }
`;
document.head.appendChild(styleEl);

function App() {
  const [title, setTitle] = useState('');
  const [vibe, setVibe] = useState('⚡ High-Saturation Gaming');
  const [image, setImage] = useState(null);
  const [alertCleared, setAlertCleared] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (!alertCleared && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, alertCleared]);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919848887073";
    const text = `👋 Hello VividThumbnail Studio! I want to order a premium thumbnail.\n\n📝 VIDEO DETAILS:\n• Title: ${title}\n• Vibe/Style: ${vibe}\n\n\uD83D\uDDBC️ REMINDER: Sending my reference image right below this text!`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="min-h-screen text-white font-sans flex flex-col items-center justify-center p-4 bg-[#090a0f]">
      
      {/* ⚠️ ANIMATED ONBOARDING MODAL OVERLAY */}
      {!alertCleared && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 transition-all duration-500 ease-out">
          <div className="bg-[#121420] border border-red-500/30 rounded-2xl p-6 max-w-md w-full shadow-2xl scale-100 transition-transform duration-300">
            <h2 className="text-xl font-bold text-red-500 flex items-center gap-2 mb-4 animate-title-glow">
              ⚠️ CRITICAL ONBOARDING NOTICE
            </h2>
            <ul className="space-y-3 text-sm text-gray-300 mb-6">
              <li>• <strong>Personalized Attention:</strong> This is an elite editing portal, NOT a robotic AI generator.</li>
              <li>• <strong>Asset Hand-Off:</strong> Tapping submit wraps your text data and opens WhatsApp automatically.</li>
              <li>• <strong>The Final Step:</strong> You must click send in WhatsApp and attach your reference image manually!</li>
            </ul>
            {countdown > 0 ? (
              <div className="w-full bg-gray-800 text-gray-400 font-semibold py-3 text-center rounded-xl text-sm border border-gray-700">
                ⏳ Reviewing layout guidelines... ({countdown}s)
              </div>
            ) : (
              <button 
                onClick={() => setAlertCleared(true)}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-emerald-500/20 hover:brightness-110 active:scale-95 transition-all duration-200"
              >
                ✅ OK, I UNDERSTAND THE WORKFLOW
              </button>
            )}
          </div>
        </div>
      )}

      {/* 🔮 MAIN PREMIUM WORKSPACE PANEL */}
      <div className="w-full max-w-lg bg-[#11131e] border border-gray-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-gray-700">
        
        {/* Animated Shimmer Neon Top Line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-red-500 to-orange-500 animate-gradient-shimmer"></div>
        
        {/* Studio Branding Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-title-glow">
            🔥 VIVIDTHUMBNAIL PRO
          </h1>
          <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mt-1">Manual Masterclass Studio</p>
          <p className="text-sm text-gray-400 mt-2">Skip the basic templates. Get a high-CTR thumbnail built by an elite editor.</p>
        </div>

        {/* Form Inputs Container */}
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">1. Video Title</label>
            <input 
              type="text" 
              placeholder="e.g., Clash Squad Grandmaster Push! 👑"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#181b28] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500/50 text-white transition-all duration-300 focus:ring-1 focus:ring-red-500/30"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">2. Visual Theme</label>
            <select 
              value={vibe}
              onChange={(e) => setVibe(e.target.value)}
              className="w-full bg-[#181b28] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500/50 text-white transition-all duration-300 focus:ring-1 focus:ring-red-500/30"
            >
              <option>⚡ High-Saturation Gaming (Neon accents, intense glow)</option>
              <option>🎬 Dramatic Cinematic (Deep shadows, high-contrast HDR)</option>
              <option>📈 Premium Infotainment (Bold text, clean layout)</option>
              <option>🔥 Extreme Clickbait (Aggressive depth, glowing outlines)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">3. Reference Image</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-gray-800 file:text-white file:transition-colors hover:file:bg-gray-700 cursor-pointer"
            />
          </div>

          {/* Dynamic Activation Frame */}
          {title && image ? (
            <div className="pt-4 transition-all duration-500 ease-out">
              <div className="bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 rounded-xl p-3 mb-4 leading-relaxed animate-pulse">
                ⚡ <strong>AI can't beat human psychology.</strong> Your custom layout is being manually engineered for top-tier audience retention. Available in your chats inside 24 hours.
              </div>
              <button 
                onClick={handleWhatsAppRedirect}
                className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-bold py-4 rounded-xl shadow-xl shadow-emerald-500/20 transition-all duration-300 transform hover:scale-[1.02] hover:brightness-110 active:scale-98"
              >
                💬 SUBMIT ORDER VIA WHATSAPP
              </button>
            </div>
          ) : (
            <div className="text-center text-xs text-gray-500 bg-[#141622] py-4 rounded-xl border border-dashed border-gray-800 mt-6 transition-colors duration-300">
              Fill out all steps above to lock in your design slot.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
