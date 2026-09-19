import type { ReactNode } from "react";

/** External link that opens in a new tab and says so to screen readers. */
export function ExternalLink({
  href,
  children,
  className = "link",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
