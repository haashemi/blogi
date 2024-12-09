"use client";
import type * as LabelPrimitive from "@radix-ui/react-label";
import type { ComponentPropsWithoutRef, HTMLAttributes, Ref } from "react";
import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";

import { Label } from "@/app/_components/ui/label";
import cn from "@/app/_lib/cn";
import { Slot } from "@radix-ui/react-slot";
import { createContext, useContext, useId, useMemo } from "react";
import { Controller, FormProvider, useFormContext } from "react-hook-form";

const Form = FormProvider;

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName;
}

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue);

interface FormItemContextValue {
  id: string;
}

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  const value = useMemo(() => ({ name: props.name }), [props.name]);

  return (
    <FormFieldContext.Provider value={value}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

interface FormItemProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
}

const FormItem = ({ className, ref, ...props }: FormItemProps) => {
  const id = useId();
  const value = useMemo(() => ({ id }), [id]);

  return (
    <FormItemContext.Provider value={value}>
      <div className={cn("space-y-2", className)} ref={ref} {...props} />
    </FormItemContext.Provider>
  );
};

interface FormLabelProps extends ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  ref?: Ref<HTMLLabelElement>;
}

const FormLabel = ({ className, ref, ...props }: FormLabelProps) => {
  const { error, formItemId } = useFormField();

  return <Label className={cn(error && "text-red-500", className)} htmlFor={formItemId} ref={ref} {...props} />;
};

interface FormControlProps extends ComponentPropsWithoutRef<typeof Slot> {
  ref?: Ref<HTMLDivElement>;
}

const FormControl = ({ ref, ...props }: FormControlProps) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      aria-describedby={!error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      id={formItemId}
      ref={ref}
      {...props}
    />
  );
};

interface FormDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  ref?: Ref<HTMLParagraphElement>;
}

const FormDescription = ({ className, ref, ...props }: FormDescriptionProps) => {
  const { formDescriptionId } = useFormField();

  return <p className={cn("text-sm text-gray-500", className)} id={formDescriptionId} ref={ref} {...props} />;
};

interface FormMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  ref?: Ref<HTMLParagraphElement>;
}

const FormMessage = ({ className, children, ref, ...props }: FormMessageProps) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p className={cn("text-sm font-medium text-red-500", className)} id={formMessageId} ref={ref} {...props}>
      {body}
    </p>
  );
};

export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField };
