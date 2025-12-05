import { Home, Trophy, Phone, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Trophy, label: 'Learn', path: '/quiz' },
    { icon: Phone, label: 'Call', path: '/call' }, // Placeholder route
    { icon: User, label: 'Profile', path: '/profile' }, // Placeholder route
  ];

  return (
    <div className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-100 pb-4 pt-2 px-6 flex justify-between items-center z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button 
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 ${isActive ? 'text-brand-green' : 'text-gray-400'}`}
          >
            <item.icon size={24} fill={isActive ? "currentColor" : "none"} />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        )
      })}
    </div>
  );
};

export default BottomNav;