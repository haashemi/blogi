import cn from "@/app/_lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
}
const Input = ({ className, ref, type, ...props }: InputProps) => {
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
};

export { Input };
