import React from 'react';
import Chat from './Chat';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#18181c] via-[#23232a] to-[#101014]">
      <div className="w-full max-w-2xl h-[90vh] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">
        <Chat />
      </div>
    </div>
  );
}

export default App; 