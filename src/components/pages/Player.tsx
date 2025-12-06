import { 
  ChevronDown, 
  FileText, 
  Heart, 
  Play, 
  SkipBack, 
  SkipForward, 
  RotateCcw, 
  Volume2, 
  Repeat, 
  Gauge, 
  ClipboardList 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Player = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-emerald-50 h-[100dvh] w-full flex flex-col relative overflow-hidden font-sans">
        
        {/* --- HEADER --- */}
        <div className="flex justify-between items-center p-4 md:px-12 md:py-8 z-10 shrink-0">
            <button 
              onClick={() => navigate(-1)} 
              className="bg-white p-3 rounded-full shadow-sm hover:bg-gray-100 transition-colors"
            >
                <ChevronDown size={20} className="text-gray-600" />
            </button>

            <span className="font-bold text-gray-400 text-xs tracking-[0.2em] uppercase">
                Now Playing
            </span>

            <div className="flex items-center gap-3">
                <button className="bg-white p-3 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                    <FileText size={20} className="text-gray-600"/>
                </button>
                
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2 transition-colors relative">
                    <ClipboardList size={18} />
                    <span className="hidden md:inline font-bold text-sm">Quiz</span>
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs font-bold text-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                        7
                    </span>
                </button>
            </div>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="flex-1 flex flex-col items-center justify-evenly px-6 md:px-0 w-full max-w-5xl mx-auto min-h-0">
            
            {/* Album Art */}
            <div className="w-full max-w-[280px] md:max-w-3xl relative z-0 shrink-1">
                <div className="bg-white p-3 rounded-[2rem] shadow-xl">
                    <img 
                        src="https://images.unsplash.com/photo-1579935110464-fcd705142bad?auto=format&fit=crop&q=80&w=1000" 
                        className="w-full object-cover rounded-[1.5rem] aspect-square md:aspect-[16/9] shadow-inner" 
                        alt="Album Art"
                    />
                </div>
            </div>

            {/* Track Info Container */}
            {/* FIX 1: Removed bottom margin (mb-8) on mobile to prevent pushing content down */}
            <div className="w-full max-w-sm md:max-w-2xl shrink-0 mb-1 md:mb-8">
                
                {/* 1. Desktop Layout (Hidden on Mobile) */}
                <div className="hidden md:flex items-end justify-between text-left mb-6">
                    <div>
                        <div className="flex items-center gap-4 mb-2">
                            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                                The Melody of Friendship
                            </h1>
                            <button className="text-gray-400 hover:text-red-500 transition-colors">
                                <Heart size={28} />
                            </button>
                        </div>
                        <p className="text-gray-500 text-lg">
                            A heartwarming story about friendship and courage
                        </p>
                    </div>
                </div>

                {/* 2. Mobile Layout (Hidden on Desktop) */}
                {/* FIX 2: Moved Heart icon inline with Title to save vertical space */}
                <div className="md:hidden flex flex-col items-center text-center mb-4">
                    <div className="flex items-center justify-center gap-3 mb-1">
                        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                            The Melody of Friendship
                        </h1>
                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <Heart size={24} />
                        </button>
                    </div>
                    <p className="text-gray-500 text-xs line-clamp-1">
                        A heartwarming story about friendship and courage
                    </p>
                </div>

                {/* Test Your Understanding Button */}
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-4 px-6 rounded-2xl shadow-lg shadow-green-200 flex items-center justify-center gap-3 transition-transform active:scale-95">
                    <ClipboardList size={20} /> 
                    <span className="text-sm md:text-base tracking-wide">Test Your Understanding</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-medium">7 Questions</span>
                </button>
            </div>
        </div>

        {/* --- FOOTER CONTROLS --- */}
        <div className="px-6 pb-6 pt-2 md:px-8 md:pb-12 w-full max-w-5xl mx-auto shrink-0 z-20 bg-emerald-50">
            
            {/* Progress Bar */}
            <div className="relative w-full h-1.5 bg-gray-200 rounded-full mb-2 cursor-pointer group">
                <div className="absolute top-0 left-0 h-full bg-green-500 w-1/3 rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            </div>
            
            <div className="flex justify-between text-xs font-bold text-gray-400 mb-4 md:mb-8">
                <span className="text-green-600">0:00</span>
                <span>2:18</span>
            </div>

            {/* Control Buttons Row */}
            <div className="flex justify-between items-center text-gray-400 md:px-12">
                <button className="hover:text-gray-600 transition-colors hidden sm:block">
                    <Volume2 size={24} />
                </button>

                <button className="hover:text-gray-600 transition-colors">
                    <RotateCcw size={22} />
                </button>

                <button className="hover:text-gray-900 transition-colors">
                    <SkipBack size={26} fill="currentColor" className="text-gray-700"/>
                </button>

                <button className="w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-green-200 hover:scale-105 hover:bg-green-600 transition-all">
                    <Play size={28} fill="white" className="ml-1 md:w-8 md:h-8"/>
                </button>

                <button className="hover:text-gray-900 transition-colors">
                    <SkipForward size={26} fill="currentColor" className="text-gray-700"/>
                </button>

                <button className="hover:text-gray-600 transition-colors">
                    <Repeat size={22} />
                </button>

                <button className="hover:text-gray-600 transition-colors hidden sm:block">
                    <Gauge size={24} />
                </button>
            </div>
        </div>
    </div>
  );
};

export default Player;