import { useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import "./input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

export const Input = ({
  label,
  hint,
  error,
  leftElement,
  rightElement,
  id,
  className = "",
  disabled = false,
  required = false,
  ...props
}: InputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const descriptionId = `${inputId}-description`;
  const hasError = Boolean(error);

  const classes = [
    "input",
    hasError && "input--error",
    disabled && "input--disabled",
    leftElement && "input--with-left-element",
    rightElement && "input--with-right-element",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="input-field">
      {label && (
        <label className="input-field__label" htmlFor={inputId}>
          {label}

          {required && (
            <span className="input-field__required" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <div className={classes}>
        {leftElement && (
          <span className="input__element input__element--left">
            {leftElement}
          </span>
        )}

        <input
          {...props}
          id={inputId}
          className="input__control"
          disabled={disabled}
          required={required}
          aria-invalid={hasError || undefined}
          aria-describedby={
            error || hint ? descriptionId : undefined
          }
        />

        {rightElement && (
          <span className="input__element input__element--right">
            {rightElement}
          </span>
        )}
      </div>

      {(error || hint) && (
        <span
          id={descriptionId}
          className={`input-field__description ${
            hasError ? "input-field__description--error" : ""
          }`}
          role={hasError ? "alert" : undefined}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
};

export default Input;