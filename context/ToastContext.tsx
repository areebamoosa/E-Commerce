"use client";

import { createContext, useState } from "react";

type ToastType = {
  id: number;
  message: string;
  type: "success" | "error";
};

type ToastContextType = {
  toasts: ToastType[];
  addToast: (message: string, type?: "success" | "error") => void;
};

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (message: string, type: "success" | "error" = "success") => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2000);
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
    </ToastContext.Provider>
  );
};
