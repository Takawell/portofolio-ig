import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-zinc-900 border border-default rounded-xl shadow-sm p-4",
        className
      )}
    >
      {children}
    </div>
  );
}
