"use client";

import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

export function ToastProvider({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Toaster richColors position="top-center" />
    </>
  );
}
