import pic1 from './assets/memory1.png'
import pic2 from './assets/memory2.png'
import pic3 from './assets/memory4.png'
import pic4 from './assets/memory3.jpg'
import React from "react";
export default function LoveMemoryHunt() {
  const funnyPopups = [
    'Loading emotional damage... 💀',
    'Scanning for forgiveness... 🔍',
    'Detected: cutest girl alive ❤️',
    'Warning: hippo missing you badly ⚠️',
    'Brain servers reconnecting...'
  ];
  const memories = [
    {
      id: 1,
      emoji: '💀',
      title: 'Your Anger Level',
      text: 'Honestly valid. I deserve at least 47% of it 😭',
      image: pic1
    },
    {
      id: 2,
      emoji: '🍕',
      title: 'Our Food Adventures',
      text: 'Half our talks was basically deciding what to eat.',
      image: pic2
    },
    {
      id: 3,
      emoji: '🫠',
      title: 'My Emotional Damage',
      text: 'Current status: missing you dramatically with background music.',
      image: pic3
    },
    {
      id: 4,
      emoji: '❤️',
      title: 'Real Talk',
      text: 'No matter how much we fight… you’re still my favorite notification.',
      image: pic4
    }
  ];

  const [found, setFound] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [typedText, setTypedText] = React.useState('');
  const [popup, setPopup] = React.useState(funnyPopups[0]);

  const introText = 'Okay listen... before you ignore this website too 😭';

  React.useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      if (index < introText.length) {
        setTypedText(introText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typing);
      }
    }, 60);

    return () => clearInterval(typing);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const random = funnyPopups[Math.floor(Math.random() * funnyPopups.length)];
      setPopup(random);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleFind = (memory) => {
    if (!found.includes(memory.id)) {
      setFound([...found, memory.id]);
    }
    setSelected(memory);
  };

  return (
    <div className="min-h-screen  bg-black text-white overflow-hidden relative font-sans">
      <audio autoPlay loop controls className="fixed bottom-4 left-4 z-50 opacity-80">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-500 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 12}px`
            }}
          >
            🧀
          </div>
        ))}
      </div>



      <div className="fixed top-5 right-5 z-50 bg-pink-500/20 border border-pink-400/30 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-2xl animate-pulse text-sm md:text-base">
        {popup}
      </div>

      <div className="relative z-10 px-6 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
            Mission: Win You Back
          </h1>
          <p className="text-pink-300 text-lg max-w-2xl mx-auto min-h-[40px] font-mono">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-gray-400 mt-4 text-base max-w-2xl mx-auto">
            Find all the hidden memories. Yes, this is emotional manipulation with premium UI.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {memories.map((memory) => (
            <button
              key={memory.id}
              onClick={() => handleFind(memory)}
              className={`
                rounded-3xl h-40 backdrop-blur-lg border transition-all duration-300
                flex items-center justify-center text-5xl
                hover:scale-105 hover:rotate-3
                ${found.includes(memory.id)
                  ? 'bg-pink-500/20 border-pink-400 shadow-2xl shadow-pink-500/30'
                  : 'bg-white/5 border-white/10'}
              `}
            >
              {memory.emoji}
            </button>
          ))}
        </div>

        <div className="text-center mb-10">
          <div className="inline-block px-6 py-3 rounded-full bg-white/10 border border-white/10">
            Memories Found: {found.length} / {memories.length}
          </div>
        </div>

        {selected && (
          <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-xl shadow-2xl animate-in fade-in duration-500">
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-auto max-h-[700px] object-contain rounded-xl"
            />

            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-pink-400">
                {selected.title}
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                {selected.text}
              </p>
            </div>
          </div>
        )}

        {found.length === memories.length && (
          <div className="mt-14 text-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-[32px] p-10 border border-pink-500/20 animate-bounce">
            <h2 className="text-4xl font-bold mb-4">
              Final Reward Unlocked ❤️
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
              Okay fine… maybe I’m dramatic. But I really miss you. Also this website took effort so that should count for something 😌
            </p>

            <button className="px-8 py-4 rounded-2xl bg-pink-500 hover:bg-pink-400 transition text-lg font-semibold shadow-xl">
              Forgive This Handsome Idiot
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
