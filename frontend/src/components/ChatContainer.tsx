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
    <div className="flex flex-col h-[90vh] w-full max-w-2xl mx-auto rounded-3xl shadow-glass glass-dark border border-white/10 overflow-hidden">
      {/* Header */}
      <div className="glass-dark border-b border-white/10 p-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-white drop-shadow-lg tracking-wide">J.A.R.V.I.S</h1>
              <p className="text-sm text-white/70 font-medium">Personal Automation Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-green-400/30"></div>
            <span className="text-xs text-white/80 font-medium bg-green-500/10 px-3 py-1 rounded-full">Live Preview</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex justify-start animate-fadeIn">
            <div className="glass-dark rounded-3xl px-6 py-4 shadow-glass border border-white/10">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-accent-blue rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-accent-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="glass-dark border-t border-white/10 p-6">
        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};