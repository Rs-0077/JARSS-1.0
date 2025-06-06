import React from "react";

interface JarssLogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export function JarssLogo({
  className,
  size = 40,
  color = "currentColor",
}: JarssLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-oid="wqgro-f"
    >
      {/* Rombo exterior */}
      <path
        d="M250 50L450 250L250 450L50 250L250 50Z"
        fill={color}
        stroke="none"
        data-oid="z2v9ubu"
      />

      {/* Rombo interior */}
      <path
        d="M250 120L380 250L250 380L120 250L250 120Z"
        fill="currentColor"
        className="text-background dark:text-sidebar"
        stroke="none"
        data-oid="80h.qky"
      />

      {/* Detalles internos */}
      <path
        d="M250 150L350 250L250 350L150 250L250 150Z"
        fill={color}
        stroke="none"
        data-oid="_axnzn0"
      />

      {/* Círculo central */}
    </svg>
  );
}
