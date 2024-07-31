import { cn } from "@/lib/utils";

import { ReactNode } from "react";
interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}

function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return (
    <div className={cn("h-full w-full max-w-screen-xl px-2 ", className)}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
