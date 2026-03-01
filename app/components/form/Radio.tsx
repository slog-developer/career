"use client";

import { InputHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
}

export function Radio({ label, className, disabled, ...props }: RadioProps) {
  return (
    <label
      className={clsx(
        "inline-flex items-center gap-2 cursor-pointer select-none",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      <input
        type="radio"
        disabled={disabled}
        className="peer sr-only"
        {...props}
      />

      <span
        className={clsx(
          "relative flex h-4 w-4 items-center justify-center rounded-full border",
          "border-gray-400 bg-white",
          "peer-checked:border-transparent",
          "peer-checked:bg-[url('/radio_active.svg')] peer-checked:bg-center peer-checked:bg-no-repeat peer-checked:bg-contain",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-black/50"
        )}
      />

      {label && (
        <span className="text-sm text-gray-900 peer-checked:font-medium">
          {label}
        </span>
      )}
    </label>
  );
}
