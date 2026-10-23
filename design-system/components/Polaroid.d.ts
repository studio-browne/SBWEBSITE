import React from "react";

export interface PolaroidProps extends React.HTMLAttributes<HTMLElement> {
  image: string;
  /** When set (and an <image-slot> element is registered on the page), the photo renders as a drag-and-drop image slot with this persistence id. */
  slotId?: string;
  /** Caps caption printed on the white bottom lip. */
  caption?: string;
  /** CSS aspect-ratio for the photo. Default "1 / 1". */
  ratio?: string;
  /** Degrees of tilt, e.g. -2. Default 0. */
  tilt?: number;
  /** Explicit frame width (CSS length). */
  width?: string;
  /** Drop the white instant-film frame — show just the image with a rounded edge. */
  bare?: boolean;
}

/**
 * Instant-film image frame — thick white border, deep bottom lip, warm shadow, optional tilt + caption.
 * @startingPoint section="Content" subtitle="Instant-film photo frame" viewport="420x480"
 */
export function Polaroid(props: PolaroidProps): JSX.Element;
