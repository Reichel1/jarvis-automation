import Chat from './Chat';
import ComponentTest from './ComponentTest';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

function App() {
  const [showTest, setShowTest] = useState(false);

  useEffect(() => {
    // Add dark class to html element for proper theme support
    document.documentElement.classList.add('dark');
  }, []);

  if (showTest) {
    return (
      <div className="relative">
        <div className="fixed top-4 right-4 z-50">
          <Button 
            variant="glass" 
            onClick={() => setShowTest(false)}
            className="backdrop-blur-xl"
          >
            Back to Chat
          </Button>
        </div>
        <ComponentTest />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/80 to-background/60 relative overflow-hidden">
      {/* Test button */}
      <div className="fixed top-4 right-4 z-50">
        <Button 
          variant="glass" 
          onClick={() => setShowTest(true)}
          className="backdrop-blur-xl"
        >
          Test Components
        </Button>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full gradient-rainbow opacity-20 blur-3xl float-animation" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/20 opacity-20 blur-3xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-500/10 opacity-30 blur-2xl float-animation" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Main chat container */}
      <div className="relative w-full max-w-4xl h-[90vh] mx-4">
        <Chat />
      </div>
    </div>
  );
}

export default App;
