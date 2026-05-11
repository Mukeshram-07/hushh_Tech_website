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
    type = "button",
    ...rest
  } = props;

  return (
    <button
      {...rest}
      type={type}
      aria-label={label}
      aria-busy={loading}
      disabled={disabled || loading}
      className={clsx(
        "transition-colors",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-offset-2",
        "disabled:opacity-50",
        "disabled:cursor-not-allowed",
        "min-h-[44px]",
        "min-w-[44px]",
        className
      )}
    >
      {loading ? (
        <>
          <span aria-hidden="true">...</span>
          <span className="sr-only">Loading</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}