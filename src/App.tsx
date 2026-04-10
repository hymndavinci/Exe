import { useState } from 'react';
import {
  Search, Play, Plus, Star, ArrowLeft, ArrowRight,
  Globe, Camera, Tv, Heart
} from 'lucide-react';

const NAMA_CEWEK = "Fauziah Darmawati";

interface FotoItem {
  id: number;
  url: string;
  judul: string;
  deskripsi: string;
}

const fotoGallery: FotoItem[] = [
  {
    id: 1,
    url: "/foto1.jpg",
    judul: "My Absolute Favorite Smile",
    deskripsi: "No scenery in this world compares to the radiance of your smile. Please never lose it; it is the light that guides my every day."
  },
  {
    id: 2,
    url: "/foto2.jpg",
    judul: "Star-Bound Gaze",
    deskripsi: "While explorers seek hidden treasures, I find everything I need just by looking into your eyes. Stay by my side forever, my beautiful one."
  },
  {
    id: 3,
    url: "/foto3.jpg",
    judul: "Simply You",
    deskripsi: "Whether you're being lighthearted, stubborn, or wonderfully silly, you remain the most perfect person in my universe."
  },
  {
    id: 4,
    url: "/foto4.jpg",
    judul: "Signature Charm",
    deskripsi: "Your elegance is truly beyond words. I find myself falling for you more deeply with every passing day."
  }
];

const fotoMemories: string[] = [
  "/foto2.jpg",
  "/foto3.jpg",
  "/foto4.jpg"
];

