import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Player from './components/pages/Player';
import Quiz from './components/pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      {/* max-w-md ensures it looks like a mobile app on desktop screens */}
      <div className=" mx-auto min-h-screen bg-gray-50 shadow-2xl relative overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<Player />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;