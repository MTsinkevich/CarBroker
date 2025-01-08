import { XCircle, CheckCircle } from 'lucide-react';

interface AlertProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export default function Alert({ type, message, onClose }: AlertProps) {
  return (
    <div className={`fixed top-4 right-4 max-w-md p-4 rounded-lg shadow-lg ${
      type === 'success' ? 'bg-green-50' : 'bg-red-50'
    }`}>
      <div className="flex items-start gap-3">
        {type === 'success' ? (
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
        ) : (
          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
        )}
        <div className="flex-1">
          <p className={`text-sm ${
            type === 'success' ? 'text-green-800' : 'text-red-800'
          }`}>
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className={`flex-shrink-0 ml-4 text-sm font-medium ${
            type === 'success' ? 'text-green-600 hover:text-green-800' : 'text-red-600 hover:text-red-800'
          }`}
        >
          Close
        </button>
      </div>
    </div>
  );
}