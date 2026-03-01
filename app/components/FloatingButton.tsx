"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export interface FloatingButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  showHint?: boolean;
}

export function FloatingButton({
  className,
  showHint = true,
  ...props
}: FloatingButtonProps) {
  return (
    <div className="fixed bottom-20 right-6 z-50 flex items-center gap-3">
      {showHint && (
        <div className="relative animate-bubble opacity-0">
          <div className="rounded-md bg-black px-4 py-2 text-xs text-white shadow-lg">
            무엇이든 물어보세요
          </div>
          <span className="absolute right-2 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-black" />
        </div>
      )}

      <button
        type="button"
        aria-label="open help"
        className={clsx(
          "h-12 w-12 rounded-full bg-black text-white shadow-lg",
          "flex items-center justify-center text-lg",
          className
        )}
        {...props}
      >
        ?
      </button>

      <style jsx>{`
        @keyframes bubbleInOut {
          0% {
            opacity: 0;
            transform: translateX(8px) scale(0.98);
          }
          14.285% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          85.714% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(8px) scale(0.98);
          }
        }
        .animate-bubble {
          animation: bubbleInOut 7s cubic-bezier(0.16, 1, 0.3, 1) both;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
