import React from "react";

export type ButtonVariant = "primary" | "clay" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual treatment. `primary` = ink fill, `clay` = terracotta accent, `outline` = hairline, `ghost` = text-only. */
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Render as another element, e.g. "a" for links. */
  as?: keyof JSX.IntrinsicElements;
  disabled?: boolean;
}

/**
 * Uppercase, letter-spaced action control with near-square corners.
 * @startingPoint section="Core" subtitle="Buttons in every variant & size" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
