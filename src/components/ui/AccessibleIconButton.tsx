import React from "react";
import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface AccessibleIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  loading?: boolean;
}

export default function AccessibleIconButton(
  props: AccessibleIconButtonProps
) {
  const {
    label,
    loading = false,
    className,
    disabled,
    children,
    ...rest
  } = props;

  return (
    <button
      aria-label={label}
      disabled={disabled || loading}
      className={clsx(
        "transition-colors",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-offset-2",
        "disabled:opacity-50",
        "disabled:cursor-not-allowed",
        className
      )}
      {...rest}
    >
      {loading ? "..." : children}
    </button>
  );
}