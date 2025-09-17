import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg text-sm font-medium transition",
        variant === "primary" &&
          "bg-primary text-white hover:opacity-90",
        variant === "outline" &&
          "border border-default hover:bg-muted",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
