"use client";

import { Children, ReactNode, cloneElement, isValidElement } from "react";
import clsx from "clsx";
import { Radio, type RadioProps } from "./Radio";

interface RadioGroupProps<T extends string | number> {
  value: T;
  onChange: (value: T) => void;
  name: string;
  label?: ReactNode;
  direction?: "row" | "column";
  className?: string;
  children:
    | React.ReactElement<RadioProps>
    | Array<React.ReactElement<RadioProps>>;
}

export function RadioGroup<T extends string | number>({
  value,
  onChange,
  name,
  label,
  direction = "column",
  className,
  children,
}: RadioGroupProps<T>) {
  const directionClass =
    direction === "column" ? "flex-col gap-2" : "flex-row gap-4";

  return (
    <fieldset className={clsx("flex", directionClass, className)}>
      {label && (
        <legend className="mb-1 text-sm font-medium text-gray-900">
          {label}
        </legend>
      )}

      {Children.map(children, (child) => {
        if (!isValidElement<RadioProps>(child)) return null;

        return cloneElement(child, {
          name,
          checked: (child.props.value as unknown as T) === value,
          onChange: () => onChange(child.props.value as unknown as T),
        });
      })}
    </fieldset>
  );
}
