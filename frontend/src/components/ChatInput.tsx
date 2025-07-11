import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-4">
      <div className="flex-1 relative">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message or automation request..."
          className="w-full px-6 py-4 pr-16 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 resize-none text-white placeholder-white/50 font-medium transition-all duration-300"
          rows={1}
          disabled={disabled}
        />
        <button
          type="submit"
          disabled={!message.trim() || disabled}
          className="absolute right-3 top-3 p-2 text-white/50 hover:text-white hover:bg-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all duration-300 transform hover:scale-105"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};