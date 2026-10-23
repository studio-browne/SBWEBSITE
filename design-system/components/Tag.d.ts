import React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "pill" = bordered capsule, "bare" = plain caps label. */
  variant?: "pill" | "bare";
  /** Filled (active) state for filter rows. */
  selected?: boolean;
  tone?: "ink" | "light";
}

/** Caps category / service / filter chip. Selectable when given onClick. */
export function Tag(props: TagProps): JSX.Element;
