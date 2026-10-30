import React from "react";

export interface CornerFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Top-left / top-right serif brand letters. Default "S" / "B". */
  tl?: string;
  tr?: string;
  /** Bottom-right stacked caps label. Default "BEVERLY HILLS". */
  brLabel?: string;
  /** Relative URL to the brushstroke mark (bottom-left, links home). */
  markSrc?: string;
  /** Vertical side-nav labels. Default "STUDIO" / "WORK". */
  leftLabel?: string;
  rightLabel?: string;
  /** "ink" = oxblood glyphs (light grounds); "light" = porcelain (over dark/imagery). */
  tone?: "ink" | "light";
  /** When true, omit the fixed bottom-center mark + label (e.g. so it can scroll with a hero). Default false. */
  hideBottom?: boolean;
  onHome?: () => void;
  onLeft?: () => void;
  onRight?: () => void;
  /** Corner inset in px. Default 40. */
  pad?: number;
}

/**
 * The studio's signature page shell — fixed serif corner letters + brushstroke mark,
 * with vertical STUDIO / WORK navigation. Wrap a whole page in it.
 * @startingPoint section="Layout" subtitle="Fixed serif corner-frame page shell" viewport="1280x720"
 */
export function CornerFrame(props: CornerFrameProps): JSX.Element;
