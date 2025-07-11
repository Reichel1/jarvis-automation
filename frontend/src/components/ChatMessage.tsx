import React from 'react';
import type { Message } from '../types';
import { ActionCard } from './ActionCard';
import { Bot } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.type === 'user';

  return (
    <div className={`flex items-start gap-3 mb-4 ${isUser ? 'justify-end' : ''}`}>
      {/* Avatar */}
      {isUser ? (
        <img
          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=80&q=80"
          alt="User"
          className="w-8 h-8 rounded-full object-cover shrink-0 order-2"
        />
      ) : (
        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}
      {/* Message bubble */}
      <div
        className={`max-w-lg ${
          isUser
            ? 'bg-indigo-600/20 border border-indigo-600/30 rounded-lg p-4 backdrop-blur-md text-white order-1'
            : 'bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-md text-gray-200'
        }`}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
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