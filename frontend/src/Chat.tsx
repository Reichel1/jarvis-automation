import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    content: "Welcome to J.A.R.V.I.S! I'm your intelligent automation assistant with a beautiful glassmorphic design. How can I help you automate your workflow today?",
    sender: 'assistant',
    timestamp: new Date(),
  },
];

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((msgs) => [...msgs, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I'm processing your request with advanced AI capabilities. This beautiful glassmorphic interface showcases the power of modern design systems!",
        "Your automation workflow is being analyzed. The gradient effects and advanced backdrop blur create an immersive experience.",
        "I can help you with project automation, documentation generation, and intelligent monitoring. Notice how the glass effects create depth and elegance.",
        "This interface demonstrates professional glassmorphism with HSL color tokens, multi-layered effects, and smooth animations.",
      ];
      
      const assistantMessage: Message = {
        id: Date.now() + 1,
        content: responses[Math.floor(Math.random() * responses.length)],
        sender: 'assistant',
        timestamp: new Date(),
      };

      setMessages((msgs) => [...msgs, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full glass-advanced rounded-3xl overflow-hidden shadow-2xl">
      {/* Header with enhanced glassmorphism */}
      <div className="glass-heavy border-b border-white/20">
        <div className="px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full gradient-rainbow flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground tracking-tight">
                J.A.R.V.I.S
              </h1>
              <p className="text-sm text-muted-foreground">
                Intelligent Automation Assistant
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages area with enhanced scroll */}
      <ScrollArea className="flex-1 px-6 py-4">
        <div className="space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex gap-3",
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {msg.sender === 'assistant' && (
                <Avatar className="w-8 h-8 glass-medium">
                  <AvatarFallback className="bg-transparent">
                    <Bot className="w-4 h-4 text-primary" />
                  </AvatarFallback>
                </Avatar>
              )}
              
              <div
                className={cn(
                  "message-hover max-w-[75%] px-4 py-3 rounded-2xl",
                  msg.sender === 'user'
                    ? "gradient-rainbow text-white ml-12"
                    : "glass-medium text-foreground"
                )}
              >
                <p className="text-sm leading-relaxed">
                  {msg.content}
                </p>
                <p className="text-xs opacity-70 mt-2">
                  {msg.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>

              {msg.sender === 'user' && (
                <Avatar className="w-8 h-8 glass-medium">
                  <AvatarFallback className="bg-transparent">
                    <User className="w-4 h-4 text-blue-400" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <Avatar className="w-8 h-8 glass-medium">
                <AvatarFallback className="bg-transparent">
                  <Bot className="w-4 h-4 text-primary" />
                </AvatarFallback>
              </Avatar>
              <div className="glass-medium px-4 py-3 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Enhanced input area */}
      <form onSubmit={sendMessage} className="p-4 glass-heavy border-t border-white/20">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Input
              className="glass-light text-foreground placeholder:text-muted-foreground h-12 rounded-xl focus:ring-2 focus:ring-primary/40"
              placeholder="Ask me anything about automation..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
            />
          </div>
          <Button
            type="submit"
            size="lg"
            variant="gradient"
            className="h-12 px-6 rounded-xl"
            disabled={!input.trim() || isTyping}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Chat; 