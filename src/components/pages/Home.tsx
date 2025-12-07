import { Video, BookOpen, Bot, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../layout/BottomNav';

// Image Imports
import FountainImg from '../../assets/Fountain.png';
import ChoosingPathImg from '../../assets/Choosing_path.png';
import ArabianNights from '../../assets/arabian.png';
import Swara from '../../assets/swara-beach.png';
import Focus from '../../assets/focus.png';
import Library from '../../assets/library.png';
import Wonder from '../../assets/wonders.png';
import Spiderman from '../../assets/spiderman.svg';
import Doraemon from '../../assets/doremon.svg';
import Shinchan from '../../assets/shinchan.png';
import Kohli from '../../assets/king_virat_kohlii.webp';
import Shashi from '../../assets/shashi__tharoor.webp';
import animal from '../../assets/animals.webp';
import school from '../../assets/school.webp';
import hobbies from '../../assets/hobbies.jpg';

interface Story {
  id: number;
  title: string;
  img: string;
}

interface PracticeCard {
  icon?: string;
  title: string;
  description?: string;
  bgImage?: string;
  bgColor?: string;
  img?: string; // Added img property here
}

const STORIES: Story[] = [
  { id: 1, title: 'Choosing the right path', img: ChoosingPathImg  },
  { id: 2, title: 'The Fountain and the Mayor', img: FountainImg  },
  { id: 3, title: 'The Arabian Nights', img: ArabianNights },
  { id: 4, title: 'Swara at the Beach', img: Swara },
  { id: 5, title: 'The Library of Dreams', img: Library },
  { id: 6, title: 'The Power of Focus', img: Focus },
  { id: 7, title: 'Year of Wonders', img: Wonder },
];

const PRACTICE_HUMANS: PracticeCard[] = [
  {
    title: 'Favorite Animals',
    description: 'Talk about your favorite animals and pets',
    bgImage: animal,
  },
  {
    title: 'Hobbies & Fun',
    description: 'Share what you love to do in your free time',
    bgImage: hobbies,
  },
  {
    title: 'School Life',
    description: 'Chat about school, friends, and learning',
    bgImage: school,
  },
];


const PRACTICE_AI: PracticeCard[] = [
  {
    title: 'Talk with Doraemon',
    bgColor: 'bg-blue-100',
    img: Doraemon, 
  },
  {
    title: 'Talk with Spider Man',
    bgColor: 'bg-pink-100',
    img: Spiderman,
  },
  {
    title: 'Talk with Shinchan',
    bgColor: 'bg-green-100',
    img: Shinchan,
  },
  {
    title: 'Talk with Virat Kohli',
    bgColor: 'bg-cyan-100',
    img: Kohli,
  },
  {
    title: 'Talk with Shashi Tharoor',
    bgColor: 'bg-amber-100',
    img: Shashi,
  },
];

const CIRCLE_ACTIONS = [
  { 
    label: "Video Learning", 
    color: "bg-blue-100", 
    iconColor: "text-blue-600",
    icon: Video 
  },
  { 
    label: "Peer Calls", 
    color: "bg-cyan-100", 
    iconColor: "text-cyan-600",
    icon: Phone 
  },
  { 
    label: "Stories", 
    color: "bg-orange-100", 
    iconColor: "text-orange-600",
    icon: BookOpen 
  },
  { 
    label: "AI Calls", 
    color: "bg-pink-100", 
    iconColor: "text-pink-600",
    icon: Bot 
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen min-w-screen">
    
      <header className="bg-green-500 rounded-b-3xl px-6 pt-6 pb-8 text-white shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-pink-300 border-2 border-white overflow-hidden flex-shrink-0">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Diya" 
                alt="avatar" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <p className="text-sm font-medium text-green-100">Good Night</p>
              <h1 className="text-3xl font-extrabold">Lorenzo</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
              <span className="text-sm font-bold">❤️ 30</span>
            </div>
            <span className="bg-orange-400 px-4 py-1 rounded-full font-bold text-xs">PRO</span>
          </div>
        </div>

    
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center font-bold text-lg">
              L1
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span>XP PROGRESS</span>
                <span>Next: L2</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full" style={{ width: '0%' }} />
              </div>
              <div className="text-xs mt-1 opacity-80">0/100 XP</div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span>⭐</span>
              <span className="text-sm font-semibold">0 XP</span>
            </div>
          </div>
        </div>
      </header>

      <section className="px-4 py-8">
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-2 md:px-12">
          {CIRCLE_ACTIONS.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group">
             
              <div className="p-1.5 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-transform transform group-hover:-translate-y-1">
             
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${item.color}`}>
                  <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.iconColor}`} strokeWidth={2} />
                </div>
              </div>
           
              <span className="text-[11px] sm:text-sm font-semibold text-gray-700 text-center leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

   
      <section className="px-6 py-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span>✨</span> Audio Stories
          </h2>
          <button className="text-green-600 text-sm font-semibold hover:underline">Show all →</button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scroll-smooth">
          {STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => navigate('/player')}
              className="flex-shrink-0 cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-32 sm:w-40 shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold mt-3 text-gray-800 leading-tight">
                {story.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

    
      <section className="px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="text-pink-400">📞</span> Practice with Humans
        </h2>
        <button className="text-green-600 text-sm font-semibold hover:underline">
          Show all →
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-6 scroll-smooth">
     
        {PRACTICE_HUMANS.map((card, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md w-80 sm:w-96 h-48 relative group cursor-pointer"
            style={{
              backgroundImage: `url(${card.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
             
              <div className="flex justify-end">
                <span className="bg-gray-800/60 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Be first!
                </span>
              </div>

             
              <div className="mb-12">
                <h3 className="text-white text-lg font-bold leading-tight">
                  {card.title}
                </h3>
                <p className="text-white/90 text-xs mt-1 font-medium">
                  {card.description}
                </p>
              </div>
            </div>

         
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-green-600 font-bold rounded-full py-2.5 w-[90%] text-sm hover:bg-gray-50 transition-colors shadow-sm">
              Join & Start Call
            </button>
          </div>
        ))}
      </div>
    </section>

   
      <section className="px-6 py-8 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="text-pink-400">🤖</span> Practice with AI
          </h2>
          <button className="text-green-600 text-sm font-semibold hover:underline">Show all →</button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-6 scroll-smooth">
          {PRACTICE_AI.map((card, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 rounded-xl overflow-hidden shadow-sm bg-white p-4 w-28 sm:w-32 cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className={`w-full h-32 rounded-lg ${card.bgColor} flex items-center justify-center mb-3`}>
                <img 
                  src={card.img} 
                  alt={card.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-xs font-semibold text-gray-700 text-center leading-tight">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Home;