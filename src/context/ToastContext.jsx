import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info', duration = 3500) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 5);
    const newToast = { id, message, type };

    setToasts(prev => [...prev, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      <div className="toast-container" role="region" aria-label="Notifications">
        {toasts.map(toast => {
          let icon = <Info size={20} color="var(--primary-600)" />;
          let toastClass = 'toast-info';

          if (toast.type === 'success') {
            icon = <CheckCircle2 size={20} color="#10b981" />;
            toastClass = 'toast-success';
          } else if (toast.type === 'error') {
            icon = <AlertCircle size={20} color="#ef4444" />;
            toastClass = 'toast-error';
          } else if (toast.type === 'warning') {
            icon = <AlertTriangle size={20} color="#f59e0b" />;
            toastClass = 'toast-warning';
          }

          return (
            <div key={toast.id} className={`toast ${toastClass}`} role="alert">
              {icon}
              <span className="toast-message">{toast.message}</span>
              <button
                type="button"
                className="toast-close"
                onClick={() => removeToast(toast.id)}
                aria-label="Dismiss notification"
              >
                <X size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
