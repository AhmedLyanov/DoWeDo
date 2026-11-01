import type { HTMLAttributes, ElementType } from "react";
import "./typography.css";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "body-sm"
  | "caption";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: ElementType;
}

const typographyElements: Record<TypographyVariant, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  "body-sm": "p",
  caption: "span",
};

export function Typography({
  variant = "body",
  as,
  className = "",
  children,
  ...props
}: TypographyProps) {
  const Component = as ?? typographyElements[variant];

  return (
    <Component
      className={`typography typography--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Typography;