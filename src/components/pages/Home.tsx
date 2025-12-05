import { Play, Video, BookOpen, UserPlus, Phone, Trophy, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../layout/BottomNav';
import FountainImg from '../../Fountain.png';
import ChoosingPathImg from '../../Choosing_path.png';

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
}

const STORIES: Story[] = [
  { id: 1, title: 'Arabian Nights', img: 'https://images.unsplash.com/photo-1499209974033-907671109243?auto=format&fit=crop&q=80&w=500&h=700' },
  { id: 2, title: 'Bridges at the Breakfast', img: 'https://images.unsplash.com/photo-1513002749550-c59a90b50e6d?auto=format&fit=crop&q=80&w=500&h=700' },
  { id: 3, title: 'Swara at the Beach', img: ChoosingPathImg },
  { id: 4, title: 'Swara in the Forest', img: FountainImg },
  { id: 5, title: 'The Library of Dreams', img: 'https://images.unsplash.com/photo-1507842217343-583f20270319?auto=format&fit=crop&q=80&w=500&h=700' },
  { id: 6, title: 'The Power of Focus', img: 'https://images.unsplash.com/photo-1514306688772-aadcb36c4bee?auto=format&fit=crop&q=80&w=500&h=700' },
  { id: 7, title: 'Year of Wonders', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=500&h=700' },
];

const PRACTICE_HUMANS: PracticeCard[] = [
  {
    title: 'Favorite Animals',
    description: 'Talk about your favorite animals and pets',
    bgImage: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8c4d3e?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Hobbies & Fun',
    description: 'Share what you love to do in your free time',
    bgImage: 'https://images.unsplash.com/photo-1503454537688-e6c8ff1e6aa0?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'School Life',
    description: 'Chat about school, friends, and learning',
    bgImage: 'https://images.unsplash.com/photo-1427504494785-cdm0505ebc30?auto=format&fit=crop&q=80&w=800',
  },
];

const PRACTICE_AI: PracticeCard[] = [
  {
    title: 'Talk with Doraemon',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Talk with Spider Man',
    bgColor: 'bg-pink-100',
  },
  {
    title: 'Talk with Shinchan',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Talk with Virat Kohli',
    bgColor: 'bg-cyan-100',
  },
  {
    title: 'Talk with Shashi Tharoor',
    bgColor: 'bg-amber-100',
  },
];

const CIRCLE_ACTIONS = [
  { icon: Video, label: 'Video Learning', color: 'bg-blue-100 text-blue-600' },
  { icon: UserPlus, label: 'Peer Calls', color: 'bg-cyan-100 text-cyan-600' },
  { icon: BookOpen, label: 'Stories', color: 'bg-orange-100 text-orange-600' },
  { icon: Play, label: 'AI Calls', color: 'bg-red-100 text-red-600' },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen min-w-screen">
      {/* HEADER */}
      <header className="bg-brand-green rounded-b-3xl px-6 pt-6 pb-8 text-white shadow-md">
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
              <p className="text-sm font-medium text-green-100">Good Afternoon</p>
              <h1 className="text-3xl font-extrabold">Diya</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
              <span className="text-sm font-bold">❤️ 30</span>
            </div>
            <span className="bg-brand-orange px-4 py-1 rounded-full font-bold text-xs">PRO</span>
          </div>
        </div>

        {/* XP PROGRESS CARD */}
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

      {/* CIRCLE ACTIONS */}
      <section className="px-6 py-8 -mt-6">
        <div className="flex justify-around items-center max-w-4xl mx-auto">
          {CIRCLE_ACTIONS.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-md ${item.color}`}>
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-700 text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* AUDIO STORIES */}
      <section className="px-6 py-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span>✨</span> Audio Stories
          </h2>
          <button className="text-brand-green text-sm font-semibold hover:underline">Show all →</button>
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

      {/* PRACTICE WITH HUMANS */}
      <section className="px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="text-pink-400">📞</span> Practice with Humans
          </h2>
          <button className="text-brand-green text-sm font-semibold hover:underline">Show all →</button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-6 scroll-smooth">
          {PRACTICE_HUMANS.map((card, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md w-80 sm:w-96 h-44 relative group cursor-pointer"
              style={{
                backgroundImage: `url(${card.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <span className="bg-gray-700/60 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block">
                    Be first!
                  </span>
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold">{card.title}</h3>
                  <p className="text-white/80 text-xs mt-1">{card.description}</p>
                </div>
              </div>
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 text-brand-green font-bold rounded-full py-3 px-12 text-sm hover:bg-white transition-colors">
                Join & Start Call
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE WITH AI */}
      <section className="px-6 py-8 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="text-pink-400">🤖</span> Practice with AI
          </h2>
          <button className="text-brand-green text-sm font-semibold hover:underline">Show all →</button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-6 scroll-smooth">
          {PRACTICE_AI.map((card, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 rounded-xl overflow-hidden shadow-sm bg-white p-4 w-28 sm:w-32 cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className={`w-full h-32 rounded-lg ${card.bgColor} flex items-center justify-center mb-3`}>
                <img 
                  src={ChoosingPathImg} 
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
