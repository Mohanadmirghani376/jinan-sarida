import type { SVGProps } from "react";

/**
 * Brand logo mark: two interlocking "C" shapes forming a chain link
 * (green + red) with a red dot — symbolizing the connected supply chain.
 * Matches the "interconnected chain / C in Arabic & English" concept.
 */
export function ChainMark({
  className = "",
  green = "#008752",
  red = "#d91e36",
  dot = "#d91e36",
  ...props
}: SVGProps<SVGSVGElement> & {
  green?: string;
  red?: string;
  dot?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Green C — opens to the right */}
      <path
        d="M40 16 A18 18 0 1 0 40 48"
        stroke={green}
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Red C — opens to the left, interlocks with the green */}
      <path
        d="M24 16 A18 18 0 1 1 24 48"
        stroke={red}
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Red dot accent */}
      <circle cx="32" cy="32" r="4.5" fill={dot} />
    </svg>
  );
}
