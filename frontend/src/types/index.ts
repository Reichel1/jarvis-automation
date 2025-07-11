export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  type: 'user' | 'assistant' | 'system';
  actions?: Action[];
}

export interface Action {
  id: string;
  type: 'webhook' | 'automation' | 'mcp-tool';
  title: string;
  description: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  progress?: number;
  result?: any;
  error?: string;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  currentAction?: Action;
}