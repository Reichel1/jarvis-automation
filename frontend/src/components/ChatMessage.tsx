import React from 'react';
import type { Message } from '../types';
import { ActionCard } from './ActionCard';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.type === 'user';
  const isSystem = message.type === 'system';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6 animate-fadeIn`}>
      <div className={`max-w-[80%] ${isUser ? 'order-2' : 'order-1'}`}>
        <div
          className={`rounded-3xl px-6 py-4 shadow-glass transform hover:scale-[1.01] transition-all duration-300 ${
            isUser
              ? 'bg-gradient-to-r from-accent-blue/80 to-accent/80 text-white border border-accent/30'
              : 'glass-dark text-white border border-white/10'
          }`}
        >
          <p className="text-base whitespace-pre-wrap leading-relaxed font-medium">{message.content}</p>
          <div className={`text-xs mt-2 ${isUser ? 'text-white/70' : 'text-white/50'}`}>{message.timestamp.toLocaleTimeString()}</div>
        </div>
        {message.actions && message.actions.length > 0 && (
          <div className="mt-4 space-y-3">
            {message.actions.map((action) => (
              <ActionCard key={action.id} action={action} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};