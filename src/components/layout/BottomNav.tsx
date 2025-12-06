import { Home, Trophy, Phone, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Trophy, label: 'Learn', path: '/quiz' },
    { icon: Phone, label: 'Call', path: '/call' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pt-3 pb-4 z-50">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-2 transition-colors"
            >
              <item.icon 
                size={28} 
                strokeWidth={1.5}
                fill={isActive ? 'currentColor' : 'none'}
                className={isActive ? 'text-green-600' : 'text-gray-400'}
              />
              <span className={`text-xs font-medium ${isActive ? 'text-green-600' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;