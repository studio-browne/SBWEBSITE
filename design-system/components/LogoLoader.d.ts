import React from "react";

export interface LogoLoaderProps {
  /** Ground behind the mark. "transparent" (default) draws over page content; the others are opaque splash screens. Ink auto-switches to sand on espresso. */
  background?: "transparent" | "sand" | "espresso" | "camel";
  /** Optional CSS color override for the mark. */
  ink?: string;
  /** Relative URL to the SB brushstroke mark PNG (assets/logo-mark.png) from the consuming page. */
  logoSrc?: string;
}

/**
 * Brand loading overlay: the brushstroke SB mark draws itself on
 * (S flick → ring → stem → bowl, ~3s), settles, then the overlay fades
 * out and unmounts (~4s total). Fixed inset-0, z-index 9999, pointer-events none.
 * @startingPoint section="Brand" subtitle="Animated logo loading overlay" viewport="700x420"
 */
export function LogoLoader(props: LogoLoaderProps): JSX.Element;
