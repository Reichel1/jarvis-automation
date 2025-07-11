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
      <div className="flex-1 relative glass-dark rounded-2xl border border-white/10 shadow-glass">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message or automation request..."
          className="w-full px-6 py-4 pr-16 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 resize-none text-white placeholder-white/40 font-medium text-base rounded-2xl transition-all duration-300 min-h-[48px]"
          rows={1}
          disabled={disabled}
        />
        <button
          type="submit"
          disabled={!message.trim() || disabled}
          className="absolute right-3 top-3 p-2 text-white/60 hover:text-white hover:bg-accent/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all duration-300 transform hover:scale-110"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};