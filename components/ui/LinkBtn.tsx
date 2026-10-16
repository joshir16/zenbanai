"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  label: string;
  href: string;
  icon?: ReactNode;
  badge?: string | number;
}

const LinkBtn = ({ icon, label, href, badge, ...props }: LinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      title={label}
      className={`leading-none ${isActive ? "btn-active" : "btn-primary"}`}
      {...props}
    >
      {icon && <span className="shrink-0 text-stone-light">{icon}</span>}

      {label && (
        <span className="min-w-0 truncate text-xs tracking-wide text-stone-400">
          {label}
        </span>
      )}

      {badge !== undefined && (
        <span className="ml-auto shrink-0 text-[11px] font-light opacity-70">
          {badge} {badge === 1 ? "card" : "cards"}
        </span>
      )}
    </Link>
  );
};

export default LinkBtn;