export default function App() {
  const [activeGallery, setActiveGallery] = useState(0);

  const nextGallery = () => setActiveGallery((prev) => (prev === fotoGallery.length - 1 ? 0 : prev + 1));
  const prevGallery = () => setActiveGallery((prev) => (prev === 0 ? fotoGallery.length - 1 : prev - 1));

  // Dynamically sync the hero image with the active gallery selection
  const currentHeroImg = fotoGallery[activeGallery].url;

  return (
    <div className="min-h-screen bg-[#244A4E] flex items-center justify-center p-4 md:p-10 overflow-hidden font-sans relative">
      <div className="absolute bottom-8 right-12 text-white/10 text-7xl font-bold tracking-widest hidden lg:block pointer-events-none">001</div>

      <div className="relative w-full max-w-[1400px] h-[800px] bg-gradient-to-br from-[#458C91] to-[#255257] rounded-[40px] shadow-2xl overflow-hidden border border-white/10 flex flex-col">

        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full px-10 pt-8 pb-4 flex justify-between items-center z-50">
          <div className="flex items-center gap-12">
            <div className="text-[#E50914] text-5xl font-black tracking-tighter" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.3)' }}>N</div>
            <ul className="hidden md:flex gap-8 text-sm font-medium text-white/70">
              <li className="hover:text-white cursor-pointer transition">Home</li>
              <li className="hover:text-white cursor-pointer transition">Our Story</li>
              <li className="hover:text-white cursor-pointer transition">Gallery</li>
              <li className="text-white relative cursor-pointer font-semibold">
                My Favorites<span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#E50914] rounded-full"></span>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-6 text-white">
            <Search size={22} className="cursor-pointer" />
            <Heart size={22} className="cursor-pointer text-[#E50914] fill-[#E50914]" />
            <div className="w-9 h-9 rounded-md bg-gray-800 border border-white/20 overflow-hidden cursor-pointer">
              <img src={fotoGallery[0].url} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </nav>

        {/* Hero Center Image - Now Synchronized & Smooth (CSS Animation) */}
        <div className="absolute inset-0 flex justify-center items-end z-10 pointer-events-none">
          <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#255257] to-transparent z-20"></div>
          <img 
            key={currentHeroImg}
            src={currentHeroImg}
            alt="Main"
            className="h-[90%] w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-0 rounded-3xl animate-reveal"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 flex-1 flex justify-between px-10 pb-12 pt-32 h-full">

          {/* Left Side */}
          <div className="w-1/3 flex flex-col justify-center gap-6 mt-8">
            <div className="flex flex-col text-white font-serif font-bold text-5xl leading-none tracking-tight">
               <div><span className="bg-[#1C502E] text-white px-2 rounded-sm mr-1 shadow-lg border border-white/20">Th</span>e</div>
               <div className="ml-8"><span className="bg-[#1C502E] text-white px-2 rounded-sm mr-1 shadow-lg border border-white/20">On</span>ly One</div>
            </div>

            <p className="text-white/80 text-sm leading-relaxed mt-2 max-w-[320px] font-medium">
              Every moment with you feels like a profound gift. Thank you for being my sanctuary and the constant heartbeat of my happiness, day after day.
            </p>

            <div className="flex items-center gap-2 text-[#FFC107] font-bold text-sm">
              <Star fill="#FFC107" size={16} /> 100% Match <span className="text-white/50 ml-2 font-normal">• Forever Linked</span>
            </div>

            <div className="flex gap-3 mt-2">
              {fotoMemories.map((img, idx) => (
                <div key={idx} className="relative w-[110px] h-[65px] rounded-lg overflow-hidden group cursor-pointer border border-white/20 shadow-lg">
                  <img src={img} alt={`Memory ${idx + 1}`} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition group-hover:bg-black/20">
                    <Play fill="white" size={12} />
                  </div>
                  <span className="absolute bottom-1 left-2 text-[9px] font-bold text-white shadow-black drop-shadow-md">Chapter {idx + 1}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              <button onClick={() => alert(`I love you, ${NAMA_CEWEK}! ❤️`)} className="flex items-center gap-2 bg-[#E50914] text-white font-semibold py-3 px-6 rounded-xl hover:bg-red-700 transition">
                Express My Love <Heart fill="white" size={14} className="ml-1" />
              </button>
              <button className="flex items-center gap-2 bg-white/10 text-white border border-white/20 font-bold py-3 px-6 rounded-xl hover:bg-white/20 transition">
                <Plus size={18} strokeWidth={3} /> My List
              </button>
            </div>

            <div className="absolute bottom-8 left-10">
               <div className="w-12 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold text-xs border border-white/30">100%</div>
            </div>
          </div>

          {/* Right Side - Gallery */}
          <div className="w-1/3 flex flex-col justify-center items-end text-right z-20 mt-12 pr-4">
            <h2 className="text-white text-4xl font-semibold mb-6">Her Portraits</h2>

            <div className="flex gap-3 mb-4 justify-end w-full">
              {fotoGallery.map((foto, index) => (
                <div key={foto.id} onClick={() => setActiveGallery(index)} className={`w-[60px] h-[75px] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 border-2 ${activeGallery === index ? 'border-white scale-110' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                  <img src={foto.url} alt={foto.judul} className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0" />
                </div>
              ))}
            </div>

            <div className="flex gap-4 text-white/50 mb-8 w-full justify-end pr-2">
              <button onClick={prevGallery} className="hover:text-white transition"><ArrowLeft size={20} /></button>
              <button onClick={nextGallery} className="hover:text-white transition"><ArrowRight size={20} /></button>
            </div>

            <div className="w-[85%] text-left bg-black/10 backdrop-blur-sm p-4 rounded-xl border border-white/5">
              <h3 className="text-white font-semibold text-lg mb-2">{fotoGallery[activeGallery].judul}</h3>
              <p className="text-white/80 text-sm leading-relaxed min-h-[80px]">{fotoGallery[activeGallery].deskripsi}</p>

              <div className="flex gap-4 mt-6 text-white/50">
                <Globe size={18} className="cursor-pointer hover:text-white transition" />
                <Camera size={18} className="cursor-pointer hover:text-white transition" />
                <Tv size={18} className="cursor-pointer hover:text-white transition" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
