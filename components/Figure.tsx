import type { ReactNode } from "react";

export function Figure({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <figure className="figure">
      {children}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
