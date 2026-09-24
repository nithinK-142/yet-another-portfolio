import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/Icon";
import { accessibility } from "@/content/site";

/** External link that opens in a new tab and says so to screen readers. */
export function ExternalLink({
  href,
  children,
  className = "link",
  icon,
  trailing,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  /** Icon before the label. */
  icon?: IconName;
  /** Icon after the label, e.g. "external". */
  trailing?: IconName;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
      {icon && <Icon name={icon} size={17} />}
      <span>{children}</span>
      {trailing && <Icon name={trailing} size={15} />}
      <span className="sr-only">{accessibility.externalLinkSuffix}</span>
    </a>
  );
}
