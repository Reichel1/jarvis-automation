import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'assistant';
}

const initialMessages: Message[] = [
  {
    id: 1,
    content: "Hello! I'm your Apple-inspired, glassy AI assistant. How can I help you today?",
    sender: 'assistant',
  },
];

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { id: Date.now(), content: input, sender: 'user' },
      { id: Date.now() + 1, content: "I'm just a demo, but I'll look great!", sender: 'assistant' },
    ]);
    setInput('');
  };

  return (
    <div className="flex flex-col flex-1 h-full">
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/10 bg-white/10 backdrop-blur-md">
        <h1 className="text-xl font-semibold text-white tracking-tight">J.A.R.V.I.S</h1>
        <p className="text-xs text-white/70">Apple Liquid Glass Chat UI</p>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gradient-to-b from-white/5 to-transparent">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] px-5 py-3 rounded-2xl shadow-lg backdrop-blur-lg border border-white/10 ${
              msg.sender === 'user'
                ? 'bg-gradient-to-br from-blue-600/30 to-indigo-700/30 text-white'
                : 'bg-white/10 text-white'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <form onSubmit={sendMessage} className="p-4 border-t border-white/10 bg-white/10 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <input
            className="flex-1 px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/40 backdrop-blur-md"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-500 transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat; 