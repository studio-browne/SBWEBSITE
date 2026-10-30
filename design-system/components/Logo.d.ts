import React from "react";

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "lockup" = mark + wordmark, "mark" = brushstroke monogram only, "wordmark" = type only. */
  variant?: "lockup" | "mark" | "wordmark";
  /** "ink" for light grounds, "light" for dark grounds. */
  tone?: "ink" | "light";
  /** Relative URL to the SB brushstroke mark PNG (assets/logo-mark.png or logo-mark-light.png). */
  markSrc?: string;
  /** Mark height in px (wordmark scales from this). */
  size?: number;
}

/**
 * The Studio Browne identity: hand-drawn brushstroke SB monogram + Manofa wordmark.
 * @startingPoint section="Brand" subtitle="Logo lockup, mark & wordmark" viewport="700x180"
 */
export function Logo(props: LogoProps): JSX.Element;
