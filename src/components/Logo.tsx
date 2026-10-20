import Link from "next/link";
import type { Locale } from "@/dictionaries";
import { ChainMark } from "./ChainMark";

export default function Logo({
  lang,
  fullName,
  light = false,
}: {
  lang: Locale;
  fullName: string;
  light?: boolean;
}) {
  return (
    <Link href={`/${lang}`} className="flex items-center gap-3 group">
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:-translate-y-0.5 ${
          light ? "bg-white/10" : "bg-silver-50 ring-1 ring-line"
        }`}
        aria-hidden="true"
      >
        <ChainMark className="h-7 w-7" />
      </span>
      <span className="leading-tight">
        <span
          className={`block text-[17px] font-bold tracking-tight ${
            light ? "text-white" : "text-foreground"
          }`}
        >
          SARIDA
        </span>
        <span
          className={`block text-[10px] font-medium leading-tight tracking-wide ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {fullName}
        </span>
      </span>
    </Link>
  );
}
