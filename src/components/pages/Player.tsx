import { ChevronDown, FileText, Heart, Play, SkipBack, SkipForward, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Player = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-emerald-50 min-h-screen flex flex-col pb-10">
        <div className="flex justify-between items-center p-6">
            <button onClick={() => navigate(-1)} className="bg-white p-2 rounded-full shadow-sm"><ChevronDown size={24} /></button>
            <span className="font-bold text-gray-400 text-xs tracking-widest">NOW PLAYING</span>
            <button className="bg-white p-2 rounded-full shadow-sm"><FileText size={20}/></button>
        </div>

        <div className="px-8 mt-2">
            <div className="bg-white p-3 rounded-[2rem] shadow-xl">
                 <img src="https://images.unsplash.com/photo-1579935110464-fcd705142bad?auto=format&fit=crop&q=80&w=600" className="w-full aspect-square object-cover rounded-[1.5rem]" />
            </div>
        </div>

        <div className="px-8 mt-6 text-center">
            <h1 className="text-xl font-bold text-gray-900">The Melody of Friendship</h1>
            <p className="text-gray-500 text-sm mt-1">A heartwarming story about friendship.</p>
            
            <button className="w-full bg-brand-green text-white font-bold py-3 px-4 rounded-xl mt-6 flex items-center justify-center gap-2 shadow-lg shadow-emerald-200">
                <FileText size={18} /> Test Your Understanding
            </button>
        </div>

        <div className="mt-auto px-8">
             <div className="relative w-full h-1 bg-gray-300 rounded-full mb-2">
                 <div className="absolute top-0 left-0 h-full bg-brand-green w-1/3 rounded-full"></div>
             </div>
             <div className="flex justify-between text-xs text-brand-green font-bold mb-6"><span>0:00</span><span>2:18</span></div>

             <div className="flex justify-between items-center text-gray-500">
                 <RotateCcw size={24} />
                 <SkipBack size={32} />
                 <button className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-white shadow-xl hover:scale-105 transition-transform"><Play size={32} fill="white" className="ml-1"/></button>
                 <SkipForward size={32} />
                 <Heart size={24} />
             </div>
        </div>
    </div>
  );
};

export default Player;