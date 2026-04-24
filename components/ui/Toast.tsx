"use client";

import { useToast } from "@/hooks/useToast";

const Toast = () => {
  const { toasts = [] } = useToast();

  return (
    <div className="fixed top-18 left-1/2 -translate-x-1/2 flex flex-col gap-3 z-50">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`
            px-6 py-3 rounded-full shadow-xl
            text-sm font-medium tracking-wide
            transition-all duration-500
            animate-toast-in
            font
            ${
              t.type === "success"
                ? "bg-[#f7c6d9] text-white"
                : "bg-white text-black border border-gray-200"
            }
          `}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
};

export default Toast;
