import type { SVGProps } from "react";
import BrandPattern from "./BrandPattern";

type Props = SVGProps<SVGSVGElement> & { art: string; sector: string };

const GRADIENTS: Record<string, [string, string]> = {
  trucks: ["#e5354b", "#971626"], // red
  construction: ["#284a86", "#001f5b"], // navy
  agriculture: ["#27a065", "#005534"], // green
  medical: ["#008752", "#001f5b"], // green -> navy (teal)
};

/** Silhouette content for each product, drawn in a 400×300 viewBox. */
function Silhouette({ art }: { art: string }) {
  switch (art) {
    // ---------------- TRUCKS ----------------
    case "dump-truck":
      return (
        <g fill="white">
          <path d="M70 200 h40 l8-46 h44 v46 h10 V150 l70-26 v76 h14" />
          <rect x="60" y="150" width="60" height="40" rx="6" />
          <rect x="150" y="120" width="150" height="34" rx="4" transform="rotate(-12 225 137)" />
          <circle cx="95" cy="205" r="18" />
          <circle cx="205" cy="205" r="18" />
          <circle cx="240" cy="205" r="18" />
        </g>
      );
    case "tractor-head":
      return (
        <g fill="white">
          <path d="M60 200 v-60 q0-14 14-14 h40 l10-24 h44 l6 24 h20 q14 0 14 14 v60 h-24 v-30 h-70 v30 z" />
          <rect x="150" y="150" width="120" height="16" rx="4" />
          <circle cx="95" cy="205" r="16" />
          <circle cx="235" cy="205" r="22" />
        </g>
      );
    case "box-truck":
      return (
        <g fill="white">
          <path d="M60 200 v-40 q0-10 10-10 h24 l12-26 h34 v76 h-80z" />
          <rect x="140" y="104" width="150" height="96" rx="6" />
          <circle cx="95" cy="205" r="16" />
          <circle cx="245" cy="205" r="16" />
        </g>
      );
    case "tanker-truck":
      return (
        <g fill="white">
          <path d="M56 200 v-42 q0-10 10-10 h26 l12-24 h30 v76 h-78z" />
          <rect x="140" y="120" width="156" height="58" rx="29" />
          <rect x="150" y="112" width="12" height="14" rx="3" />
          <rect x="188" y="110" width="12" height="16" rx="3" />
          <circle cx="92" cy="205" r="16" />
          <circle cx="240" cy="205" r="16" />
        </g>
      );
    case "mixer-truck":
      return (
        <g fill="white">
          <path d="M52 200 v-42 q0-10 10-10 h26 l12-24 h30 v76 h-78z" />
          <ellipse cx="205" cy="150" rx="78" ry="44" transform="rotate(-14 205 150)" />
          <rect x="150" y="182" width="150" height="18" rx="6" />
          <circle cx="90" cy="205" r="16" />
          <circle cx="215" cy="205" r="16" />
          <circle cx="250" cy="205" r="16" />
        </g>
      );
    case "crane-truck":
      return (
        <g fill="white">
          <path d="M52 200 v-40 q0-10 10-10 h28 l10-22 h30 v72 h-78z" />
          <rect x="140" y="176" width="150" height="22" rx="6" />
          <path d="M170 176 l150-70 10 16 -150 66z" />
          <rect x="150" y="140" width="34" height="36" rx="6" />
          <circle cx="88" cy="205" r="16" />
          <circle cx="200" cy="205" r="16" />
          <circle cx="240" cy="205" r="16" />
        </g>
      );

    // ---------------- CONSTRUCTION ----------------
    case "excavator":
      return (
        <g fill="white">
          <rect x="60" y="176" width="180" height="34" rx="17" />
          <circle cx="92" cy="193" r="10" fill="#001f5b" />
          <circle cx="208" cy="193" r="10" fill="#001f5b" />
          <path d="M96 176 v-34 h96 v34z" />
          <rect x="120" y="128" width="40" height="30" rx="4" fill="#284a86" />
          <path d="M192 150 l60-58 16 12 -50 60z" />
          <path d="M252 104 l58 6 6 40 -30 4 -6-26 -34-6z" />
          <path d="M312 158 q22 6 18 30 l-40 -6z" />
        </g>
      );
    case "wheel-loader":
      return (
        <g fill="white">
          <path d="M110 190 v-40 h70 v40z" />
          <rect x="128" y="128" width="42" height="26" rx="4" fill="#284a86" />
          <path d="M180 150 l60 6 v34 h-60z" />
          <path d="M240 156 l50-6 8 46 -58 4z" />
          <rect x="120" y="190" width="140" height="14" rx="6" />
          <circle cx="140" cy="204" r="24" />
          <circle cx="228" cy="204" r="24" />
        </g>
      );
    case "bulldozer":
      return (
        <g fill="white">
          <rect x="86" y="176" width="170" height="34" rx="17" />
          <circle cx="118" cy="193" r="10" fill="#001f5b" />
          <circle cx="224" cy="193" r="10" fill="#001f5b" />
          <path d="M120 176 v-40 h84 v40z" />
          <rect x="140" y="126" width="40" height="30" rx="4" fill="#284a86" />
          <path d="M256 120 l24 8 -6 90 -24 -8z" />
          <path d="M60 132 l30 6 -8 74 -30 -6z" />
          <rect x="52" y="128" width="16" height="92" rx="4" />
        </g>
      );
    case "motor-grader":
      return (
        <g fill="white">
          <rect x="70" y="120" width="230" height="14" rx="6" />
          <path d="M150 120 v-22 h56 v22z" />
          <rect x="162" y="100" width="34" height="22" rx="4" fill="#284a86" />
          <path d="M150 150 l70 0 -14 30 -42 0z" />
          <rect x="150" y="176" width="70" height="8" rx="4" transform="rotate(8 185 180)" />
          <circle cx="96" cy="150" r="18" />
          <circle cx="272" cy="150" r="18" />
          <circle cx="120" cy="150" r="12" />
          <circle cx="248" cy="150" r="12" />
        </g>
      );
    case "road-roller":
      return (
        <g fill="white">
          <rect x="120" y="150" width="90" height="30" rx="8" />
          <rect x="140" y="112" width="46" height="40" rx="6" />
          <rect x="150" y="120" width="26" height="22" rx="3" fill="#284a86" />
          <rect x="205" y="176" width="70" height="16" rx="6" />
          <circle cx="110" cy="184" r="42" />
          <circle cx="110" cy="184" r="16" fill="#284a86" />
          <circle cx="252" cy="192" r="22" />
        </g>
      );
    case "mobile-crane":
      return (
        <g fill="white">
          <rect x="70" y="168" width="220" height="30" rx="10" />
          <circle cx="110" cy="204" r="16" />
          <circle cx="160" cy="204" r="16" />
          <circle cx="250" cy="204" r="16" />
          <rect x="150" y="150" width="60" height="18" rx="6" />
          <path d="M188 152 l150-96 12 16 -150 92z" />
          <path d="M330 44 l10 22 -26 20 -10-22z" />
        </g>
      );

    // ---------------- AGRICULTURE ----------------
    case "tractor":
      return (
        <g fill="white">
          <path d="M120 190 v-46 h56 l14-30 h40 v76 h-110z" />
          <rect x="150" y="120" width="34" height="30" rx="4" fill="#005534" />
          <rect x="196" y="104" width="10" height="30" rx="4" />
          <rect x="96" y="150" width="20" height="40" rx="6" />
          <circle cx="238" cy="182" r="34" />
          <circle cx="238" cy="182" r="13" fill="#005534" />
          <circle cx="112" cy="192" r="20" />
          <circle cx="112" cy="192" r="8" fill="#005534" />
        </g>
      );
    case "harvester":
      return (
        <g fill="white">
          <path d="M110 190 v-56 h96 v56z" />
          <rect x="130" y="118" width="42" height="30" rx="4" fill="#005534" />
          <rect x="206" y="150" width="40" height="40" rx="6" />
          <path d="M64 150 h50 v40 h-50z" />
          <circle cx="86" cy="150" r="26" fill="#005534" />
          <path d="M60 150 l52-22 6 12 -52 22z" />
          <circle cx="150" cy="196" r="24" />
          <circle cx="222" cy="196" r="18" />
        </g>
      );
    case "tiller":
      return (
        <g fill="white">
          <rect x="120" y="118" width="150" height="20" rx="6" />
          <path d="M120 138 h150 v10 h-150z" />
          <rect x="96" y="126" width="30" height="10" rx="4" />
          <path d="M136 148 v34 M166 148 v34 M196 148 v34 M226 148 v34 M256 148 v34" stroke="white" strokeWidth="8" strokeLinecap="round" />
          <path d="M130 182 q10 16 22 0 M160 182 q10 16 22 0 M190 182 q10 16 22 0 M220 182 q10 16 22 0" stroke="white" strokeWidth="7" fill="none" strokeLinecap="round" />
          <circle cx="90" cy="132" r="12" />
        </g>
      );
    case "seeder":
      return (
        <g fill="white">
          <path d="M110 120 h170 l-16 44 h-138z" />
          <rect x="120" y="164" width="150" height="12" rx="4" />
          <path d="M132 176 v22 M170 176 v22 M208 176 v22 M246 176 v22" stroke="white" strokeWidth="8" strokeLinecap="round" />
          <circle cx="132" cy="202" r="10" />
          <circle cx="170" cy="202" r="10" />
          <circle cx="208" cy="202" r="10" />
          <circle cx="246" cy="202" r="10" />
          <rect x="86" y="140" width="26" height="8" rx="4" />
        </g>
      );
    case "irrigation":
      return (
        <g fill="white">
          <path d="M70 190 h250" stroke="white" strokeWidth="6" strokeLinecap="round" />
          <path d="M90 190 V96 h44 v94" stroke="white" strokeWidth="10" fill="none" strokeLinejoin="round" />
          <path d="M112 96 l120 40" stroke="white" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M180 122 v26 M214 134 v26 M248 146 v26" stroke="white" strokeWidth="5" strokeLinecap="round" />
          <circle cx="180" cy="152" r="6" />
          <circle cx="214" cy="164" r="6" />
          <circle cx="248" cy="176" r="6" />
          <path d="M112 96 l60 40" stroke="white" strokeWidth="10" fill="none" strokeLinecap="round" />
          <circle cx="112" cy="192" r="10" />
          <circle cx="300" cy="192" r="10" />
        </g>
      );
    case "sprayer":
      return (
        <g fill="white">
          <rect x="150" y="120" width="70" height="46" rx="8" />
          <rect x="96" y="150" width="180" height="8" rx="4" />
          <path d="M110 158 v16 M150 158 v16 M190 158 v16 M230 158 v16 M262 158 v16" stroke="white" strokeWidth="5" strokeLinecap="round" />
          <path d="M104 178 h180" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6" />
          <rect x="160" y="166" width="16" height="26" rx="4" />
          <circle cx="130" cy="196" r="16" />
          <circle cx="230" cy="196" r="16" />
        </g>
      );

    // ---------------- MEDICAL ----------------
    case "hospital-bed":
      return (
        <g fill="white">
          <rect x="70" y="150" width="240" height="22" rx="6" />
          <path d="M78 150 v-44 q0-8 8-8 h16 v52z" />
          <rect x="70" y="120" width="12" height="60" rx="4" />
          <path d="M296 150 v-30 h14 v30z" />
          <rect x="92" y="120" width="60" height="30" rx="6" />
          <path d="M90 172 v22 M300 172 v22" stroke="white" strokeWidth="8" strokeLinecap="round" />
          <rect x="120" y="188" width="160" height="8" rx="4" />
        </g>
      );
    case "patient-monitor":
      return (
        <g fill="white">
          <rect x="110" y="96" width="180" height="120" rx="12" />
          <rect x="126" y="112" width="148" height="76" rx="6" fill="#001f5b" />
          <path d="M134 152 h24 l10-22 12 44 12-30 10 14 h40" stroke="#008752" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="182" y="216" width="36" height="24" rx="4" />
          <rect x="150" y="240" width="100" height="12" rx="6" />
          <circle cx="150" cy="204" r="5" fill="#001f5b" />
          <circle cx="168" cy="204" r="5" fill="#001f5b" />
        </g>
      );
    case "ultrasound":
      return (
        <g fill="white">
          <rect x="120" y="100" width="150" height="90" rx="10" />
          <rect x="134" y="114" width="122" height="62" rx="5" fill="#001f5b" />
          <path d="M180 174 q30-40 60 0z" fill="#008752" />
          <rect x="150" y="190" width="90" height="12" rx="4" />
          <rect x="150" y="202" width="90" height="40" rx="6" />
          <circle cx="168" cy="216" r="5" fill="#001f5b" />
          <circle cx="186" cy="216" r="5" fill="#001f5b" />
          <path d="M270 150 q34 6 30 44" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
          <rect x="292" y="188" width="16" height="26" rx="7" transform="rotate(20 300 201)" />
        </g>
      );
    case "surgical-instruments":
      return (
        <g fill="white">
          <rect x="80" y="150" width="240" height="60" rx="10" />
          <rect x="90" y="158" width="220" height="44" rx="6" fill="#008752" />
          <path d="M120 168 l40 34 M160 168 l-40 34" stroke="white" strokeWidth="6" strokeLinecap="round" />
          <circle cx="120" cy="168" r="6" />
          <circle cx="160" cy="168" r="6" />
          <path d="M200 168 v34 M214 168 v34" stroke="white" strokeWidth="6" strokeLinecap="round" />
          <path d="M250 170 q18 12 0 30" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M270 170 q18 12 0 30" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
      );
    case "wheelchair":
      return (
        <g fill="white">
          <circle cx="150" cy="170" r="48" />
          <circle cx="150" cy="170" r="16" fill="#008752" />
          <path d="M150 122 v-18 M104 170 h92 M150 218 v-96" stroke="#008752" strokeWidth="4" />
          <rect x="196" y="120" width="14" height="70" rx="6" />
          <path d="M196 150 h44" stroke="white" strokeWidth="8" strokeLinecap="round" />
          <path d="M210 190 h40 v10 h-40z" />
          <path d="M250 120 v70" stroke="white" strokeWidth="8" strokeLinecap="round" />
          <circle cx="244" cy="200" r="14" />
        </g>
      );
    case "ppe":
      return (
        <g fill="white">
          <path d="M120 120 q80-30 160 0 q-6 70 -80 70 q-74 0 -80-70z" />
          <path d="M120 120 q-20 6 -22 30 q14-8 24-8z" />
          <path d="M280 120 q20 6 22 30 q-14-8 -24-8z" />
          <path d="M138 150 q62-18 124 0" stroke="#008752" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M140 168 q60-16 120 0" stroke="#008752" strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
      );

    default:
      return (
        <g fill="white">
          <rect x="110" y="110" width="180" height="100" rx="12" />
        </g>
      );
  }
}

/**
 * Branded product illustration used as the product "photo".
 * Renders a gradient background (by sector) with a bold product silhouette.
 * Replace with a real photo by setting `image` on the product in the data file.
 */
export default function ProductIllustration({
  art,
  sector,
  className = "",
  ...props
}: Props) {
  const [from, to] = GRADIENTS[sector] ?? GRADIENTS.trucks;
  const id = `pg-${art}`;

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-label={art.replace(/-/g, " ")}
      {...props}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id})`} />
      <BrandPattern
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full"
        stroke="rgba(255,255,255,0.12)"
      />
      {/* soft light + ground */}
      <ellipse cx="200" cy="250" rx="150" ry="16" fill="rgba(0,0,0,0.12)" />
      <g opacity="0.96">
        <Silhouette art={art} />
      </g>
    </svg>
  );
}
