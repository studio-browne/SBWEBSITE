import React from "react";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Interior image URL. */
  image: string;
  title: string;
  /** e.g. "Beverly Hills, CA". */
  location?: string;
  /** Caps category, rendered in clay. e.g. "Full-Service Residential". */
  category?: string;
  /** Arch the top of the image — the SB architectural motif. */
  arch?: boolean;
  /** CSS aspect-ratio string, default "3 / 4". */
  ratio?: string;
  href?: string;
}

/**
 * Portfolio unit: full-bleed interior image + editorial caption; slow warm hover lift.
 * @startingPoint section="Content" subtitle="Portfolio project card" viewport="420x620"
 */
export function ProjectCard(props: ProjectCardProps): JSX.Element;
