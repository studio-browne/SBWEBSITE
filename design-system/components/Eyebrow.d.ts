import React from "react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Prefix with a short hairline rule. */
  rule?: boolean;
  tone?: "muted" | "clay" | "ink" | "light";
}

/** Wide letter-spaced caps label used above headlines and to mark sections. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
