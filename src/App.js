import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Stars from './pages/Stars'; 
import AddAI from './pages/AddAI'; 
import Chat from './pages/Chat';   
import Search from './pages/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stars" element={<Stars />} />
      <Route path="/add-ai" element={<AddAI />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/search" element={<Search />} />
      {/* 다른 AI 상세 페이지 라우트도 여기에 추가 */}
      <Route path="*" element={<div><h1>404 페이지를 찾을 수 없습니다</h1></div>} />
    </Routes>
  );
}

export default App;