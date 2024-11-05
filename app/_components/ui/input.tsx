import cn from "@/app/_lib/cn";
import { forwardRef } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-9 w-full border border-zinc-400 bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-300 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-600",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
