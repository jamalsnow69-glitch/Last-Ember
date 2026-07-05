import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  duration?: number;
}

export default function Toast({ message, duration = 2500 }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#2a2a2a] border border-[#555] text-text-bright px-6 py-3 rounded-full text-sm z-[300] animate-slide-up shadow-lg">
      {message}
    </div>
  );
}