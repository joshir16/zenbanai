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
      className={`${isActive ? "btn-active" : "btn-primary"} ${label !== "All Board" ? "justify-between" : ""}`}
      {...props}
    >
      {icon && <span className="shrink-0 text-stone-light">{icon}</span>}

      {label && (
        <span className="text-xs text-stone-400 tracking-widest">{label}</span>
      )}

      {badge !== undefined && (
        <span className="ml-auto shrink-0 text-[11px] font-light opacity-70">
          {badge} cards
        </span>
      )}
    </Link>
  );
};

export default LinkBtn;
