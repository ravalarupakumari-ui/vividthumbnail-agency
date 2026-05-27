import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// 🔮 CORE STYLING ENGINE: Animations, Glass Effects, and Dynamic Backgrounds
const styleEl = document.createElement('style');
styleEl.innerHTML = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes pulseGlow {
    0%, 100% { filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.4)); }
    50% { filter: drop-shadow(0 0 15px rgba(249, 115, 22, 0.6)); }
  }
  @keyframes backgroundPan {
    from { background-position: 0% 0%; }
    to { background-position: 100% 100%; }
  }
  @keyframes cardSlide {
    0% { transform: translateY(20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  .animate-gradient-shimmer {
    background-size: 200% 200%;
    animation: gradientShift 4s ease infinite;
  }
  .animate-title-glow {
    animation: pulseGlow 3s ease-in-out infinite;
  }
  .animate-background-panning {
    animation: backgroundPan 30s linear infinite alternate;
  }
  .animate-card-slide {
    animation: cardSlide 0.6s ease-out forwards;
  }
  
  /* Modern Frosty Glass (Glassmorphism) effect class */
  .glass-panel {
    background: rgba(17, 19, 30, 0.85);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }
`;
document.head.appendChild(styleEl);

// 🎨 COMPONENT: Neon Animated Input Card
const InputCard = ({ children, isFilled, isFocused, activeColor }) => (
  <div className={`p-[1px] rounded-2xl transition-all duration-300 transform ${
    isFocused ? 'scale-[1.02] -translate-y-0.5' : 'scale-100'
  } ${
    isFocused || isFilled 
      ? `animate-gradient-shimmer bg-gradient-to-r ${activeColor}` 
      : 'bg-gray-800'
  } shadow-xl`}>
    <div className="bg-[#11131e] rounded-[15px] p-5">
      {children}
    </div>
  </div>
);

// 🚀 APPLICATION FUNCTION
function App() {
  const [title, setTitle] = useState('');
  const [vibe, setVibe] = useState('⚡ High-Saturation Gaming');
  const [image, setImage] = useState(null);
  const [alertCleared, setAlertCleared] = useState(false);
  const [countdown, setCountdown] = useState(3);
  
  // Track focus states for input card interactivity
  const [focusField, setFocusField] = useState('');

  // YOUR UPLOADED BACKGROUND IMAGE URL
  const BG_IMAGE_URL = "https://raw.githubusercontent.com/ravalarupakumari-ui/youtube-thumbnail-generator/main/1000232157.jpg";
  const YOUR_WHATSAPP_NUMBER = "919848887073"; // Your Business Number

  useEffect(() => {
    if (!alertCleared && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, alertCleared]);

  const handleWhatsAppRedirect = () => {
    const text = `👋 Hello VividThumbnail Studio! I want to order a premium thumbnail.\n\n📝 VIDEO DETAILS:\n• Title: ${title}\n• Vibe/Style: ${vibe}\n\n\uD83D\uDDBC️ REMINDER: Sending my reference image right below this text!`;
    const encodedText = encodeURIComponent(text);
    
    // Launch WhatsApp Protocol
    window.location.href = `whatsapp://send?phone=${YOUR_WHATSAPP_NUMBER}&text=${encodedText}`;
    
    // Web Fallback Route
    setTimeout(() => {
      window.open(`https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
    }, 800);
  };

  return (
    <div className="min-h-screen text-white font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden bg-black">
      
      {/* 🔮 CINEMATIC DYNAMIC BACKGROUND ENGINE */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-background-panning opacity-50 blur-[2px]"
        style={{ backgroundImage: `url(${BG_IMAGE_URL})` }}
      >
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>
      
      {/* ⚠️ ANIMATED ONBOARDING MODAL OVERLAY */}
      {!alertCleared && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 transition-all duration-500 ease-out">
          <div className="bg-[#121420] border border-red-500/30 rounded-2xl p-6 max-w-md w-full shadow-2xl animate-card-slide">
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
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-200 active:scale-95"
              >
                ✅ OK, I UNDERSTAND THE WORKFLOW
              </button>
            )}
          </div>
        </div>
      )}

      {/* 🔮 MAIN PREMIUM WORKSPACE PANEL (with Frosty Glass Effect) */}
      <div className="w-full max-w-lg relative animate-card-slide">
        
        {/* Animated Shimmer Neon Top line effect */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-gradient-shimmer z-10"></div>
        
        <div className="relative glass-panel border border-gray-800/50 rounded-3xl p-6 shadow-2xl space-y-5 transition-all duration-300 hover:border-gray-700">
          
          {/* Studio Branding Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-title-glow">
              🔥 VIVIDTHUMBNAIL PRO
            </h1>
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mt-1">Manual Masterclass Studio</p>
            <p className="text-sm text-gray-400 mt-2">Skip basic templates. Get a high-CTR thumbnail built by an elite editor.</p>
          </div>

          {/* 1. Video Title Card */}
          <InputCard isFilled={title !== ''} isFocused={focusField === 'title'} activeColor="from-red-500 via-orange-500 to-yellow-500">
            <label className="block text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">1. Video Title</label>
            <input 
              type="text" 
              placeholder="e.g., Clash Squad Grandmaster Push! 👑"
              value={title}
              onFocus={() => setFocusField('title')}
              onBlur={() => setFocusField('')}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#181b28]/80 border border-gray-800/50 rounded-xl px-4 py-3 text-sm focus:outline-none text-white transition-all duration-300"
            />
          </InputCard>

          {/* 2. Visual Theme Card */}
          <InputCard isFilled={true} isFocused={focusField === 'vibe'} activeColor="from-red-500 via-orange-500 to-yellow-500">
            <label className="block text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">2. Visual Theme</label>
            <select 
              value={vibe}
              onFocus={() => setFocusField('vibe')}
              onBlur={() => setFocusField('')}
              onChange={(e) => setVibe(e.target.value)}
              className="w-full bg-[#181b28]/80 border border-gray-800/50 rounded-xl px-4 py-3 text-sm focus:outline-none text-white cursor-pointer appearance-none"
            >
              <option>⚡ High-Saturation Gaming (Neon accents, intense glow)</option>
              <option>🎬 Dramatic Cinematic (Deep shadows, high-contrast HDR)</option>
              <option>📈 Premium Infotainment (Bold text, clean layout)</option>
              <option>🔥 Extreme Clickbait (Aggressive depth, glowing outlines)</option>
            </select>
          </InputCard>

          {/* 3. Reference Image Card */}
          <InputCard isFilled={image !== null} isFocused={focusField === 'image'} activeColor="from-emerald-500 via-teal-500 to-cyan-500">
            <label className="block text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">3. Reference Image</label>
            <input 
              type="file" 
              accept="image/*"
              onFocus={() => setFocusField('image')}
              onBlur={() => setFocusField('')}
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-gray-800/80 file:text-white cursor-pointer"
            />
          </InputCard>

          {/* Dynamic Activation Frame */}
          {title && image ? (
            <div className="pt-2 animate-card-slide">
              <div className="bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 rounded-xl p-3 mb-4 leading-relaxed">
                ⚡ <strong>AI can't beat human psychology.</strong> Your custom layout is being manually engineered for top-tier audience retention. Available in your chats inside 24 hours.
              </div>
              <button 
                onClick={handleWhatsAppRedirect}
                className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 animate-gradient-shimmer text-white font-bold py-4 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all duration-300 transform hover:scale-[1.02]"
              >
                💬 SUBMIT ORDER VIA WHATSAPP
              </button>
            </div>
          ) : (
            <div className="text-center text-xs text-gray-500 bg-[#141622]/80 py-4 rounded-xl border border-dashed border-gray-800 mt-4 transition-all duration-300">
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
