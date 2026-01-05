import { PropsWithChildren } from "react";
import { QueryProvider } from "./query-provider";
import { ToastProvider } from "./toast-provider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <ToastProvider>{children}</ToastProvider>
    </QueryProvider>
  );
}
