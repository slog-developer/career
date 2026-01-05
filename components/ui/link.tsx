"use client";

import clsx from "clsx";
import { AnchorHTMLAttributes } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline";
}

export function Link({
  children,
  variant = "primary",
  className,
  ...props
}: LinkProps) {
  const base = "font-medium underline-none";

  const variants = {
    primary: "text-blue-600 hover:text-blue-800",
    secondary: "text-gray-600 hover:text-gray-800",
    outline: "text-gray-800 hover:text-gray-600",
  };

  return (
    <a className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
