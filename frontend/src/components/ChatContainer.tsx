import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import type { Message, Action } from '../types';

export const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m J.A.R.V.I.S, your personal automation assistant. I can help you with webhooks, workflows, and AI-powered automations. What would you like to do?',
      timestamp: new Date(),
      type: 'assistant',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
      type: 'user',
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response with actions
    setTimeout(() => {
      const actions: Action[] = [];
      
      // Add sample actions based on message content
      if (content.toLowerCase().includes('webhook')) {
        actions.push({
          id: 'webhook-1',
          type: 'webhook',
          title: 'Create Webhook Endpoint',
          description: 'Setting up webhook endpoint for incoming requests',
          status: 'running',
          progress: 75,
        });
      }
      
      if (content.toLowerCase().includes('automation')) {
        actions.push({
          id: 'automation-1',
          type: 'automation',
          title: 'Execute Automation',
          description: 'Running automated workflow',
          status: 'completed',
          result: 'Automation completed successfully',
        });
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I understand you want to work with: "${content}". Let me help you with that.`,
        timestamp: new Date(),
        type: 'assistant',
        actions: actions.length > 0 ? actions : undefined,
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 p-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-t-3xl"></div>
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white drop-shadow-lg">J.A.R.V.I.S</h1>
              <p className="text-sm text-white/80 font-medium">Personal Automation Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            <span className="text-xs text-white/90 font-medium bg-green-500/20 px-3 py-1 rounded-full backdrop-blur-sm">Live Preview</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex justify-start animate-fadeIn">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl px-6 py-4 shadow-xl border border-white/20">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white/10 backdrop-blur-lg border-t border-white/20 p-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-b-3xl"></div>
        <div className="relative z-10">
          <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
        </div>
      </div>
    </div>
  );
};