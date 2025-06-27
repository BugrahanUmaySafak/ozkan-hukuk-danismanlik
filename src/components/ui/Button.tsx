"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { Loader2 } from "lucide-react";

type Props = {
  isLoading?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
