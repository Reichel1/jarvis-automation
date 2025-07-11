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
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[70%] ${isUser ? 'order-2' : 'order-1'}`}>
        <div
          className={`rounded-2xl px-4 py-2 ${
            isUser
              ? 'bg-blue-500 text-white'
              : isSystem
              ? 'bg-gray-100 text-gray-700 border border-gray-200'
              : 'bg-white text-gray-800 border border-gray-200'
          }`}
        >
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
          <div className="text-xs opacity-70 mt-1">
            {message.timestamp.toLocaleTimeString()}
          </div>
        </div>
        
        {message.actions && message.actions.length > 0 && (
          <div className="mt-2 space-y-2">
            {message.actions.map((action) => (
              <ActionCard key={action.id} action={action} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};