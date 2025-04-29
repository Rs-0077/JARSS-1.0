import React from 'react';

interface JarssLogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export function JarssLogo({ className, size = 40, color = "currentColor" }: JarssLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rombo exterior */}
      <path
        d="M250 50L450 250L250 450L50 250L250 50Z"
        fill={color}
        stroke="none"
      />

      {/* Rombo interior */}
      <path
        d="M250 120L380 250L250 380L120 250L250 120Z"
        fill="currentColor"
        className="text-background dark:text-sidebar"
        stroke="none"
      />

      {/* Detalles internos */}
      <path
        d="M250 150L350 250L250 350L150 250L250 150Z"
        fill={color}
        stroke="none"
      />

      {/* Círculo central */}
      <circle
        cx="250"
        cy="250"
        r="30"
        fill={color}
        stroke="none"
      />
    </svg>
  );
}
