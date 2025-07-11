import React, { useState } from 'react';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Settings, 
  Heart, 
  Star,
  Check
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ComponentTest: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 space-y-8 bg-background text-foreground min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Component Library Test</h1>
        
        {/* Button Variants Test */}
        <Card className="glass-light mb-8">
          <CardHeader>
            <CardTitle>Button Component Variants</CardTitle>
            <CardDescription>Testing all Shadcn/UI button variants with custom glass effects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="glass">Glass</Button>
              <Button variant="gradient">Gradient</Button>
            </div>
            
            <div className="mt-4 space-x-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Heart className="w-4 h-4" /></Button>
            </div>

            <div className="mt-4 space-x-2">
              <Button disabled>Disabled</Button>
              <Button variant="glass" disabled>Glass Disabled</Button>
              <Button variant="gradient" disabled>Gradient Disabled</Button>
            </div>
          </CardContent>
        </Card>

        {/* Lucide Icons Test */}
        <Card className="glass-medium mb-8">
          <CardHeader>
            <CardTitle>Lucide React Icons</CardTitle>
            <CardDescription>Testing icon rendering and sizing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-8 gap-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Send className="w-6 h-6 text-primary" />
                <span className="text-xs">Send</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Bot className="w-6 h-6 text-green-500" />
                <span className="text-xs">Bot</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <User className="w-6 h-6 text-blue-500" />
                <span className="text-xs">User</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                <span className="text-xs">Sparkles</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Settings className="w-6 h-6 text-gray-500" />
                <span className="text-xs">Settings</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Heart className="w-6 h-6 text-red-500" />
                <span className="text-xs">Heart</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Star className="w-6 h-6 text-amber-500" />
                <span className="text-xs">Star</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Check className="w-6 h-6 text-emerald-500" />
                <span className="text-xs">Check</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Component Test */}
        <Card className="glass-heavy mb-8">
          <CardHeader>
            <CardTitle>Avatar Components</CardTitle>
            <CardDescription>Testing Radix UI Avatar with different sizes and fallbacks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar className="w-8 h-8 glass-light">
                <AvatarFallback className="bg-transparent">
                  <Bot className="w-4 h-4 text-primary" />
                </AvatarFallback>
              </Avatar>
              
              <Avatar className="w-10 h-10 glass-medium">
                <AvatarFallback className="bg-transparent">
                  <User className="w-5 h-5 text-blue-400" />
                </AvatarFallback>
              </Avatar>

              <Avatar className="w-12 h-12 glass-heavy">
                <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                <AvatarFallback className="bg-transparent">
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                </AvatarFallback>
              </Avatar>

              <Avatar className="w-16 h-16 gradient-rainbow">
                <AvatarFallback className="bg-transparent text-white font-bold">
                  AI
                </AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        {/* Input Component Test */}
        <Card className="glass-advanced mb-8">
          <CardHeader>
            <CardTitle>Input Components</CardTitle>
            <CardDescription>Testing input states, focus, and styling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input 
                placeholder="Default input" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              
              <Input 
                className="glass-light"
                placeholder="Glass input with custom styling" 
              />
              
              <Input 
                disabled
                placeholder="Disabled input" 
              />

              <div className="flex space-x-2">
                <Input 
                  className="flex-1"
                  placeholder="Input with button" 
                />
                <Button variant="glass">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-muted-foreground">
              Current input value: <span className="font-mono">{inputValue || '(empty)'}</span>
            </p>
          </CardContent>
        </Card>

        {/* ScrollArea Test */}
        <Card className="glass-light mb-8">
          <CardHeader>
            <CardTitle>ScrollArea Component</CardTitle>
            <CardDescription>Testing Radix UI ScrollArea with custom content</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-48 glass-medium rounded-lg p-4">
              <div className="space-y-4">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="glass-light p-3 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                          {i + 1}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Scroll Item {i + 1}</p>
                        <p className="text-sm text-muted-foreground">
                          This is a test item to demonstrate scrolling functionality
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Class Utilities Test */}
        <Card className="glass-medium mb-8">
          <CardHeader>
            <CardTitle>Class Utilities Test</CardTitle>
            <CardDescription>Testing cn(), clsx, and tailwind-merge functionality</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button 
                className={cn(
                  "transition-all duration-500",
                  count % 2 === 0 ? "bg-blue-500 hover:bg-blue-600" : "bg-purple-500 hover:bg-purple-600",
                  "text-white font-bold"
                )}
                onClick={() => setCount(count + 1)}
              >
                Dynamic Classes (clicked {count} times)
              </Button>
              
              <div className={cn(
                "p-4 rounded-lg transition-all duration-300",
                "glass-light",
                count > 5 && "border-2 border-primary",
                count > 10 && "gradient-rainbow"
              )}>
                <p>This box changes based on click count: {count}</p>
                <ul className="mt-2 text-sm text-muted-foreground">
                  <li>• Base: Glass light effect</li>
                  <li>• {count > 5 ? '✅' : '⏳'} 5+ clicks: Primary border</li>
                  <li>• {count > 10 ? '✅' : '⏳'} 10+ clicks: Rainbow gradient</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Animation Test */}
        <Card className="glass-heavy">
          <CardHeader>
            <CardTitle>Animation Test</CardTitle>
            <CardDescription>Testing custom animations and transitions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-light p-4 rounded-lg float-animation">
                <div className="text-center">
                  <Sparkles className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                  <p className="text-sm">Float Animation</p>
                </div>
              </div>

              <div className="gradient-rainbow p-4 rounded-lg">
                <div className="text-center text-white">
                  <Star className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Rainbow Gradient</p>
                </div>
              </div>

              <div className="message-hover glass-medium p-4 rounded-lg">
                <div className="text-center">
                  <Send className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm">Hover Effect</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComponentTest;