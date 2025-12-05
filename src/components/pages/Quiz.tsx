import { ArrowLeft, Sparkles, Lightbulb, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Quiz = () => {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState('Medium');

  const levels = [
    { title: 'Easy', desc: 'Short sentences.', color: 'border-green-200 bg-green-50', icon: Lightbulb },
    { title: 'Medium', desc: 'Everyday situations.', color: 'border-yellow-200 bg-yellow-50', icon: Sparkles },
    { title: 'Hard', desc: 'Tricky choices.', color: 'border-purple-200 bg-purple-50', icon: Target },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24 p-6">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-brand-green font-bold mb-6 bg-white px-4 py-2 rounded-full w-fit shadow-sm"><ArrowLeft size={18}/> Back</button>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Craft a custom quiz</h1>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-4 border border-gray-100 mt-4">
           <label className="text-brand-green font-bold text-xs tracking-wider mb-2 block">STEP 1: TOPIC</label>
           <input type="text" placeholder='e.g. "Space"' className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-700 focus:outline-brand-green mb-4"/>
           <div className="flex flex-wrap gap-2">
              {['Solar System', 'Healthy Habits'].map(tag => (
                 <button key={tag} className="px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-semibold text-gray-600">{tag}</button>
              ))}
           </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
           <label className="text-brand-green font-bold text-xs tracking-wider mb-2 block">STEP 2: LEVEL</label>
           <div className="space-y-3">
              {levels.map((lvl) => (
                <div key={lvl.title} onClick={() => setDifficulty(lvl.title)}
                   className={`p-4 rounded-xl border-2 cursor-pointer flex justify-between items-center ${difficulty === lvl.title ? lvl.color + ' border-brand-green' : 'border-gray-100 bg-white'}`}>
                   <div><h3 className="font-bold">{lvl.title}</h3><p className="text-xs text-gray-500">{lvl.desc}</p></div>
                   <lvl.icon className={difficulty === lvl.title ? 'text-brand-green' : 'text-gray-300'} size={20} />
                </div>
              ))}
           </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t">
          <button className="w-full max-w-md mx-auto block bg-gray-300 text-white font-bold py-3 rounded-xl">Generate Quiz</button>
      </div>
    </div>
  );
};
export default Quiz;