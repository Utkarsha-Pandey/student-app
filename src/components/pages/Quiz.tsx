import { ArrowLeft, Sparkles, Lightbulb, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Quiz = () => {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState('Medium');

  const levels = [
    { 
      title: 'Easy', 
      desc: 'Short sentences & gentle vocabulary.', 
      themeText: 'text-green-600', 
      themeBg: 'bg-green-50',       
      themeBorder: 'border-green-200', 
      icon: Lightbulb 
    },
    { 
      title: 'Medium', 
      desc: 'Everyday situations with detail.', 
      themeText: 'text-orange-500', 
      themeBg: 'bg-orange-50',      
      themeBorder: 'border-orange-200', 
      icon: Sparkles 
    },
    { 
      title: 'Hard', 
      desc: 'Longer thinking and tricky choices.', 
      themeText: 'text-purple-600', 
      themeBg: 'bg-purple-50',      
      themeBorder: 'border-purple-200', 
      icon: Target 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 font-sans">
      
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-green-600 mb-6 font-bold text-sm hover:opacity-80 transition-opacity">
        <ArrowLeft size={20} strokeWidth={2.5} />
        Back
      </button>

      <div className="bg-white p-6 rounded-3xl shadow-sm mb-6">
        <label className="text-green-600 font-bold text-[11px] tracking-widest uppercase mb-3 block">Learn Tab</label>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Craft a custom quiz</h2>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">Pick a topic, choose difficulty, and we will build four fun questions instantly.</p>
        
        <div className="flex flex-wrap gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-lg text-green-700 font-bold text-xs cursor-default">
            <Sparkles size={14} fill="currentColor" className="text-green-600" />
            AI Powered
          </div>
          <div className="px-3 py-1.5 bg-gray-100 rounded-lg text-gray-600 font-bold text-xs">4 Questions</div>
          <div className="px-3 py-1.5 bg-gray-100 rounded-lg text-gray-600 font-bold text-xs">Instant play</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm mb-6">
        <label className="text-green-600 font-bold text-[11px] tracking-widest uppercase mb-3 block">Step 1</label>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Choose a topic</h3>
        
        <input 
          type="text" 
          placeholder='e.g. "My school day" or "Planets in space"' 
          className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" 
        />
        
        <div className="flex flex-wrap gap-2.5">
          {['My Best Friend', 'Cricket Basics', 'Solar System', 'Healthy Habits', 'Animals & Birds', 'School Picnic'].map((tag) => (
             <button key={tag} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-bold text-xs hover:bg-gray-200 transition-colors">
               {tag}
             </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm mb-6">
        <label className="text-green-600 font-bold text-[11px] tracking-widest uppercase mb-3 block">Step 2</label>
        <h1 className="text-xl font-bold text-gray-900 mb-6">Pick a challenge level</h1>

        <div className="space-y-4">
          {levels.map((lvl) => {
            const isSelected = difficulty === lvl.title;
            return (
              <div 
                key={lvl.title} 
                onClick={() => setDifficulty(lvl.title)}
                className={`relative p-5 rounded-[1.5rem] border-2 cursor-pointer flex justify-between items-start transition-all duration-200 ${
                  isSelected 
                    ? `${lvl.themeBg} border-green-400 shadow-sm` 
                    : `${lvl.themeBg} ${lvl.themeBorder} opacity-70 hover:opacity-100`
                }`}
              >
                <div className="flex-1 pr-4">
                  <h3 className={`font-bold text-base ${lvl.themeText}`}>{lvl.title}</h3>
                  <p className="text-gray-600 text-[13px] mt-1 font-medium leading-relaxed">{lvl.desc}</p>
                  {isSelected && (
                    <span className="inline-block mt-3 bg-green-100 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">Selected</span>
                  )}
                </div>
                <lvl.icon className={lvl.themeText} size={22} strokeWidth={2.5} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-green-500 text-white p-6 rounded-3xl shadow-lg mb-4 relative overflow-hidden">
        <label className="font-bold text-[10px] tracking-widest mb-3 block opacity-80 uppercase">What you'll get</label>
        <h3 className="text-lg font-bold mb-4 leading-tight">Friendly quiz with instant feedback</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-white/60 mt-1 text-[10px]">●</span>
            <span className="text-sm font-medium text-green-50">Bite-sized explanations for every answer.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-white/60 mt-1 text-[10px]">●</span>
            <span className="text-sm font-medium text-green-50">Tone automatically matches the learner profile.</span>
          </li>
        </ul>
      </div>

      <div className="h-40 w-full" aria-hidden="true"></div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 pb-6 z-50">
        <div className="max-w-md mx-auto w-full"> 
            <button className="w-full bg-gray-300 text-white font-bold py-4 rounded-2xl text-base shadow-sm hover:bg-gray-400 transition-colors cursor-not-allowed">
              Generate Quiz
            </button>
        </div>
      </div>

    </div>
  );
};

export default Quiz;