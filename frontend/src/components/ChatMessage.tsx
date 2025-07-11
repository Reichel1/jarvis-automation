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
          className={`rounded-3xl px-6 py-4 shadow-xl transform hover:scale-[1.02] transition-all duration-300 ${
            isUser
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-blue-500/25'
              : isSystem
              ? 'bg-white/10 backdrop-blur-lg text-white border border-white/20'
              : 'bg-white/10 backdrop-blur-lg text-white border border-white/20'
          }`}
        >
          <p className="text-sm whitespace-pre-wrap leading-relaxed font-medium">{message.content}</p>
          <div className={`text-xs mt-2 ${isUser ? 'text-white/70' : 'text-white/50'}`}>
            {message.timestamp.toLocaleTimeString()}
          </div>
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