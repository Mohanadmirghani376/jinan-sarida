import type { SVGProps } from "react";

/**
 * Abstract leaf / palm-vein line pattern from the brand guidelines.
 * Renders a set of flowing curved "vein" lines. Use on top of a red or green
 * background, and control visibility via the `className` / `opacity`.
 */
export default function BrandPattern({
  className = "",
  stroke = "currentColor",
  ...props
}: SVGProps<SVGSVGElement> & { stroke?: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <g
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.9"
      >
        {/* central stem */}
        <path d="M40 380 C 160 300, 280 220, 420 120 C 480 80, 540 50, 580 30" />
        {/* veins branching up-left */}
        <path d="M120 340 C 200 300, 250 260, 300 200" />
        <path d="M200 300 C 280 265, 330 225, 380 170" />
        <path d="M280 255 C 355 220, 405 185, 455 135" />
        <path d="M360 205 C 430 175, 475 145, 520 105" />
        {/* veins branching down-right (mirrored) */}
        <path d="M150 360 C 200 320, 215 270, 235 215" />
        <path d="M235 320 C 285 285, 300 240, 320 190" />
        <path d="M315 275 C 365 245, 380 205, 400 160" />
        <path d="M395 228 C 445 202, 460 168, 478 128" />
        {/* short accent flicks */}
        <path d="M470 95 C 500 78, 520 70, 545 60" />
        <path d="M440 155 C 472 140, 495 132, 520 122" />
      </g>
    </svg>
  );
}
