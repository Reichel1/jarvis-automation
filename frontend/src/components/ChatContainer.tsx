import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { Message, Action } from '../types';

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
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">J</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">J.A.R.V.I.S</h1>
              <p className="text-sm text-gray-500">Personal Automation Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 font-medium">Live Preview</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl px-4 py-2">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};