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
        return 'border-green-200 bg-green-50';
      case 'failed':
        return 'border-red-200 bg-red-50';
      case 'running':
        return 'border-blue-200 bg-blue-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className={`p-3 rounded-lg border ${getStatusColor()}`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-0.5">
          {getStatusIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h4 className="text-sm font-medium text-gray-900">{action.title}</h4>
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              {action.type}
            </span>
          </div>
          <p className="text-xs text-gray-600 mt-1">{action.description}</p>
          
          {action.progress !== undefined && action.status === 'running' && (
            <div className="mt-2">
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${action.progress}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500">{action.progress}%</span>
              </div>
            </div>
          )}
          
          {action.error && (
            <div className="mt-2 p-2 bg-red-100 border border-red-200 rounded text-xs text-red-700">
              {action.error}
            </div>
          )}
          
          {action.result && action.status === 'completed' && (
            <div className="mt-2 p-2 bg-green-100 border border-green-200 rounded text-xs text-green-700">
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