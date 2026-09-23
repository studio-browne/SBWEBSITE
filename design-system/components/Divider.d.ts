import React from "react";

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  tone?: "ink" | "light";
  /** Center a small clay dot marker between two rules — a section break. */
  marker?: boolean;
}

/** Warm hairline rule, with an optional centered clay-dot section marker. */
export function Divider(props: DividerProps): JSX.Element;
