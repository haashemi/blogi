"use client";
import type { VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import cn from "@/app/_lib/cn";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

interface LabelProps extends ComponentPropsWithoutRef<typeof LabelPrimitive.Root>, VariantProps<typeof labelVariants> {
  ref?: React.Ref<HTMLLabelElement>;
}

const Label = ({ className, ref, ...props }: LabelProps) => (
  <LabelPrimitive.Root className={cn(labelVariants(), className)} ref={ref} {...props} />
);

export { Label };
