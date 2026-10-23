import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Caps eyebrow label above the field. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** "light" for dark grounds. */
  tone?: "ink" | "light";
}

/** Understated underline input — serif value, caps label. For inquiry forms. */
export function Input(props: InputProps): JSX.Element;
