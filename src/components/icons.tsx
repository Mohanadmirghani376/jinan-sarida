import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 16V7a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9" />
      <path d="M14 9h3.5a1 1 0 0 1 .8.4l2.2 2.9a1 1 0 0 1 .2.6V16" />
      <path d="M3 16h1.5M10.5 16h3M18.5 16H21" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  );
}

export function ExcavatorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17h6l1-4h5" />
      <path d="M4 13h6v4H4z" />
      <path d="M11 13l3-5 4 2-2 4" />
      <path d="M18 14l2 3-2 1-2-2" />
      <circle cx="6" cy="18.5" r="1.5" />
      <circle cx="12" cy="18.5" r="1.5" />
      <circle cx="18" cy="18.5" r="1.5" />
    </svg>
  );
}

export function TractorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 15h5l1-4h4v4h3" />
      <path d="M10 11V7h4l2 4" />
      <circle cx="7" cy="16.5" r="2.5" />
      <circle cx="17.5" cy="16.5" r="3" />
    </svg>
  );
}

export function MedicalIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="6" width="16" height="13" rx="2" />
      <path d="M9 6V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V6" />
      <path d="M12 10v5M9.5 12.5h5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12.5l5 5 11-11" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" />
    </svg>
  );
}

export function ShipIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 15l1.5-4h15L21 15" />
      <path d="M12 11V6M9 6h6" />
      <path d="M2 18c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1" />
    </svg>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="3.5" height="5" rx="1.5" />
      <rect x="17.5" y="13" width="3.5" height="5" rx="1.5" />
      <path d="M20 18v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6 8.5-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5L14 12.5 18 14v3a2 2 0 0 1-2.2 2A15 15 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c4-4 6-7 6-10a6 6 0 1 0-12 0c0 3 2 6 6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.4 1-1v-.8l-1.6-.7-.7.8a5 5 0 0 1-2-2l.8-.7L10.8 9H10a.5.5 0 0 0-.5.5z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
