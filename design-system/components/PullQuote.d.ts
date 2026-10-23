import React from "react";

export interface PullQuoteProps extends React.HTMLAttributes<HTMLElement> {
  /** Attribution line, rendered as a caps label below the quote. */
  cite?: string;
  tone?: "ink" | "light";
  align?: "left" | "center";
}

/** Large light-serif quotation for client words and studio philosophy. */
export function PullQuote(props: PullQuoteProps): JSX.Element;
