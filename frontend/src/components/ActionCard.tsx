import React from 'react';
import type { Action } from '../types';
import { CheckCircle, XCircle, Loader2, Clock } from 'lucide-react';

interface ActionCardProps {
  action: Action;
}

export const ActionCard: React.FC<ActionCardProps> = ({ action }) => {
  const getStatusIcon = () => {
    switch (action.status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'failed':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'running':
        return <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = () => {
    switch (action.status) {
      case 'completed':
        return 'border-green-400/30 bg-green-500/10';
      case 'failed':
        return 'border-red-400/30 bg-red-500/10';
      case 'running':
        return 'border-blue-400/30 bg-blue-500/10';
      default:
        return 'border-white/20 bg-white/5';
    }
  };

  return (
    <div className={`p-5 rounded-2xl border border-white/10 glass-dark shadow-glass transform hover:scale-[1.01] transition-all duration-300`}> 
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">
          {getStatusIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-3">
            <h4 className="text-base font-semibold text-white">{action.title}</h4>
            <span className="text-xs text-white/70 uppercase tracking-wider bg-accent/10 px-2 py-1 rounded-full">
              {action.type}
            </span>
          </div>
          <p className="text-sm text-white/80 mt-2 leading-relaxed">{action.description}</p>
          {action.progress !== undefined && action.status === 'running' && (
            <div className="mt-3">
              <div className="flex items-center space-x-3">
                <div className="flex-1 bg-white/20 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-accent-blue to-accent h-2 rounded-full transition-all duration-500 shadow-sm"
                    style={{ width: `${action.progress}%` }}
                  />
                </div>
                <span className="text-xs text-white/90 font-medium">{action.progress}%</span>
              </div>
            </div>
          )}
          {action.error && (
            <div className="mt-3 p-3 bg-red-500/20 border border-red-400/30 rounded-xl text-xs text-red-200 backdrop-blur-sm">
              {action.error}
            </div>
          )}
          {action.result && action.status === 'completed' && (
            <div className="mt-3 p-3 bg-green-500/20 border border-green-400/30 rounded-xl text-xs text-green-200 backdrop-blur-sm">
              <pre className="whitespace-pre-wrap">
                {typeof action.result === 'string' ? action.result : JSON.stringify(action.result, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};